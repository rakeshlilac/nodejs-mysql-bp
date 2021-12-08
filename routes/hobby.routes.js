const express = require('express');
const router = express.Router();
const hobby = require('../services/hobbies');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await hobby.getMultiple(req.query.name));
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
});

/* POST programming language */
router.post('/', async function(req, res, next) {
  try {
    var result = await hobby.create(req.body);
    return res.send('ok')
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put('/:id', async function(req, res, next) {
  try {
    var x = await hobby.update(req.params.id, req.body);
    res.send("ok")
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
});



module.exports = router;
