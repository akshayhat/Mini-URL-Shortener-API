const crypto = require('crypto');
const validUrl = require('valid-url');
const Url = require('../models/Url');

// POST /shorten
exports.shortenUrl = async (req, res) => {
  const { url } = req.body;

  if (!url || !validUrl.isUri(url)) {
    return res.status(400).json({ error: 'Invalid or missing URL' });
  }

  const shortCode = crypto.randomBytes(3).toString('hex');
  const baseUrl = process.env.BASE_URL;

  const newUrl = new Url({ originalUrl: url, shortCode });
  await newUrl.save();

  res.status(201).json({ shortUrl: `${baseUrl}/${shortCode}` });
};

// GET /:code
exports.redirectToOriginalUrl = async (req, res) => {
  const { code } = req.params;

  try {
    const urlEntry = await Url.findOne({ shortCode: code });

    if (urlEntry) {
      urlEntry.clickCount += 1;
      await urlEntry.save();
      return res.redirect(urlEntry.originalUrl);
    } else {
      return res.status(404).json({ error: 'Short URL not found' });
    }
  } catch (err) {
    console.error('Redirect error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};