"use strict";

var _index = _interopRequireDefault(require("../models/index"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _excluded = ["password"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Hash password with per-password random salt
var hashUserPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(password) {
    var plain;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          plain = String(password !== null && password !== void 0 ? password : "");
          if (plain) {
            _context.n = 1;
            break;
          }
          throw new Error("Password is required");
        case 1:
          _context.n = 2;
          return _bcryptjs["default"].hash(plain, 10);
        case 2:
          return _context.a(2, _context.v);
      }
    }, _callee);
  }));
  return function hashUserPassword(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleUserLogin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(email, password) {
    var userData, _user$password, user, hashed, ok, _ignored, safeUser, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          userData = {};
          _context2.p = 1;
          _context2.n = 2;
          return _index["default"].User.findOne({
            attributes: ["id", "email", "roleId", "password", "firstName", "lastName"],
            where: {
              email: email
            },
            raw: true
          });
        case 2:
          user = _context2.v;
          if (user) {
            _context2.n = 3;
            break;
          }
          userData.errCode = 1;
          userData.errMessage = "your's email isn't exist in your system.Pls try orther email!";
          return _context2.a(2, userData);
        case 3:
          // Some DBs (e.g., MySQL with BLOB) return Buffers; ensure the hash is a string
          hashed = Buffer.isBuffer(user.password) ? user.password.toString("utf8") : String((_user$password = user.password) !== null && _user$password !== void 0 ? _user$password : "");
          _context2.n = 4;
          return _bcryptjs["default"].compare(String(password !== null && password !== void 0 ? password : ""), hashed);
        case 4:
          ok = _context2.v;
          if (ok) {
            _context2.n = 5;
            break;
          }
          userData.errCode = 3;
          userData.errMessage = "Wrong Password";
          return _context2.a(2, userData);
        case 5:
          userData.errCode = 0;
          userData.errMessage = "OK";
          _ignored = user.password, safeUser = _objectWithoutProperties(user, _excluded);
          userData.user = safeUser;
          return _context2.a(2, userData);
        case 6:
          _context2.p = 6;
          _t = _context2.v;
          throw _t;
        case 7:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 6]]);
  }));
  return function handleUserLogin(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

// Check whether an email exists
var checkUserEmail = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(userEmail) {
    var user, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _index["default"].User.findOne({
            where: {
              email: userEmail
            }
          });
        case 1:
          user = _context3.v;
          return _context3.a(2, !!user);
        case 2:
          _context3.p = 2;
          _t2 = _context3.v;
          throw _t2;
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function checkUserEmail(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getAllUsers = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(userId) {
    var _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          if (!(userId === "ALL")) {
            _context4.n = 2;
            break;
          }
          _context4.n = 1;
          return _index["default"].User.findAll({
            attributes: {
              exclude: ["password"]
            }
          });
        case 1:
          return _context4.a(2, _context4.v);
        case 2:
          if (!(userId && userId !== "ALL")) {
            _context4.n = 4;
            break;
          }
          _context4.n = 3;
          return _index["default"].User.findOne({
            where: {
              id: userId
            },
            attributes: {
              exclude: ["password"]
            }
          });
        case 3:
          return _context4.a(2, _context4.v);
        case 4:
          return _context4.a(2, []);
        case 5:
          _context4.p = 5;
          _t3 = _context4.v;
          throw _t3;
        case 6:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 5]]);
  }));
  return function getAllUsers(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var createNewUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(data) {
    var exists, hashPasswordFromBcrypt, _t4;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _context5.n = 1;
          return checkUserEmail(data.email);
        case 1:
          exists = _context5.v;
          if (!exists) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, {
            errCode: 1,
            errMessage: "your email is already exist!,please try another email"
          });
        case 2:
          _context5.n = 3;
          return hashUserPassword(data.password);
        case 3:
          hashPasswordFromBcrypt = _context5.v;
          _context5.n = 4;
          return _index["default"].User.create({
            email: data.email,
            password: hashPasswordFromBcrypt,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phonenumber: data.phonenumber,
            gender: data.gender,
            roleId: data.roleId,
            positionId: data.positionId,
            image: data.avatar
          });
        case 4:
          return _context5.a(2, {
            errCode: 0,
            message: "OK"
          });
        case 5:
          _context5.p = 5;
          _t4 = _context5.v;
          throw _t4;
        case 6:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 5]]);
  }));
  return function createNewUser(_x6) {
    return _ref5.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(userId) {
    var foundUser, _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return _index["default"].User.findOne({
            where: {
              id: userId
            }
          });
        case 1:
          foundUser = _context6.v;
          if (foundUser) {
            _context6.n = 2;
            break;
          }
          return _context6.a(2, {
            errCode: 2,
            errMessage: "the user iin't exist!"
          });
        case 2:
          _context6.n = 3;
          return _index["default"].User.destroy({
            where: {
              id: userId
            }
          });
        case 3:
          return _context6.a(2, {
            errCode: 0,
            message: "the user has deleted!"
          });
        case 4:
          _context6.p = 4;
          _t5 = _context6.v;
          throw _t5;
        case 5:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 4]]);
  }));
  return function deleteUser(_x7) {
    return _ref6.apply(this, arguments);
  };
}();
var updateUserData = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(data) {
    var user, _t6;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          if (!(!data.id || !data.roleId || !data.positionId || !data.gender)) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2, {
            errCode: 2,
            errMessage: "Missing required parameter!"
          });
        case 1:
          _context7.n = 2;
          return _index["default"].User.findOne({
            where: {
              id: data.id
            },
            raw: false
          });
        case 2:
          user = _context7.v;
          if (user) {
            _context7.n = 3;
            break;
          }
          return _context7.a(2, {
            errCode: 1,
            errMessage: "User's not found!1"
          });
        case 3:
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
          _context7.n = 4;
          return user.save();
        case 4:
          return _context7.a(2, {
            errCode: 0,
            message: "update user succeeded!"
          });
        case 5:
          _context7.p = 5;
          _t6 = _context7.v;
          throw _t6;
        case 6:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 5]]);
  }));
  return function updateUserData(_x8) {
    return _ref7.apply(this, arguments);
  };
}();
var getAllCodeService = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(typeInput) {
    var allcode, _t7;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          if (typeInput) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2, {
            errCode: 1,
            errMessage: "Missing parameter!"
          });
        case 1:
          _context8.n = 2;
          return _index["default"].Allcode.findAll({
            where: {
              type: typeInput
            }
          });
        case 2:
          allcode = _context8.v;
          return _context8.a(2, {
            errCode: 0,
            data: allcode
          });
        case 3:
          _context8.p = 3;
          _t7 = _context8.v;
          throw _t7;
        case 4:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 3]]);
  }));
  return function getAllCodeService(_x9) {
    return _ref8.apply(this, arguments);
  };
}();
module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
  getAllCodeService: getAllCodeService
};