# README: Neighborhood Baked Goods and Lemonade Store

Welcome to the README for the Neighborhood Baked Goods and Lemonade Store application. This RedwoodJS-based application facilitates the sale of delicious baked goods and refreshing lemonade within your neighborhood. Below, you'll find a breakdown of the main features and functionalities of this application.

## Main Features

### 1. Submit Order

Customers can easily create and submit orders through the application. They will be prompted to log in or create an account, providing necessary details such as their address for pickup or delivery preferences. Customers can select from available purchase options, with the possibility of integrating payment methods like Stripe for online transactions. The system ensures that items unavailable due to inventory depletion are not displayed, and it provides notifications if an order exceeds available inventory.
Sure, here are the checklists for each section:

- [ ] Customer login/account creation functionality implemented.
- [ ] Address input for pickup/delivery integrated.
- [x] Selection of purchase options available.
- [ ] Integration of payment methods (e.g., Stripe) for online transactions.
- [x] Real-time inventory checking to prevent displaying unavailable items.
- [ ] Notification system implemented for order status updates.
- [x] Quantity validation to prevent ordering more items than available in inventory.

### 2. View Orders

Sellers have access to a queue of pending orders, allowing them to track and manage incoming requests. Sellers can mark orders as 'completed,' which triggers inventory adjustments to reflect the fulfilled items. The system also ensures that inventory levels are maintained accurately by deducting quantities upon order submission or completion.

- [ ] Queue of pending orders accessible to sellers.
- [ ] Ability to mark orders as 'completed' by sellers.
- [ ] Automatic inventory adjustments upon order completion.
- [ ] Accurate maintenance of inventory levels by deducting quantities upon order submission or completion.

### 3. Order Notifications

The application supports notifications to both sellers and buyers for order-related events. Sellers receive notifications upon order purchase, facilitating prompt action. Additionally, buyers can receive updates on their order status, enhancing communication and customer satisfaction. Initially, email notifications are implemented, with the potential for in-app notifications in future iterations.

- [ ] Notification system set up for sellers upon order purchase.
- [ ] Notification system set up for buyers to receive updates on order status.
- [ ] Implementation of email notifications for initial version.
- [ ] Consideration for in-app notifications in future iterations.

### 4. Edit Inventory

Sellers have the ability to manage inventory effortlessly within the application. This includes adding, removing, and adjusting item quantities based on availability and demand. Access to inventory management is restricted to authorized owners, ensuring data integrity and security.

- [ ] Inventory management functionality accessible to authorized sellers.
- [ ] Ability to add, remove, and adjust item quantities within the application.
- [ ] Restrictions on access to inventory management to ensure data integrity and security.

#### Request Form

To foster community engagement, users can submit requests for specific items they'd like to see offered within the store. This feature encourages user feedback and enhances the product offering based on customer preferences.


### User Personas

1. **Neighbor (Customer)**: A neighbor who wants to order baked goods and lemonade.
2. **Daughter (Seller)**: Your daughter who manages the orders, packages the goods, and delivers them to the customers.

### User Stories

#### Neighbor (Customer)

1. As a neighbor, I want to scan a QR code to access the order form so that I can easily place an order.
2. As a neighbor, I want to choose between online payment (e.g., Stripe) and cash payment so that I can pay according to my preference.

#### Daughter (Seller)

1. As the seller, I want to view all pending orders so that I can prepare and package the goods accordingly.
2. As the seller, I want to update the order status (e.g., in delivery, delivered) so that customers can track their orders.

### Payment Options

Customers have the option to pay through the app, perhaps using stripe, or in cash. We can refer to the Redwood Example Store with Stripe Checkout Integration for guidance on integrating Stripe.

To support cash payments, we can provide instructions on how customers can pay in cash upon delivery. This can be communicated through the order confirmation page or via email.

## Application Structure

- **Layouts**
  - MainLayout: A layout that wraps the entire application, including a header and footer.
    - Design: A full-width background with backgroundPrimary and backgroundSecondary colors split across a gradient. Hidden on small devices.
  - AdminLayout: A layout specifically for the admin panel.
    - Design: Similar to MainLayout but with additional admin-specific styling.
- **Pages**
  - HomePage: Contains the order form for neighbors to select items and submit their orders.
    - Design: A centered content div: 85% width on fullscreen, 95% on medium, and 100% width on small screens, with primary and secondary colors as background and shadowed border to appear to be floating on top of the MainLayout background.
  - OrdersPage: Displays the list of pending orders for the seller to manage.
  - InventoryPage: Allows the daughter to manage the inventory by updating item quantities.
  - AdminOrdersPage: Allows the daughter to manage orders by updating order statuses.
- **Components**
  - QRCode: A component to display the generated QR code.
  - OrderForm: A component containing the form for neighbors to place orders.
  - OrderList: A component to display the list of pending orders for the seller.
  - OrderStatus: A component to display and update the status of an individual order.
  - UpdateItemQuantity: A component for the daughter to update item quantities in the inventory.
  - UpdateOrderStatus: A component for the daughter to update the status of an order.
- **Shared Components**
  - ItemCard: A reusable component to display individual items (used in HomePage and OrdersPage).
- **Cells**
  - ItemsCell: Fetches the list of available items (used in HomePage).
  - OrdersCell: Fetches the list of pending orders (used in OrdersPage).
  - UpdateItemQuantityCell: Fetches and updates item quantities (used in InventoryPage).
  - UpdateOrderStatusCell: Fetches and updates order statuses (used in AdminOrdersPage).


## Style Guide

- primary: '#103362', // Background Primary
- secondary: '#F21530', // Background Secondary
- backgroundPrimary: '#C3619B', // Background Primary (Medium & Large Screens)
- backgroundSecondary: '#D96DA1', // Background Secondary (Medium & Large Screens)
- textPrimary: '#FFFFFF', // Primary Text
- link: '#F21530', // Links
- button: '#ECFD74', // Button Color
- buttonText: '#F21530', // Button Text Color


