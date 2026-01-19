"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/dashboard.tsx/Sidebar";
import {
  ProfileSection,
  StubblesSection,
  RequestsSection,
  HistorySection,
  PaymentsSection,
  ReviewsSection,
} from "@/components/dashboard.tsx/Farmer";

const FarmerDashboard = () => {
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
        return <ProfileSection />;
      case "stubbles":
        return <StubblesSection />;
      case "requests":
        return <RequestsSection />;
      case "history":
        return <HistorySection />;
      case "payments":
        return <PaymentsSection />;
      case "reviews":
        return <ReviewsSection />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        userType="farmer"
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 overflow-auto">
        <div className="p-8">{renderSection()}</div>
      </main>
    </div>
  );
};

export default FarmerDashboard;
