import {Link} from "react-router-dom";
import {
    CircleUser,
    LogOut
} from "lucide-react";

const Sidebar = ({isOpen, menuItems, userData, role}) => {

    return (
        <div
            className={`fixed top-0 left-0 z-20 w-64 pt-16 h-screen transition-transform bg-white dark:bg-gray-800 ${
                isOpen ? "transform-none" : "-translate-x-full"
            }`}
        >
            <div className="h-full px-3 py-4 overflow-y-auto flex flex-col">
                <ul className="space-y-2 font-medium flex-grow">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                {item.icon}
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                    <Link
                        to="/"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group mb-3">
                        <LogOut className="h-5 w-5 mr-2"/>
                        <span className="font-medium">Logout</span>
                    </Link>
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2 mt-auto">
                        <Link to={`/${role}/profile`} className="flex items-center w-full">
                            <CircleUser className="rounded-full w-10 h-10 mr-2"/>
                            <div>
                                <h3 className="font-medium">{userData?.name || "User Name"}</h3>
                                <p className="text-sm text-gray-400">{userData?.id || "ID"}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
