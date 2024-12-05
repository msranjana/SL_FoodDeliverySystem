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

### **Prerequisites**

- **Node.js**: Version 14.x or higher  
- **npm**: Comes bundled with Node.js

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
https://github.com/msranjana/SL_FoodDeliverySystem.git
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd SL_FoodDeliverySystem-main
npm install
```

### 3. Run the Application

Start the server:

```bash
node index.js
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
  ````
  ````json
  {
  "name": "Cheesecake",
  "price": 70,
  "category": "Dessert"
  }
  ````
  ````json
   {
  "name": "Sushi",
  "price": -50,
  "category": "Main Course"
   }
   ````
- **Response**:
  ```json
  {
  "message": "Menu item added successfully"
  }
  ````
- **Error Response**:
  ```json
  {
  "error": "Invalid menu item data"
  }
  ```


#### **Get All Menu Items**
- **Method**: `GET`
- **Endpoint**: `/menu`
- **Description**: Retrieves all menu items.
- **Response**:
  ```json
   [
  {
    "id": 1,
    "name": "Pizza",
    "price": 15,
    "category": "Main Course"
  },
  {
    "id": 2,
    "name": "Cheesecake",
    "price": 7,
    "category": "Dessert"
  }
  ]
  ````


### **2. Order Endpoints**


#### **Add Menu Item**
- **Method**: `POST`
- **Endpoint**: `/orders`
- **Description**:  Places a new order with selected menu items.
- **Request Body**:
  ```json
  {
  "items": [1, 2]
  }
  ````
- **Response**:
  ```json
   {
  "message": "Order placed successfully",
  "orderId": 1
  }
  ````
- **Error Response**:
  ```json
   {
  "error": "Invalid order data"
   }
  ```

  
#### **Get Order Details**
- **Method**: `GET`
- **Endpoint**: `/orders/:id`
- **Description**: Retrieves details of a specific order by its ID.
- **Path Parameter**: id: Order ID (integer).
- **Response**:
  ```json
    {
  "id": 1,
  "items": [1, 2],
  "status": "Preparing",
  "createdAt": "2024-12-04T09:00:00.000Z"
    }
    ```
- **Error Response**:
  ````json
    {
  "error": "Order not found"
    }
   ````


### **3. Automated Status Updates (CRON Job)**

#### **Order Status Flow**
The system automatically updates the status of orders every minute via a CRON job:

1. **Preparing** → **Out for Delivery**  
2. **Out for Delivery** → **Delivered**

#### **How to Test**:
1. Place an order using the **Place Order** endpoint.  
2. Fetch the order details periodically using the **Get Order Details** endpoint to observe the status updates.



## **Error Handling & Validation**

- **Description**: Provide a section explaining common error responses and validation for better debugging.

  - **400 Bad Request**: When the input data is invalid, for example, a negative price for a menu item or missing required fields in the order.
  - **404 Not Found**: If the menu item or order ID does not exist.
  - **500 Internal Server Error**: For unexpected server errors or issues during the operation.

  #### Example error responses:
  ```json
  {
    "error": "Invalid price. Price must be a positive number."
  }



## **Testing the API Locally**

After starting the server with `node index.js`, you can use Postman to make the following requests:

- **Add a Menu Item**: `POST /menu`  
- **Get All Menu Items**: `GET /menu`  
- **Place an Order**: `POST /orders`  
- **Get Order Details**: `GET /orders/:id`  

Make sure to use valid data for menu items and orders. The API will return appropriate status codes:
- **200 OK**: The request was successful.
- **400 Bad Request**: Invalid data or missing fields.
- **404 Not Found**: Resource (order/menu item) not found.
- **500 Internal Server Error**: Something went wrong with the server.







