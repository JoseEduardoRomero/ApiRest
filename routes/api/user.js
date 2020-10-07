const express = require("express");
const router = express.Router();
const UsersService = require("../../services/users");

const UserService = new UsersService();

//Todo esto es un controlador
//Los routes deberian de llamar a algun servicio

router.get("/getUsers", async function (res) {
  try {
    const users = await UserService.getUsers();
    res.status(200).json({
      success: true,
      data: users,
      message: "users listed",
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
      message: "Error",
    });
  }
});

router.get("/getUser/:userId", async function (req, res, next) {
  const { userId } = req.params;
  try {
    const user = await UserService.getUser({ userId });
    res.status(200).json({
      data: user,
      message: "products retrieved",
      success: true
    });
  } catch (err) {
    res.status(404).json({
        success: false,
        message: 'Error Not Found'
    })
  }
});

router.post("/addUser", async function (req, res) {
  const { body: product } = req;
  try {
    //Lo de body: product es un alias
    const createUser = await UserService.createUser({ product });
    res.status(201).json({
      id_: createUser,
      message: "User Add",
      status: true,
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: "Error",
    });
  }
});

router.put("/updateUser/:userId", async function (req, res, next) {
  const { userId } = req.params;
  const { body: user } = req;
  try {
    const updateUser = await UserService.updateProduct({ userId, user });
    res.status(200).json({
      _id: updateUser,
      message: "user updated",
      success: true,
    });
  } catch (err) {
    res.status(404).json({
      message: "Error",
      success: false
    });
  }
});

router.delete("/deleteUser/:userId", async function (req, res, next) {
  const { userId } = req.params;
  try {
    const user = await UserService.deleteUser({ userId });
    res.status(200).json({
      _id: user,
      message: "products delete",
      success: true,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Error Not Found"
    });
  }
});

module.exports = router;
