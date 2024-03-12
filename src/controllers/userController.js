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
    let userData = await userService.handleUserLogin(email, password)
    /// check email exist
    //compare password
    //return userInfo
    //access token:jwt
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}
let handleGetAllUsers = async (req, res) => {
    let id = req.body.id //all , id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter',
            users: []
        })
    }
    let users = await userService.getAllUsers(id)
    return res.status(200).json({
        errCode: 1,
        errMessage: 'Missing required parameter',
        users
    })
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers
}