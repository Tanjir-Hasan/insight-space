import moment from "moment";
import useAllUsers from "../../../Hooks/useAllUsers";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const [users, refetch] = useAllUsers();
    const [axiosSecure] = useAxiosSecure();


    const handleDeleteUser = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'error',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user?id=${id}`)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'This user hasbeen removed',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        })
    }


    const handleUserRole = (user) => {
        const { _id, email } = user;
        const updateData = { id: _id, email }
        Swal.fire({
            title: 'Are you sure?',
            text: `to change ${user?.displayName} role on this website`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes , Do it !'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch("/user", updateData)
                    .then(data => {
                        if (data.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `from now ${user?.displayName}'s role changes`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        })
    }

    return (
        <div className="min-h-screen">
            <h2 className='py-12 text-5xl font-[Pacifico] text-center'>Total Users: {users?.length}</h2>
            <table className="min-w-full">
                <thead className="bg-gray-100">
                    <tr className="space-x-6">
                        <th className="py-3">#</th>
                        <th className="py-3">Name</th>
                        <th className="py-3">Email</th>
                        <th className="py-3">Join Date</th>
                        <th className="py-3">Role</th>
                        <th className="py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((u, i) => (
                        <tr key={u._id} className="bg-white border-b-4 border-slate-100">
                            <td className="py-2 px-4 text-center font-semibold">{i + 1}</td>
                            <td className="py-2 px-4 text-center font-semibold">{u.displayName}</td>
                            <td className="py-2 px-4 text-center font-semibold">{u.email}</td>
                            <td className="py-2 px-4 text-center font-semibold">{moment(u.date).format('ll')}</td>
                            <td className={u.role === "admin" ? "py-2 px-4 text-center font-semibold text-red-600" : "py-2 px-4 text-center font-semibold"}>{u.role}</td>
                            <td className="py-2 px-4 text-center font-semibold">
                                <div className="space-x-2">
                                    <button onClick={() => handleUserRole(u)} className="border-b-4 border[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-white transition duration-300 ease-in-out"><span hidden={u.role === "admin"}>Make Admin</span><span hidden={u.role === "regular"}>Make Regular</span></button>
                                    <button onClick={() => handleDeleteUser(u._id)} className="border-b-4 border[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-red-600 transition duration-300 ease-in-out">Remove User</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="hidden">
                {users?.map(u => <div className="m-4 p-4 bg-gray-100 rounded-lg" key={u._id}>
                    <p className="my-1 capitalize">Name : {u.displayName}</p>
                    <p className="my-1">Email : {u.email}</p>
                    <p className="my-1">Join Date : {moment(u.date).format('lll')}</p>
                    <p className="my-1 capitalize">Role : {u.role}</p>
                    <div className="space-x-2 my-2">
                        <button onClick={() => handleUserRole(u)} className="border-b-4 border[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-white transition duration-300 ease-in-out"><span hidden={u.role === "admin"}>Make Admin</span><span hidden={u.role === "regular"}>Make Regular</span></button>
                        <button onClick={() => handleDeleteUser(u._id)} className="border-b-4 border[#84a98c] text-[#84a98c] rounded-lg px-4 py-2 hover:bg-[#84a98c] hover:text-red-600 transition duration-300 ease-in-out">Remove User</button>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AllUsers;