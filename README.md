# URL_Shortener


This is a Node.js + Express-based backend service that shortens long URLs, similar to services like Bitly. It uses **MongoDB** for database storage and **NanoID** to generate unique short codes. Optional expiration dates and click tracking are supported.

## 🚀 Features

- Shorten long URLs to short, unique links
- Automatically expires links (optional)
- Tracks number of clicks per short URL
- RESTful API (tested via Postman)
- MongoDB connection via Mongoose
- Environment-based config using dotenv

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **NanoID** for generating short IDs
- **Redis** (optional)
- **Dotenv** for environment configuration

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MuhammadUmer2004-sys/URL_Shortener.git
   cd URL_Shortener

    Install dependencies:

npm install

Create a .env file in the root directory and add your MongoDB URI:

MONGO_URI=your_mongodb_connection_string
PORT=5501

Start the server:

node server.js

You should see:

    MongoDB connected
    Server running on port 5501

📬 API Endpoints
Method	Endpoint	Description
POST	/shorten	Shortens a long URL
GET	/:shortId	Redirects to original
Example POST request body (JSON):

{
  "originalUrl": "https://youtube.com",
  "expiresInDays": 2
}

Response:

{
  "shortUrl": "http://localhost:5501/7G__crq"
}

📁 Project Structure

url-shortener/
├── config/
│   └── db.js
├── controllers/
│   └── urlController.js
├── models/
│   └── Url.js
├── routes/
│   └── urlRoutes.js
├── .env
├── package.json
└── server.js

🧑‍💻 Author

    Muhammad Umer

    GitHub: @MuhammadUmer2004-sys

📄 License

This project is licensed under the MIT License.


---

### ✅ How to use this:
1. Copy the above into a new file called `README.md` in your project folder.
2. Commit and push it:

```bash
git add README.md
git commit -m "Add README file"
git push
