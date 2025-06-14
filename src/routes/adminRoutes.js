const express = require("express");
const router = express.Router();
const adminController = require("./../controllers/adminController");
const interviewController =require("./../controllers/interviewController")
const { protect, authorize } = require("./../middleware/authMiddleware");
const responseHandler = require("../middleware/responseHandler");

router.use(responseHandler);

router
  .route("/jobs")
  .post(protect, authorize("admin"), adminController.createJob)
  .get(protect, adminController.getMyJobs);

router.get("/jobs/:jobId/interviews",interviewController.getJobInterviews)

router
  .route("/jobs/:id")
  .put(protect, authorize("admin"), adminController.updateJobById)
  .delete(protect, authorize("admin"), adminController.deleteJobById);


router.get(
  "/jobs/:jobId/applications",
  protect,
  authorize("admin"),
  adminController.getJobApplications
);

router.patch(
  "/applications/:applicationId/status",
  protect,
  authorize("admin"),
  adminController.updateApplicationStatus
);

router.get(
  "/applications/accepted",
  protect,
  authorize("admin"),
  adminController.getAcceptedApplications
);

router.post(
  "/users/:userId/interviews",
  protect,
  authorize("admin"),
  adminController.scheduleUserInterview
);

router.get(
  "/interview/detail/:interviewId",
  adminController.getInterviewConversation
);



module.exports = router;
