"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faDollarSign, faScissors } from '@fortawesome/free-solid-svg-icons';
import './globals.css'

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-10 m-2"
      style={{ width: '300px', height: '200px', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)' }}>
      <FontAwesomeIcon icon={icon} size="4x" className="text-teal-400" />
      <p className="mt-4 text-gray-600 text-sm uppercase">{title}</p>
      <p className="text-xl font-semibold text-teal-500 mt-2">{value}</p>
    </div>
  );
};

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Order frequency',
      data: [20, 45, 28, 80, 99, 43, 50], // Replace with your actual data
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: 'rgba(75,192,192,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const options = {
  maintainAspectRatio: false, // Allows custom control of height
  aspectRatio: 2, // Aspect ratio of the chart, you can adjust this value
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true, // This will hide the legend
    },
  },
};

const Dashboard = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold my-4 text-black mt-16 pl-12">Dashboard</h2>
      <div className="flex justify-around">
        <DashboardCard
          icon={faBriefcase}
          title="Total jobs completed"
          value="1000+"
        />
        <DashboardCard
          icon={faDollarSign}
          title="Total Revenue earned"
          value="$2000"
        />
        <DashboardCard
          icon={faScissors}
          title="Services provided"
          value="3000+"
        />
      </div>
      {/* Chart Section */}
      <div className="m-12">
        <div className="p-10 w-full bg-white rounded-lg shadow-md my-6" style={{ height: '370px' }}>
          <Line data={data} options={options} />
        </div>
        <p className='text-black'>Total Orders this week</p>
      </div>
    </>
  );
};

export default Dashboard;
