# README: Neighborhood Baked Goods and Lemonade Store

This is a RedwoodJS application for selling baked goods and lemonade in your neighborhood. Neighbors can scan a QR code to access an order form, choose their desired items, and submit their orders. You can then check the site for pending orders, package them, and deliver them to the customers. The order status can be updated to show delivery progress and completion.

## Main Features

### Submit Order

Customer can create order and submit. Customer will log in & create account details like address for pickup location, or phone number for possible notifications. Should be able to add purchase option. At first - Cash on Delivery. Possible Stripe Integration. Indicate pickup location: at table (show address) or at home (delivery tip requested?). Authorized: user/owner. Items should not show if inventory is 0. Items should not be able to go above current inventory amount. Make a note on submission if over cap (if someone purchases at same time, page might have old inventory data and might not alert user in-client).

### View Orders

Seller should be able to see the orders in the queue. Should be able to interact by 'completing' orders. On Completion, would be good to reduce inventory amount by completion amount. Might be good to reduce amount on order submittal, so that other orders can't go over current inventory. Authorized: owner.

### Order Notifications

It would be a nice to have to have some sort of notification to the Seller on order purchase and possibly to buyer on order status updates. Email is cheapest so go with that for now. Unless streaming into the app for notifications is easy.

### Edit Inventory

Seller will be able to edit the inventory: items and quantities, add and remove. Authorized: owner.

#### Request Form

It would be cool for users to request certain items be made.


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


