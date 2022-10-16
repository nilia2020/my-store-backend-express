const express = require('express');
const CategorieService = require('./../services/users.service');
const router = express.Router();
const service = new CategorieService();
router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

module.exports = router;
