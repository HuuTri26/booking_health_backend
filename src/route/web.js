//duong vao trang web:
//Xuat phat diem==>controller(lay du lieu , tro lại dữ liệu...)==>view.
//get: lay du lieu.
import express from "express";

//mo hinh mvc:
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";
//Nguoi dung vao dau tien.
let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);
  router.post("/post-crud", homeController.postCRUD);
  //Khai bao 1 chuc nang moi.
  router.get("/get-crud", homeController.displaygetCRUD);
  //goi den controllers=> goi ham gethomePage.
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);
  //rest api.
  // router.pos('/hoitribui', (req, res) => {
  //     return res.send('Hello Tri !')
  // });

  //Viết API:(RESTAPI)
  router.post("/api/login", userController.handleLogin);
  //HIen giao dien tat ca  nguoi dung:
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  //Nhap ,them ,sua ,xoa:
  router.post("/api/create-new-user", userController.handleCreateNewUser);
  router.put("/api/edit-user", userController.handleEditUser);
  router.delete("/api/delete-user", userController.handleDeleteUser);

  router.get("/api/allcode", userController.getAllCode);

  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);

  router.get("/api/get-all-doctors", doctorController.getAllDoctors);

  router.post("/api/save-infor-doctors", doctorController.postInforDoctor);

  router.get(
    "/api/get-detail-doctor-by-id",
    doctorController.getDetailDoctorById
  );

  router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);

  router.get(
    "/api/get-schedule-doctor-by-date",
    doctorController.getScheduleByDate
  );

  router.get(
    "/api/get-extra-infor-doctor-by-id",
    doctorController.getExtraInforDoctorById
  );

  router.get(
    "/api/get-profile-doctor-by-id",
    doctorController.getProfileDoctorById
  );

  router.get(
    "/api/get-list-patient-for-doctor",
    doctorController.getListPatientForDoctor
  );

  router.post("/api/send-remedy", doctorController.sendRemedy);

  router.post(
    "/api/patient-book-appointment",
    patientController.postBookAppointment
  );

  router.post(
    "/api/verify-book-appointment",
    patientController.postVerifyBookAppointment
  );

  router.post("/api/create-new-specialty", specialtyController.createSpecialty);

  router.get("/api/get-specialty", specialtyController.getAllSpecialty);
  router.get(
    "/api/get-detail-specialty-by-id",
    specialtyController.getDetailSpecialtyById
  );

  router.post("/api/create-new-clinic", clinicController.createClinic);

  router.get("/api/get-clinic", clinicController.getAllClinic);
  router.get(
    "/api/get-detail-clinic-by-id",
    clinicController.getDetailClinicById
  );
  // router.put("/api/put-save-allSchedule",doctorController.save)

  return app.use("/", router);
};

module.exports = initWebRouter;
