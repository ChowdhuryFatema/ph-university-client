import LoadingSpinner from "../../components/LoadingSpinner";
import { useGetAllOrdersQuery } from "../../redux/features/order/order.api";


export interface Transaction {
    id: string;
    transactionStatus: string | null;
    bank_status: string;
    date_time: string;
    method: string;
    sp_code: string;
    sp_message: string;
}

export interface Product {
    product: string;
    quantity: number;
    _id: string;
}

export interface Order {
    transaction: Transaction;
    _id: string;
    user: string;
    products: Product[];
    totalPrice: number;
    status: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default function AllOrder() {
    const { isLoading, data } = useGetAllOrdersQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });
    const orderData: Order[] = data?.data;

    if (isLoading) return <LoadingSpinner />

    return (
        <div className="mx-auto !p-10 columns-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {orderData?.map((order) => (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-gray-300 rounded !p-5 shadow-xl">
                        <div>
                            <h3 className="font-semibold">Customer Information</h3>
                            <p>User ID: {order?.user}</p>
                            <p>Order Date: {new Date(order?.createdAt).toLocaleString()}</p>
                            <p>Last Updated: {new Date(order?.updatedAt).toLocaleString()}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Order Summary</h3>
                            <p>Total Price: ${order?.totalPrice?.toFixed(2)}</p>
                            <p>
                                Status:{" "}
                            </p>
                        </div>
                        <div className="">
                            <h3 className="font-semibold">Products</h3>
                            <ul>
                                {order?.products?.map((product, i) => (
                                    <li key={i}>
                                        Product ID: {product?.product}, Quantity: {product?.quantity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-semibold">Transaction Details</h3>
                            <p>Transaction ID: {order?.transaction?.id}</p>
                            <p>Payment Method: {order?.transaction?.method}</p>
                            <p>Transaction Date: {order?.transaction?.date_time}</p>
                            <p>Transaction Status: {order?.transaction?.bank_status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}