import React, { useState } from 'react';

const AdminLayout = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="app">
            <div className="relative">
                {/* Button to toggle the drawer */}
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={toggleDrawer}>
                    Toggle Drawer
                </button>
                {/* Drawer content */}
                <div className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="absolute top-0 left-0 h-full bg-white shadow-lg">
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">Drawer Content</h2>
                            <p>This is the content of the drawer.</p>
                        </div>
                        <button
                            className="block w-full text-center py-2 bg-gray-200 hover:bg-gray-300"
                            onClick={toggleDrawer}
                        >
                            Close Drawer
                        </button>
                    </div>
                    {isOpen && (
                        <div>
                        </div>
                    )}
                </div>
            </div>

            <div className="main-content ps-64">
                {/* Your main content goes here */}
                <h1>Main Content</h1>
                <p>This is the main content of your layout.</p>
            </div>
        </div>
    );
};

export default AdminLayout;