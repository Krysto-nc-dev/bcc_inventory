import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64">SIDEBAR</div>

      {/* Main Content Area */}
      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </div>
  );
};

export default AdminLayout;
