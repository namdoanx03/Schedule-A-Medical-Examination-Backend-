import db from "../models/index"

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUserEmail(email)
            if (isExist) {
                //user already exist
                //compare password
                resolve()
            } else {
                //return error
                userData.errCode = 1
                userData.errMessage = `Your's Email isn't exist in your system.Plz try other email !`
                resolve(userData)
            }
        } catch (error) {
            reject(e)
        }
    })
}
let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (error) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin
}