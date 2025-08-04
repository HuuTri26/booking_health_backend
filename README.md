# Healthcare Booking System

## Overview

This is a full-stack healthcare booking application built with Node.js and Express on the backend. The system allows patients to book appointments with doctors, manage medical specialties, clinics, and provides a comprehensive healthcare management solution.

## Technology Stack

### Backend

- Node.js - JavaScript runtime environment
- Express.js - Web application framework
- Sequelize ORM - Object-Relational Mapping for database interactions
- MySQL - Relational database management system
- JWT - Authentication and authorization
- Nodemailer - Email service integration for appointment confirmations and reminders

### Development Tools

- Babel - JavaScript compiler for using next generation JavaScript
- Nodemon - Utility for automatic server restart during development
- Sequelize CLI - Command line interface for Sequelize migrations and seeding

## Features

### User Management

- User registration and authentication
- Role-based access control (Admin, Doctor, Patient)
- User profile management

### Doctor Management

- Doctor profile creation and management
- Doctor specialty and clinic association
- Doctor schedule management
- Patient appointment tracking

### Patient Services

- Appointment booking with preferred doctors
- Email verification for appointments
- Medical history tracking

### Clinic & Specialty Management

- Create and manage medical specialties
- Create and manage clinics
- Associate doctors with specialties and clinics

### Administrative Features

- CRUD operations for users, doctors, specialties, and clinics
- System configuration and management

## API Endpoints

### Authentication

- POST /api/login - User login

### User Management

- GET /api/get-all-users - Get all users
- POST /api/create-new-user - Create a new user
- PUT /api/edit-user - Edit user information
- DELETE /api/delete-user - Delete a user

### Doctor Management

- GET /api/top-doctor-home - Get top doctors for homepage
- GET /api/get-all-doctors - Get all doctors
- POST /api/save-infor-doctors - Save doctor information
- GET /api/get-detail-doctor-by-id - Get doctor details by ID
- POST /api/bulk-create-schedule - Create doctor schedules in bulk
- GET /api/get-schedule-doctor-by-date - Get doctor schedule by date
- GET /api/get-extra-infor-doctor-by-id - Get extra doctor information
- GET /api/get-profile-doctor-by-id - Get doctor profile
- GET /api/get-list-patient-for-doctor - Get list of patients for a doctor
- POST /api/send-remedy - Send remedy to patient

### Patient Management

- POST /api/patient-book-appointment - Book an appointment
- POST /api/verify-book-appointment - Verify appointment booking

### Specialty Management

- POST /api/create-new-specialty - Create a new specialty
- GET /api/get-specialty - Get all specialties
- GET /api/get-detail-specialty-by-id - Get specialty details by ID

### Clinic Management

- POST /api/create-new-clinic - Create a new clinic
- GET /api/get-clinic - Get all clinics
- GET /api/get-detail-clinic-by-id - Get clinic details by ID

## Database Structure

The application uses a relational database with the following main entities:

- Users - Stores user information including doctors and patients
- Bookings - Manages appointment bookings
- Schedules - Handles doctor availability
- Specialties - Medical specialties
- Clinics - Healthcare facilities
- Allcodes - System-wide reference data
- Doctor_Infor - Additional doctor information
- Markdown - Rich text content for profiles and descriptions

## Setup and Installation

### Prerequisites

- Node.js (v12 or higher)
- MySQL
- npm or yarn

### Installation Steps

Clone the repository

```
git clone <repository-url>
cd demofullstack
```

Install dependencies

```
npm install
```

Configure environment variables

- Create a .env file based on .env.example
- Set your database credentials and other configuration options

Run database migrations

```
npx sequelize-cli db:migrate
```

Start the development server

```
npm start
```
