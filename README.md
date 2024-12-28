# Food Delivery Application

## Project Overview

The **Food Delivery Application** is a full-stack app designed to facilitate online food ordering. The app features a user-friendly interface, secure authentication, and smooth interaction between the frontend, backend, and database. It is built with the following technologies:

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) and Google OAuth for secure login

This app allows users to browse available restaurants, select food items, and place orders, all within a responsive and intuitive UI.

## Features

### 1. **User Authentication**
- Secure user registration and login with JWT-based authentication.
- Google OAuth integration for Single Sign-On (SSO) for easy account creation and login.

### 2. **Food Catalog**
- Displays a variety of food items from different restaurants.
- Users can search, filter, and view food categories.

### 3. **Order Placement**
- Users can add food items to the cart and place orders with customization options (size, quantity, etc.).

### 4. **Admin Dashboard**
- An **Admin Dashboard** is provided for restaurant management, where admins can add, update, and delete food items and manage orders.
- Admins can view user activity, order history, and generate reports for data analysis.

### 5. **CI/CD Pipeline**
- Set up Jenkins to automate the build, testing, and deployment process to ensure continuous integration and continuous delivery.

### 6. **AWS S3 Integration**
- Static assets (images, logos, etc.) are stored and served from an AWS S3 bucket, optimizing performance and scalability.

---

## Installation

### Prerequisites
Make sure you have the following installed on your system:

- Node.js and npm (Node Package Manager)
- MongoDB instance (local or MongoDB Atlas)
- AWS CLI (for AWS integration)
- Jenkins (if you are setting up CI/CD)

### 1. **Clone the repository**

```
git clone https://github.com/ayush1725/Food-Delivery-App.git
cd Food-Delivery-App
```
### 2. **Install dependencies**
For Backend (Node.js/Express):

```
cd backend
npm install
```
For Frontend (React.js):

```
cd frontend
npm install
```
### 3. **Configuration**

Set up environment variables for JWT secret and database connection in .env file in the backend directory.
Configure AWS S3 bucket for image hosting.

### 4. **Run the application locally**
Start the backend server:

```
cd backend
npm start
```
Start the frontend server:

```
cd frontend
npm start
```
---

## CI/CD Pipeline Setup
The project uses GitHub Actions for automating the build, testing, and deployment process.

### 1. **Build and Deploy with GitHub Actions**
The `build-and-deploy.yml` file is configured for automating:

Build: Compiling the frontend and backend code.
Deploy: Deploying the frontend to AWS S3 bucket and backend to a hosting platform.
GitHub Actions will run on push events to the `main` branch, automating the deployment process.

---

## Upcoming Features
Here are the upcoming features that will be added in future versions of this project:

### 1. **Payment Gateway Integration**

Integration with popular payment gateways (e.g., Stripe, PayPal) to handle secure payments.

### 2. **Shortest Delivery Distance Algorithm**

Use Dijkstra’s Algorithm or similar algorithms to calculate the shortest delivery route based on user location and restaurant distance.

### 3. **Ratings and Reviews**

Allow users to rate restaurants and food items, helping other users make informed decisions.

### 4. **Order Tracking**

Real-time order tracking for users to see the status of their orders and estimated delivery time.

### 5. **Admin Dashboard Enhancements**

More granular control for admins to manage users, view analytics, and get real-time insights into orders.

### 6. **Push Notifications**

Enable push notifications for users when their orders are confirmed, dispatched, and delivered.

## Conclusion

The **Food Delivery Application** offers a seamless user experience with features like secure authentication, an intuitive food catalog, and an admin dashboard for easy management. Built with React.js, Node.js, and MongoDB, it ensures scalability and performance. The integration of GitHub Actions and AWS S3 optimizes the development and deployment process.

With upcoming features like payment gateway integration, shortest delivery distance algorithms, and real-time order tracking, this app is set to provide even more value to both users and admins.

