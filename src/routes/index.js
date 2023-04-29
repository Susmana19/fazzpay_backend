//import eksternal
const express = require('express')
const router = express()

const authRoute = require('./auth.route')
const userRoute = require('./user.route')
const transferRoute = require("./transfer.route");

// routing landing page
router.get('/', (req, res)=> {
    return res.send("Backend successfully running at landing page")
})

//routing auth
router.use('/auth', authRoute)

// routing user
router.use('/users', userRoute)

router.use('/transfer', transferRoute);

module.exports = router;