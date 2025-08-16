import db from "../models/index";
import bcrypt from "bcryptjs";

// Hash password with per-password random salt
const hashUserPassword = async (password) => {
  const plain = String(password ?? "");
  if (!plain) throw new Error("Password is required");
  // bcrypt.hash will generate a salt internally when given a number
  return await bcrypt.hash(plain, 10);
};

const handleUserLogin = async (email, password) => {
  const userData = {};
  try {
    const user = await db.User.findOne({
      attributes: [
        "id",
        "email",
        "roleId",
        "password",
        "firstName",
        "lastName",
      ],
      where: { email },
      raw: true,
    });

    if (!user) {
      userData.errCode = 1;
      userData.errMessage = `your's email isn't exist in your system.Pls try orther email!`;
      return userData;
    }

    // Some DBs (e.g., MySQL with BLOB) return Buffers; ensure the hash is a string
    const hashed = Buffer.isBuffer(user.password)
      ? user.password.toString("utf8")
      : String(user.password ?? "");

    const ok = await bcrypt.compare(String(password ?? ""), hashed);

    if (!ok) {
      userData.errCode = 3;
      userData.errMessage = "Wrong Password";
      return userData;
    }

    userData.errCode = 0;
    userData.errMessage = "OK";
    const { password: _ignored, ...safeUser } = user;
    userData.user = safeUser;
    return userData;
  } catch (e) {
    throw e;
  }
};

// Check whether an email exists
const checkUserEmail = async (userEmail) => {
  try {
    const user = await db.User.findOne({ where: { email: userEmail } });
    return !!user;
  } catch (e) {
    throw e;
  }
};

const getAllUsers = async (userId) => {
  try {
    if (userId === "ALL") {
      return await db.User.findAll({
        attributes: { exclude: ["password"] },
      });
    }
    if (userId && userId !== "ALL") {
      return await db.User.findOne({
        where: { id: userId },
        attributes: { exclude: ["password"] },
      });
    }
    // If no userId specified, return empty list for consistency
    return [];
  } catch (e) {
    throw e;
  }
};

const createNewUser = async (data) => {
  try {
    const exists = await checkUserEmail(data.email);
    if (exists) {
      return {
        errCode: 1,
        errMessage: "your email is already exist!,please try another email",
      };
    }

    const hashPasswordFromBcrypt = await hashUserPassword(data.password);

    await db.User.create({
      email: data.email,
      password: hashPasswordFromBcrypt,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phonenumber: data.phonenumber,
      gender: data.gender,
      roleId: data.roleId,
      positionId: data.positionId,
      image: data.avatar,
    });

    return {
      errCode: 0,
      message: "OK",
    };
  } catch (e) {
    throw e;
  }
};

const deleteUser = async (userId) => {
  try {
    const foundUser = await db.User.findOne({ where: { id: userId } });
    if (!foundUser) {
      return {
        errCode: 2,
        errMessage: "the user iin't exist!",
      };
    }

    await db.User.destroy({ where: { id: userId } });

    return {
      errCode: 0,
      message: "the user has deleted!",
    };
  } catch (e) {
    throw e;
  }
};

const updateUserData = async (data) => {
  try {
    if (!data.id || !data.roleId || !data.positionId || !data.gender) {
      return {
        errCode: 2,
        errMessage: "Missing required parameter!",
      };
    }

    const user = await db.User.findOne({ where: { id: data.id }, raw: false });

    if (!user) {
      return {
        errCode: 1,
        errMessage: "User's not found!1",
      };
    }

    user.firstName = data.firstName;
    user.lastName = data.lastName;
    user.address = data.address;
    user.roleId = data.roleId;
    user.positionId = data.positionId;
    user.gender = data.gender;
    user.phonenumber = data.phonenumber;
    if (data.avatar) {
      user.image = data.avatar;
    }

    await user.save();

    return {
      errCode: 0,
      message: "update user succeeded!",
    };
  } catch (e) {
    throw e;
  }
};

const getAllCodeService = async (typeInput) => {
  try {
    if (!typeInput) {
      return {
        errCode: 1,
        errMessage: "Missing parameter!",
      };
    }

    const allcode = await db.Allcode.findAll({ where: { type: typeInput } });

    return {
      errCode: 0,
      data: allcode,
    };
  } catch (e) {
    throw e;
  }
};

module.exports = {
  handleUserLogin,
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUserData,
  getAllCodeService,
};
