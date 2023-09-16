import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";

const AllPaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentHistory, refetch } = useQuery({
        queryKey: ["paymentHistory"],
        queryFn: async () => {
            const res = await axiosSecure.get("/payment-history");
            return res.data;
        }
    })

    return (
        <div className="min-h-screen">
            <h2 className='pt-10 pb-2 font-[Pacifico] text-center text-2xl md:text-3xl lg:text-5xl'>Total Elite Users: {paymentHistory?.length}</h2>
            <div className="hidden lg:block">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr className="space-x-6">
                            <th className="py-3">#</th>
                            <th className="py-3">Email</th>
                            <th className="py-3">Transaction Id</th>
                            <th className="py-3">Member Ship</th>
                            <th className="py-3">Price</th>
                            <th className="py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory && paymentHistory.map((p, i) => (
                            <tr key={p._id} className="bg-white border-b-4 border-slate-100">
                                <td className="py-2 px-4 text-center font-semibold">{i + 1}</td>
                                <td className="py-2 px-4 text-center font-semibold">{p.email}</td>
                                <td className="py-2 px-4 text-center font-semibold">{p.transactionId}</td>
                                <td className="py-2 px-4 text-center font-semibold">{p.memberShip}</td>
                                <td className="py-2 px-4 text-center font-semibold">${p.price}</td>
                                <td className="py-2 px-4 text-center font-semibold">{moment(p.date).format('ll')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="lg:hidden">
                {paymentHistory?.map(p => <div className="m-4 p-4 bg-gray-100 rounded-lg" key={p._id}>
                    <p className="my-1 capitalize">Email : {p.email}</p>
                    <p className="my-1">TransactionId : {p.transactionId}</p>
                    <p className="my-1">MemberShip : {p.memberShip}</p>
                    <p className="my-1">MemberShip : ${p.price}</p>
                    <p className="my-1">Date : {moment(p.date).format('lll')}</p>
                </div>)}
            </div>
        </div>
    );
};

export default AllPaymentHistory;