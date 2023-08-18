import moment from "moment";
import useAllUsers from "../../../Hooks/useAllUsers";

const AllUsers = () => {
    const [users, refetch] = useAllUsers();
    return (
        <div className="min-h-screen">
            <table>
                <thead>
                    <tr className="space-x-6">
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Join Date</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((u, i) => <tr key={u._id}>
                        <td>{i + 1}</td>
                        <td>{u.displayName}</td>
                        <td>{u.email}</td>
                        <td>{moment(u.date).format('ll')}</td>
                        <td>{u.role}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;