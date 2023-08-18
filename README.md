## README: Neighborhood Baked Goods and Lemonade Store

This is a RedwoodJS application for selling baked goods and lemonade in your neighborhood. Neighbors can scan a QR code to access an order form, choose their desired items, and submit their orders. You can then check the site for pending orders, package them, and deliver them to the customers. The order status can be updated to show delivery progress and completion.

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
- **Pages**
  - HomePage: Contains the order form for neighbors to select items and submit their orders.
    - Design: A centered content div: 85% width on fullscreen, 95% on medium, and 100% width on small screens, with primary and secondary colors as background and shadowed border to appear to be floating on top of the mainLayout background.
  - OrdersPage: Displays the list of pending orders for the seller to manage.
- **Components**
  - QRCode: A component to display the generated QR code.
  - OrderForm: A component containing the form for neighbors to place orders.
  - OrderList: A component to display the list of pending orders for the seller.
  - OrderStatus: A component to display and update the status of an individual order.
- **Shared Components**
  - ItemCard: A reusable component to display individual items (used in Homepage and OrdersPage).
- **Cells**
  - ItemsCell: Fetches the list of available items (used in Homepage).
  - OrdersCell: Fetches the list of pending orders (used in OrdersPage).

## Style Guide

primary: '#103362', // Background Primary
secondary: '#F21530', // Background Secondary
backgroundPrimary: '#C3619B', // Background Primary (Medium & Large Screens)
backgroundSecondary: '#D96DA1', // Background Secondary (Medium & Large Screens)
textPrimary: '#FFFFFF', // Primary Text
link: '#F21530', // Links
button: '#ECFD74', // Button Color
buttonText: '#F21530', // Button Text Color


