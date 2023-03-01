const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.render('musicians/index.ejs')
})

module.exports = router;



