import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import ProductsPage from '../pages/ProductsPage';
import ProductFormPage from '../pages/ProductFormPage';
import CustomersPage from '../pages/CustomersPage';
import CustomerFormPage from '../pages/CustomerFormPage';
import SalesOrdersPage from '../pages/SalesOrdersPage';
import SalesOrderCreatePage from '../pages/SalesOrderCreatePage';
import SalesOrderDetailPage from '../pages/SalesOrderDetailPage';
import StockMovementsPage from '../pages/StockMovementsPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from '../components/auth/ProtectedRoute';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                } />

            <Route path="/products" element={
                    <ProtectedRoute>
                        <ProductsPage />
                    </ProtectedRoute>
                }/>
            <Route path="/products/new" element={
                    <ProtectedRoute>
                        <ProductFormPage />
                    </ProtectedRoute>
                }/>
            <Route path="/products/:id/edit" element={
                    <ProtectedRoute>
                        <ProductFormPage />
                    </ProtectedRoute>
                }/>
            <Route path="/customers" element={
                    <ProtectedRoute>
                        <CustomersPage />
                    </ProtectedRoute>
                }/>
            <Route path="/customers/new" element={
                    <ProtectedRoute>
                        <CustomerFormPage />
                    </ProtectedRoute>
                }/>
            <Route path="/customers/:id/edit" element={
                    <ProtectedRoute>
                        <CustomerFormPage />
                    </ProtectedRoute>
                }/>
            <Route path="/sales-orders"element={
                    <ProtectedRoute> 
                        <SalesOrdersPage />
                    </ProtectedRoute>
                }/>
            <Route path="/sales-orders/new" element={
                    <ProtectedRoute>
                        <SalesOrderCreatePage />
                    </ProtectedRoute>
                }/>
            <Route path="/sales-orders/:id" element={
                    <ProtectedRoute>
                        <SalesOrderDetailPage />
                    </ProtectedRoute>
                }/>
            <Route path="/stock-movements" element={
                    <ProtectedRoute>
                        <StockMovementsPage />
                    </ProtectedRoute>
                }/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
export default AppRoutes;