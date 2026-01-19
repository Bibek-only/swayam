"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/dashboard.tsx/Sidebar";
import {
  OrgProfileSection,
  PurchaseHistorySection,
  StubbleRequestsSection,
  OrgPaymentsSection,
  OrgReviewsSection,
} from "@/components/dashboard.tsx/Organization";

const OrganizationDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/signin");
    }
  }, [navigate]);

  const renderSection = () => {
    switch (activeSection) {
      case "profile":
        return <OrgProfileSection />;
      case "history":
        return <PurchaseHistorySection />;
      case "requests":
        return <StubbleRequestsSection />;
      case "payments":
        return <OrgPaymentsSection />;
      case "reviews":
        return <OrgReviewsSection />;
      default:
        return <OrgProfileSection />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        userType="organization"
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 overflow-auto">
        <div className="p-8">{renderSection()}</div>
      </main>
    </div>
  );
};

export default OrganizationDashboard;
