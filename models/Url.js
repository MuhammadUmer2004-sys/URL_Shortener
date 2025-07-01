import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortId: { type: String, required: true, unique: true },
  clicks: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date } // optional expiration
});

const Url = mongoose.model('Url', UrlSchema);
export default Url;
