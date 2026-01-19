import { NavLink, useNavigate } from "react-router-dom";

import {
  User,
  Package,
  FileText,
  CreditCard,
  Star,
  LogOut,
  Users,
  History,
  ShoppingCart,
  Settings,
} from "lucide-react";

interface SidebarProps {
  userType: "farmer" | "organization" | "admin";
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({
  userType,
  activeSection,
  onSectionChange,
}: SidebarProps) => {
  const navigate = useNavigate();

  const getMenuItems = () => {
    const baseItems = [{ id: "profile", label: "Profile", icon: User }];

    if (userType === "farmer") {
      return [
        ...baseItems,
        { id: "stubbles", label: "My Stubbles", icon: Package },
        { id: "requests", label: "Buy Requests", icon: FileText },
        { id: "history", label: "History", icon: History },
        { id: "payments", label: "Payments", icon: CreditCard },
        { id: "reviews", label: "Reviews", icon: Star },
      ];
    } else if (userType === "organization") {
      return [
        ...baseItems,
        { id: "history", label: "Purchase History", icon: History },
        { id: "requests", label: "Stubble Requests", icon: ShoppingCart },
        { id: "payments", label: "Payments", icon: CreditCard },
        { id: "reviews", label: "Reviews", icon: Star },
      ];
    } else {
      // Admin
      return [
        { id: "farmers", label: "All Farmers", icon: User },
        { id: "organizations", label: "All Organizations", icon: Users },
        { id: "payments", label: "Payment History", icon: CreditCard },
        { id: "history", label: "Purchase History", icon: History },
        { id: "requests", label: "Buy Requests", icon: FileText },
        { id: "settings", label: "Settings", icon: Settings },
      ];
    }
  };

  const menuItems = getMenuItems();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground h-screen border-r border-sidebar-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center">
            <span className="text-sidebar-primary-foreground font-bold">S</span>
          </div>
          <span className="text-xl font-bold">Swayam</span>
        </NavLink>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                  : "text-sidebar-foreground hover:bg-sidebar-primary/10"
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-sidebar-border">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-red-500 hover:text-white transition"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
