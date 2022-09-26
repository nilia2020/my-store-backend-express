const express = require('express');

const router = express.Router();

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    category: 'category1',
    productId,
    name: 'Product1',
    price: 1000,
  });
});

module.exports = router;
