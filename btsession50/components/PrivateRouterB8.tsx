// PrivateRouter.tsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdminIndex from './AdminIndex';
import Account from './Account';
import Product from './Product';
import Order from './Order';

const PrivateRouterB8: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="admin" />} />
      <Route path="/admin" element={<AdminIndex />} index />
      <Route path="/admin/account" element={<Account />} />
      <Route path="/admin/product" element={<Product />} />
      <Route path="/admin/order" element={<Order />} />
    </Routes>
  );
};

export default PrivateRouterB8;