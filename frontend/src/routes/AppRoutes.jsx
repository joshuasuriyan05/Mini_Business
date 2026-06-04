import { Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from '../pages/ProductsPage';
import ProductFormPage from '../pages/ProductFormPage';
import DashboardPage from '../pages/DashboardPage';
function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />}/>
            <Route path="/dashboard" element={<DashboardPage />}/>
            <Route path="/products" element={<ProductsPage />}/>
            <Route path="/products/new" element={<ProductFormPage />} />
            <Route path="/products/:id/edit" element={<ProductFormPage />} />
        </Routes>
    );
}
export default AppRoutes;