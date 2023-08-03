const { ctrlerWrapper } = require("../../helpers");

const getCurrent = async(req, res) => {
    const {email, name} = req.user;

    res.json({
        email,
        name
    })
}

module.exports = ctrlerWrapper(getCurrent);