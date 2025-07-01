import { nanoid } from 'nanoid';
import Url from '../models/Url.js'; // Add .js extension

// Controller to shorten the URL
export const shortenUrl = async (req, res) => {
  const { originalUrl, expiresInDays } = req.body;
  const shortId = nanoid(7);

  const expiresAt = expiresInDays
    ? new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000)
    : null;

  const newUrl = new Url({ originalUrl, shortId, expiresAt });
  await newUrl.save();

  res.json({ shortUrl: `${req.headers.host}/${shortId}` });
};

// Controller to redirect the short URL
export const redirectUrl = async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ shortId });

  if (!url || (url.expiresAt && url.expiresAt < Date.now())) {
    return res.status(404).json({ message: 'URL not found or expired' });
  }

  url.clicks++;
  await url.save();

  res.redirect(url.originalUrl);
};
