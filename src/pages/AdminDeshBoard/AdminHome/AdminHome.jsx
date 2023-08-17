import useAllUsers from "../../../Hooks/useAllUsers";

const AdminHome = () => {
    const [users, refetch] = useAllUsers();
    console.log(users);
    return (
        <div>
            <h2>This is Admin</h2>
        </div>
    );
};

export default AdminHome;