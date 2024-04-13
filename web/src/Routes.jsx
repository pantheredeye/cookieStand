import { Router, Route, PrivateSet } from '@redwoodjs/router'

import { useAuth } from './auth'
import AdminLayout from './layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <PrivateSet unauthenticated="home" roles={['owner', 'seller']} wrap={AdminLayout}>
        <Route path="/order/{orderId}" name="orderDetail" page={OrderDetailPage} />
        <Route path="/orders" page={OrdersPage} name="orders" />
        <Route path="/inventory" page={InventoryPage} name="inventory" />
      </PrivateSet>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
