import Logout from '@/components/logout';

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <h1>Dashboard</h1>
            <Logout />
        </div>
    );
};
export default DashboardPage;
