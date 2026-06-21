const express = require('express');

const router = express.Router();

// Status endpoint
router.get('/status', (req, res) => {
  res.json({ message: 'Backend API is running' });
});

module.exports = router;
