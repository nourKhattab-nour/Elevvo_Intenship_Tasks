import React from 'react'
import { Bell, Edit } from "lucide-react";
const navbar = () => {
  return (
    <div>
      {/* <!-- Start Navbar section --> */}
      <div className="navbar">
        <Edit className="ri-edit-box-line" />
        <p>The Curator's Corner</p>
        <div className="Circle">
          <Bell className="ri-notification-4-line" />
        </div>
      </div>
      {/* <!-- End Navbar section --> */}
    </div>
  );
}

export default navbar
