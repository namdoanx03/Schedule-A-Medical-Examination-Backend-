import userService from "../services/userService"

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).send({
            errCode: 1,
            message: "Missing inputs paramrter!"
        })
    }
    let userData =  await userService.handleUserLogin(email, password)
    /// check email exist
    //compare password
    //return userInfo
    //access token:jwt
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData
    })
}
module.exports = {
    handleLogin: handleLogin
}