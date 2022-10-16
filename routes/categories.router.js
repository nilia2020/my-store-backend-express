const express = require('express');
const CategorieService = require('./../services/categories.service');
const router = express.Router();
const service = new CategorieService();
router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

module.exports = router;
