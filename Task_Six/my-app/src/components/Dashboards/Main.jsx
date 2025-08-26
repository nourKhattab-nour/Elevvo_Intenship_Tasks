import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Main = () => {
  const cards = [
    { title: "Total Projects", value: 24, icon: "ri-file-2-line" },
    {
      title: "Total Earnings",
      value: "$12,450",
      icon: "ri-money-dollar-circle-fill",
    },
    { title: "Task Due", value: 8, icon: "ri-timer-2-line" },
    { title: "Active Clients", value: 12, icon: "ri-team-fill" },
  ];

  const chartData = {
    labels: cards.map((card) => card.title),
    datasets: [
      {
        label: "Statistics",
        data: cards.map((card) =>
          typeof card.value === "string"
            ? parseInt(card.value.replace(/\D/g, "")) 
            : card.value
        ),
        backgroundColor: ["#4cafef", "#67d18d", "#f7b731", "#ff6b6b"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className="container">
        <div className="middle_section">
          <div className="top">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <div className="left">
                  <p>{card.title}</p>
                  <h1>{card.value}</h1>
                </div>
                <div className="right">
                  <i className={card.icon}></i>
                </div>
              </div>
            ))}
          </div>
          <div className="down">
            <div className="left">
              <Bar data={chartData} options={chartOptions} />
            </div>
            <div className="right">
              <p>Recent Activity</p>
              <ul>
                <li>Project "E-comerce App" completed</li>
                <li>New client "TechCrop" added</li>
                <li>Invoice #1024 sent</li>
                <li>Meeting scheduled with client</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
