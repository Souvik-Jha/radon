const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    if (!data.mobile)
    return xyz.status(400).send("please enter mobile no.")
    let savedData = await userModel.create(data);
    // console.log(abcd.newAtribute);
    xyz.status(201).send({ msg: savedData });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    xyz.status(500).send({ msg: "Error", error: err.message })
  }
};



const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    if (!userName)
    return res.send({msg: "enter username",});

    if (!password)
    return res.send({msg: "enter password",});

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({status: false, msg: "username or the password is not corerct",});

    // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret
    // The same secret will be used to decode tokens
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FunctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};



const getUserData = async function (req, res) {
  try {

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
    res.send({ status: updatedUser, data: updatedUser });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


let deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { "isDeleted": true } }, { new: true })
    res.send({ status: updatedUser, data: updatedUser });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;

