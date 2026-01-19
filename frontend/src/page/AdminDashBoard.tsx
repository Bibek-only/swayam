"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/dashboard.tsx/Sidebar";
import {
  AllFarmersSection,
  AllOrganizationsSection,
  AdminPaymentHistorySection,
  AdminPurchaseHistorySection,
  AdminBuyRequestsSection,
  AdminSettingsSection,
} from "@/components/dashboard.tsx/Admin";

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("farmers");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/signin");
    }
  }, [navigate]);

  const renderSection = () => {
    switch (activeSection) {
      case "farmers":
        return <AllFarmersSection />;
      case "organizations":
        return <AllOrganizationsSection />;
      case "payments":
        return <AdminPaymentHistorySection />;
      case "history":
        return <AdminPurchaseHistorySection />;
      case "requests":
        return <AdminBuyRequestsSection />;
      case "settings":
        return <AdminSettingsSection />;
      default:
        return <AllFarmersSection />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        userType="admin"
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 overflow-auto">
        <div className="p-8">{renderSection()}</div>
      </main>
    </div>
  );
}
