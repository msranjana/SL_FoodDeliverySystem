# SL_FoodDeliverySystem
# Food Delivery System

This is a simple RESTful API for managing a food ordering system. It supports operations to manage the menu, place orders, and track order statuses. The API is built with **Express** and **Node.js**, and it uses a cron job to update the order statuses (e.g., "Preparing", "Out for Delivery", "Delivered").

## Features

- **Menu Management**: Add or update food items in the menu.
- **Order Management**: Place orders, view order details, and track order statuses.
- **Order Status Updates**: The system automatically updates the order status based on the prepared and delivery times using a cron job.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: In-memory storage (Menu and Orders)
- **Cron Jobs**: `node-cron`
- **Postman**: API testing with the provided Postman collection.

## Installation

### Prerequisites

- **Node.js** (>= 14.x)
- **npm** (Node Package Manager)

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
https://github.com/msranjana/SL_FoodDeliverySystem.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd Skilllab-FoodDeliveryApp
npm install
```

### 3. Run the Application

Start the server:

```bash
npm start
```

The API will be available at [http://localhost:3000](http://localhost:3000).

## **API Endpoints**

### **1. Menu Endpoints**

#### **Add Menu Item**
- **Method**: `POST`
- **Endpoint**: `/menu`
- **Description**: Adds a new menu item to the system.
- **Request Body**:
  ```json
  {
    "name": "Pizza",
    "price": 150,
    "category": "Main Course"
  }
