const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  addOrganizationMain,
  addOrganizationSub,
  addOrganizationHospital,
  login,
  checkpass,
  getUserByUserId,
  getUserByUserEmail,
  getUsers,
  updateUsers,
  updatePassword,
  updateProfiles,
  updateOrganization_main,
  updateOrganization_sub,
  updatedeleteUser,
  deleteUser,
  deleteOrganization,
  getOrganizations,
  getOrganizationsByPermission,
  getOrganizationsByID,
  getOrganizations_all,
  getStatus,
  getUserOrganizations,
  getPermission,
  getOrganizationByID,
  getOrganizationByName,
  getUserByPermission,
} = require("./user.controller");
router.get("/", checkToken, getUsers);
router.get("/getOrganizations_all", checkToken, getOrganizations_all);
router.get(
  "/getUserOrganizations/:organization",
  checkToken,
  getUserOrganizations
);
router.get("/getPermission/:permission", checkToken, getPermission);
router.get("/getOrganizationByID/:id", checkToken, getOrganizationByID);
router.get("/getOrganizationByName/:id", checkToken, getOrganizationByName);
router.get(
  "/getUserByPermission/:permission/:owner",
  checkToken,
  getUserByPermission
);
router.get("/getOrganizations/:permission/:byid", checkToken, getOrganizations);
router.get(
  "/getOrganizationsByPermission/:permission",
  checkToken,
  getOrganizationsByPermission
);
router.get(
  "/getOrganizationsByID/:permission",
  checkToken,
  getOrganizationsByID
);
router.get("/getStatus", checkToken, getStatus);
router.post("/register", checkToken, createUser);
router.post("/addOrganizationMain", checkToken, addOrganizationMain);
router.post("/addOrganizationSub", checkToken, addOrganizationSub);
router.post("/addOrganizationHospital", checkToken, addOrganizationHospital);
router.get("/:id", checkToken, getUserByUserId);
router.get("/getUserByUserEmail/:email", checkToken, getUserByUserEmail);
router.post("/login", login);
router.post("/checkpass", checkpass);
router.patch("/updatePassword", checkToken, updatePassword);
router.patch("/updateUsers", checkToken, updateUsers);
router.patch("/updateProfiles", checkToken, updateProfiles);
router.patch("/updateOrganization_main", checkToken, updateOrganization_main);
router.patch("/updateOrganization_sub", checkToken, updateOrganization_sub);
router.patch("/updatedeleteUser", checkToken, updatedeleteUser);
router.delete("/deleteUser", checkToken, deleteUser);
router.delete("/deleteOrganization", checkToken, deleteOrganization);

module.exports = router;
