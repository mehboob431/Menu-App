import TitleCard from "../../../components/Cards/TitleCard";

const userOrderData = [
    { order: "Order #12345", time: "10:45 AM", amount: "Rs.220.00" },
    { order: "Order #12346", time: "11:15 AM", amount: "Rs.320.00" },
    { order: "Order #12347", time: "01:30 PM", amount: "Rs.150.00" },
    { order: "Order #12348", time: "02:00 PM", amount: "Rs.450.00" },
    { order: "Order #12349", time: "03:45 PM", amount: "Rs.100.00" },
];

function UserChannels() {
    return (
        <TitleCard title={"Recent Orders"}>
            {/** Table Data */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="normal-case">Order</th>
                            <th className="normal-case">Time</th>
                            <th className="normal-case">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userOrderData.map((u, k) => {
                                return (
                                    <tr key={k}>
                                        <th>{k + 1}</th>
                                        <td>{u.order}</td>
                                        <td>{u.time}</td>
                                        <td>{u.amount}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels;
