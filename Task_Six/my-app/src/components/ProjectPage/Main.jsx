import React from "react";

const projects = [
  {
    name: "E-commerce Platform",
    subtitle: "Web Development",
    client: "TechCorp Inc.",
    email: "john@techcorp.com",
    status: "Completed",
    progress: 100,
    deadline: "Dec 15, 2024",
  },
  {
    name: "Mobile Banking App",
    subtitle: "Mobile Development",
    client: "FinanceFlow Ltd.",
    email: "sarah@financeflow.com",
    status: "In Progress",
    progress: 75,
    deadline: "Jan 30, 2025",
  },
  {
    name: "Healthcare Portal",
    subtitle: "Web Application",
    client: "MediConnect",
    email: "support@mediconnect.com",
    status: "In Progress",
    progress: 40,
    deadline: "Feb 20, 2025",
  },
  {
    name: "AI Chat Assistant",
    subtitle: "AI / Machine Learning",
    client: "NextGen AI",
    email: "ai@nextgen.com",
    status: "In Progress",
    progress: 60,
    deadline: "Mar 10, 2025",
  },
  {
    name: "E-learning Platform",
    subtitle: "EdTech",
    client: "SmartLearn",
    email: "contact@smartlearn.com",
    status: "Completed",
    progress: 100,
    deadline: "Jul 05, 2024",
  },
  {
    name: "Ride Sharing App",
    subtitle: "Mobile Development",
    client: "GoMove Ltd.",
    email: "team@gomove.com",
    status: "In Progress",
    progress: 25,
    deadline: "Apr 15, 2025",
  },
  {
    name: "Restaurant Booking System",
    subtitle: "Web & Mobile App",
    client: "FoodiesHub",
    email: "info@foodieshub.com",
    status: "On Hold",
    progress: 10,
    deadline: "May 25, 2025",
  },
  {
    name: "Portfolio Website",
    subtitle: "Web Development",
    client: "Freelancer John",
    email: "johnfreelancer@mail.com",
    status: "Completed",
    progress: 100,
    deadline: "Aug 12, 2024",
  },
  {
    name: "Cloud Storage Solution",
    subtitle: "SaaS",
    client: "CloudBox",
    email: "support@cloudbox.com",
    status: "In Progress",
    progress: 55,
    deadline: "Jun 30, 2025",
  },
  {
    name: "Smart Home Dashboard",
    subtitle: "IoT Development",
    client: "HomeTech",
    email: "hello@hometech.com",
    status: "In Progress",
    progress: 70,
    deadline: "Sep 12, 2025",
  },
];

const Main = () => {
  return (
    <div>
      {/* <!-- Start table section --> */}
      <div className="container">
        <div className="Table_middle_section">
          <table className="table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Client</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Deadline</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index}>
                  <td>
                    <div className="project-name">{project.name}</div>
                    <div className="project-subtitle">{project.subtitle}</div>
                  </td>
                  <td>
                    <div>{project.client}</div>
                    <div className="project-subtitle">{project.email}</div>
                  </td>
                  <td
                    className={
                      project.status === "Completed"
                        ? "status-completed"
                        : "status-progress"
                    }
                  >
                    {project.status}
                  </td>
                  <td>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    {project.progress}%
                  </td>
                  <td>
                    <b>{project.deadline}</b>
                  </td>
                  <td className="actions">
                    <i className="ri-eye-line"></i>
                    <i className="ri-more-2-fill"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <!-- End table section --> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
