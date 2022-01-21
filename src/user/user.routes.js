const { Router } = require("express");
const { addUser, logIn, deleteUser } = require("./user.controllers");
const { getStageData, getLocationData} = require("../data/data.controller");
const { hashing, tokenCheck } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashing, addUser);
userRouter.post("/login", logIn);
userRouter.get("/user", tokenCheck, logIn);
userRouter.delete("/user", hashing, deleteUser);
userRouter.get("/stage", tokenCheck, getStageData);
userRouter.get("/location", tokenCheck, getLocationData);

module.exports = userRouter;