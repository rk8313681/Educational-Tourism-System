# Educational Tourism System

## Project Overview

Educational Tourism System is a web-based application developed to simplify the management of educational tours, events, student registrations, and bookings. The system provides a centralized platform for students, administrators, and institutions to manage educational travel activities efficiently.

The project aims to improve communication, automate booking processes, maintain student records, and provide a user-friendly experience for educational tourism management.

---

## Features

### User Module

* User Registration and Login
* Secure Authentication
* Profile Management
* Password Reset and Recovery
* Google Authentication Support

### Tour Management

* View Educational Tour Packages
* Tour Details and Information
* Tour Images and Descriptions
* Tour Location and Pricing Information

### Booking Management

* Online Tour Booking
* Student Information Collection
* Booking Confirmation
* Payment Processing
* Booking History

### Event Management

* Educational Event Listings
* Event Information Display
* Event Registration

### Review System

* User Reviews and Ratings
* Feedback Collection
* Review Management

### Contact Management

* Contact Form Integration
* User Queries Handling
* Communication Support

### Admin Dashboard

* Manage Users
* Manage Tour Packages
* Manage Bookings
* Manage Events
* Manage Contact Requests
* Monitor System Activities

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* EJS Template Engine

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local Strategy
* Google OAuth 2.0

### Cloud Storage

* Cloudinary
* Multer
* Multer Storage Cloudinary

---

## Project Structure

```text
Educational_Tourism_System
│
├── controllers
├── models
├── routes
├── views
├── public
├── utils
├── init
├── app.js
├── middleware.js
├── cloudConfig.js
├── schema.js
├── package.json
└── package-lock.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/rk8313681/Educational-Tourism-System.git
```

### Move to Project Folder

```bash
cd Educational-Tourism-System
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file and add:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_secret_key
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run Project

```bash
node app.js
```

Server will start on:

```text
http://localhost:8080
```

---

## Future Enhancements

* Online Payment Gateway Integration
* Email Notifications
* Mobile Application Support
* AI-based Tour Recommendations
* Advanced Analytics Dashboard

---

## Author

**Ravi Kumar**

MCA Final Year Project

Makhanlal Chaturvedi National University of Journalism and Communication, Bhopal

---

## License

This project is developed for educational and academic purposes.
