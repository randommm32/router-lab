import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout    from './components/Layout';
import Home      from './pages/Home';
import Products  from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Dashboard from './pages/Dashboard';
import Login     from './pages/Login';
import NotFound  from './pages/NotFound';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute   from './auth/ProtectedRoute';


function App() {
  return (
 <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index              element={<Home />} />
        <Route path='products'    element={<Products />} />
        <Route path='products/:id' element={<ProductDetail />} />
        <Route path='login'       element={<Login />} />

        {/* Protected route */}
        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
</AuthProvider>

  );
}
export default App;

