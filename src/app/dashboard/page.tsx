'use client'

import React, { useEffect, useState } from 'react';
import { Users, BookOpen, DollarSign, BarChart } from 'lucide-react';
import DashboardHeader from './components/DashboardHeader';
import DashboardMetrics from './components/DashboardMetrics';
import TopCourses from './components/TopCourses';
import CourseStatistics from './components/CourseStatistics';
import QuickActions from './components/QuickActions';

const fakeDashboardData = {
  user: {
    name: 'Alex Johnson',
  },
  metrics: [
    { icon: <Users color="#be185d" size={50} /> as React.ReactElement, label: 'Total Students', value: '1000+' },
    { icon: <BookOpen color="#be185d" size={50} /> as React.ReactElement, label: 'Total Courses', value: '6' },
    { icon: <DollarSign color="#be185d" size={50} /> as React.ReactElement, label: 'Total Revenue', value: '$12 580' },
    { icon: <BarChart color="#be185d" size={50} /> as React.ReactElement, label: 'Completion Rate', value: '78%' },
  ],
  topCourses: [
    {
      name: 'Course Name',
      rating: 4.7,
      students: 100,
      description: 'Description of the course text. In this space users will see a brief orientation about course content.',
      price: '340.56 XLM',
      category: 'Category',
      level: 'Level',
      duration: '3 weeks',
    },
    {
      name: 'Course Name',
      rating: 4.7,
      students: 100,
      description: 'Description of the course text. In this space users will see a brief orientation about course content.',
      price: '340.56 XLM',
      category: 'Category',
      level: 'Level',
      duration: '3 weeks',
    },
    {
      name: 'Course Name',
      rating: 4.7,
      students: 100,
      description: 'Description of the course text. In this space users will see a brief orientation about course content.',
      price: '340.56 XLM',
      category: 'Category',
      level: 'Level',
      duration: '3 weeks',
    },
  ],
};

const Dashboard = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(fakeDashboardData);
      setLoading(false);
    }, 800); // Simula fetch
  }, []);

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="text-lg text-purple-400 animate-pulse">Loading dashboard...</span>
      </div>
    );
  }

  return (
    <div className="container min-h-screen px-6 py-8 mx-auto">
      <DashboardHeader userName={data.user.name} />
      <DashboardMetrics metrics={data.metrics} />
      <TopCourses courses={data.topCourses} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[85%] mx-auto">
        <CourseStatistics />
        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;