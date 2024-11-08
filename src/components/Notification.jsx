import { Fragment, useState } from "react";
import { Bell, BellDot } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

const Notification = () => {
  const [hasActiveNotifications, setHasActiveNotifications] = useState();

  const handleNotificationsClick = () => {
    setHasActiveNotifications(false);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button>
        {hasActiveNotifications ? (
          <BellDot className="w-6 h-6" />
        ) : (
          <Bell className="w-6 h-6" />
        )}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={handleNotificationsClick}
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } block px-4 py-2 text-sm`}
                >
                  Notifikasi 1
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={handleNotificationsClick}
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } block px-4 py-2 text-sm`}
                >
                  Notifikasi 2
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Notification;
