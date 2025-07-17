# Mini-URL-Shortener-API
A fast, lightweight REST API to shorten long URLs and redirect them using custom aliases using `nanoid`, with redirection and custom alias support. Built with Node.js, Express, and MongoDB.

## Features
- 🔧 Shorten long URLs to short unique aliases
- 🧩 Custom alias support
- 🔄 Redirect short URL to original URL
- 🧹 Expiry via TTL indexing in MongoDB
- ⚠️ Robust error handling
- 📦 JSON response for API endpoints

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **ID Generation**: `nanoid`
- **Testing**: Postman
- **Hosting**: (Add if deployed: e.g., Render, Vercel, Railway)

## Performance
- ✅ Low latency redirection (~20ms)
- ✅ Scalable design with MongoDB indexing

## Project Structure
📦 mini-url-shortener-api/
├── 📁 routes/
│   └── urlRoutes.js
├── 📁 models/
│   └── urlModel.js
├── 📁 controllers/
│   └── urlController.js
├── 📄 server.js
├── 📄 .env
└── 📄 README.md
