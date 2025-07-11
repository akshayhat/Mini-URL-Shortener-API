const express = require('express');
const router = express.Router();

const {
  shortenUrl,
  redirectToOriginalUrl
} = require('../controllers/urlController');

// POST /shorten
router.post('/shorten', shortenUrl);

// GET /:code
router.get('/:code', redirectToOriginalUrl);

module.exports = router;
