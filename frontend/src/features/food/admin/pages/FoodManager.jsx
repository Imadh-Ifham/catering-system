import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate from React Router v6
import { FaFilePdf } from "react-icons/fa"; // Use any icon you prefer
import CategoryManagement from "../components/CategorySection";
import BuffetTimeManagement from "../components/FoodTimeSection";
import FoodItemsSection from "../components/FoodItemsSection";

const FoodManager = () => {
  const navigate = useNavigate(); // Use the navigate function from useNavigate

  // Function to handle the navigation to the report page
  const handleReportClick = () => {
    navigate("/admin/report"); // Navigate to the report page
  };

  return (
    <div className="admin-page container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Food Management System</h1>
        <button
          onClick={handleReportClick}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          <FaFilePdf size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <CategoryManagement />
        <BuffetTimeManagement />
      </div>
      <FoodItemsSection />
    </div>
  );
};

export default FoodManager;
