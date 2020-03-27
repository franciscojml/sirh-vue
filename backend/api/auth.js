const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt');
const activedirectory = require('activedirectory')

module.exports = app => {

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch (e) {
            // problema com o token
        }

        res.send(false)
    }

    return { validateToken }
}