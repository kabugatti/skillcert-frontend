"use client"

import Dashboard from "./components/dashboard"

export default function InstructorDashboard() {

  const renderTabContent = () => {
    return <Dashboard />
  }
      


  return (
    <div className="w-full bg-[#020618] mx-auto text-white">
      
      <main className="px-8 pb-8">  
        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>
  )
}
