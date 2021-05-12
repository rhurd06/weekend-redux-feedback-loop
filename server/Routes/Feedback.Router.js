const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('In feedback router, req.body:', req.body);
    const setFeeling = req.body.feeling;
    const setUnderstanding = req.body.understanding;
    const setSupport = req.body.support;
    const setComments = req.body.comments;

    const sqlQuery = `INSERT INTO "feedback"
        (feeling, understanding, support, comments)
        VALUES ($1, $2, $3, $4);`;
    
        pool.query(sqlQuery,
            [setFeeling, setUnderstanding,
            setSupport, setComments])
        .then( (response) => {
            res.sendStatus(201);
        })
        .catch( (error) => {
            console.log(`Error in feedback POST router`);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    console.log('woot');
    res.sendStatus(201);
})

module.exports = router;