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
git clone https://github.com/NitheshAlva/Skilllab-FoodDeliveryApp.git
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

The API will be available at [http://localhost:8000](http://localhost:8000).

## API Endpoints

### Menu Endpoints

- **POST `/menu`**: Add or update a food item in the menu.
  - Request body (JSON):
    ```json
    {
  "name": "Pizza",
  "price": 150,
  "category": "Main Course"
     }

    ```
  - Returns a success message if the item is added or updated.

- **GET `/menu`**: Get the list of all menu items.
  - Returns the list of items available in the menu.

### Order Endpoints

- **POST `/orders`**: Place a new order.
  - Request body (JSON):
    ```json
    {
  "name": "Pizza",
  "price": 150,
  "category": "Main Course"
}

   
    ```
  - This body allows you to place an order with specific items and quantities.
  - Returns the order details along with estimated preparation and delivery times.

- **GET `/orders/:id`**: Get the details of a specific order.
  - Request parameter: `id` (Order ID)
  - Returns the order details, including the current status.

### Cron Job

The system automatically updates the status of orders every minute using a cron job. The possible order statuses are:

- **Preparing**: The order is in preparation.
- **Out for Delivery**: The order is on its way to the customer.
- **Delivered**: The order has been delivered to the customer.

