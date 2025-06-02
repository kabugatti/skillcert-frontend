import React from 'react';

interface DashboardHeaderProps {
  userName: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ userName }) => (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
    <div className="flex items-center gap-4">
      <div className="w-[110px] h-[110px] rounded-full bg-gray-300" />
      <div>
        <h1 className="text-2xl md:text-[56px] font-bold text-purple-600">Welcome back, {userName}</h1>
        <p className="text-[28px] text-purple-600 font-semibold mt-1">Here's what's happening with your courses today</p>
      </div>
    </div>
    <button className="bg-purple-600 hover:bg-purple-400 text-white text-base px-6 py-2 rounded-full font-semibold transition">Create Course</button>
  </div>
);

export default DashboardHeader; 