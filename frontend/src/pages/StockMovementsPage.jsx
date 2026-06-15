import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import LoadingMessage from '../components/ui/LoadingMessage';
import ErrorMessage from '../components/ui/ErrorMessage';
import EmptyState from '../components/ui/EmptyState';
import { getStockMovements } from '../api/stockMovementApi';
import { formatMovementDate, getMovementBadge,} from '../utils/stockMovementHelpers';

function StockMovementsPage() {
    const [movements, setMovements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        loadMovements();
    }, []);
    async function loadMovements() {
        try {
            setLoading(true);
            setError('');
            const data = await getStockMovements();
            setMovements(data);
        } catch (err) {
            setError(
                err.message || 'Failed to load stock movements'
            );
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return (
            <LoadingMessage message="Loading stock movements..."/>
        );
    }
    if (error) {
        return <ErrorMessage message={error} />;
    }
    if (movements.length === 0) {
        return (
            <EmptyState title="No stock movements found" description="Stock movements will appear after sales orders are confirmed."/>
        );
    }
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-4xl font-bold text-cyan-400">
                    Stock Movements
                </h2>
                <p className="mt-2 text-lg text-white">
                    {movements.length} Movement(s)
                    recorded.
                </p>
            </div>
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-800 text-cyan-300">
                                <th className="px-6 py-4">
                                    Product
                                </th>
                                <th className="px-6 py-4">
                                    Type
                                </th>
                                <th className="px-6 py-4">
                                    Quantity
                                </th>
                                <th className="px-6 py-4">
                                    Reference
                                </th>
                                <th className="px-6 py-4">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {movements.map(
                                (movement) => (
                                    <tr key={movement.id} className="border-b border-slate-700 hover:bg-slate-800/40">
                                        <td className="px-6 py-4 font-bold text-cyan-300">
                                            {
                                                movement .product ?.name
                                            }
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`rounded-full px-3 py-1 text-xs font-bold ${getMovementBadge(
                                                    movement.movementType
                                                )}`}>
                                                {
                                                    movement.movementType
                                                }
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-yellow-300 font-bold">
                                            {
                                                movement.quantity
                                            }
                                        </td>
                                        <td className="px-6 py-4 text-white font-bold">
                                            {movement.referenceType || '-'}
                                        </td>
                                        <td className="px-6 py-4 text-slate-300 font-bold">
                                            {formatMovementDate(
                                                movement.createdAt
                                            )}
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
export default StockMovementsPage;