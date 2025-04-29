🛒 E-commerce Website (Full Stack Project)

This is a full-stack e-commerce website built with Next.js, Node.js (Express), React, MongoDB, Sequelize ORM, Stripe API for payments, AWS for media storage, and Docker for containerization — following the MVC (Model-View-Controller) design pattern.
📚 Tech Stack
Frontend	Backend	Database	Other
Next.js (React)	Node.js (Express)	PostgreSQL	Docker
Tailwind CSS / SCSS	Sequelize ORM		AWS S3 (for uploads)
Stripe API			REST API
🚀 Features

    User authentication (sign up, login, logout)

    Product listing, filtering, and search

    Shopping cart and checkout system

    Stripe payment integration

    Admin dashboard (product management)

    Responsive design (mobile-friendly)

    AWS S3 storage for product images

    Fully containerized with Docker

    Secure API (CORS, dotenv, input validation)

 Project Structure

/client         # Frontend (Next.js + React)
/server         # Backend (Express + PostgreSQL + Sequelize)
/server/models  # Sequelize models (tables)
/server/routes  # API routes (controllers)
/server/config  # Sequelize and environment config

 Installation & Setup
1. Clone the Repository

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name



3. Install Dependencies
Backend:

cd server
npm install

Frontend:

cd client
npm install



Sync tables:

cd server
npm run dev  # or node server.js

5. Running the App
Development mode:

    Start the backend:

cd server
npm run dev

    Start the frontend:

cd client
npm run dev

	
✨ Future Improvements

    Add user reviews and ratings

    Implement product inventory management

    Social login (Google/Facebook)

    Admin order management panel

    Improve Docker deployment setup

📜 License

This project is licensed under the MIT License.
🧠 Daniel Macias

Made  by Daniel Macias
