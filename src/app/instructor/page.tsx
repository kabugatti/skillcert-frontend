"use client"

import { useState } from "react"
import { Users, DollarSign, CirclePlus, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// Data placeholders
const totalCourses = 0
const publishedCourses = 0
const totalStudents = 0
const totalRevenue = 0.00
const averageRating: number | null = null 

export default function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="max-w-screen-xl mx-auto">
            {/* Stats Cards */}
            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-transparent text-white border-[#9CA3AF]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                  <BookOpen className="h-4 w-4 " />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalCourses}</div>
                  <p className="text-xs mt-2 text-[#D1D5DB]">{publishedCourses} published</p>
                </CardContent>
              </Card>

              <Card className="bg-transparent text-white border-[#9CA3AF]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 " />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalStudents}</div>
                  <p className="text-xs mt-2 text-[#D1D5DB]">Across all courses</p>
                </CardContent>
              </Card>

              <Card className="bg-transparent text-white border-[#9CA3AF]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 " />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
                  <p className="text-xs mt-2 text-[#D1D5DB]">Lifetime earnings</p>
                </CardContent>    
              </Card>

              <Card className="bg-transparent text-white border-[#9CA3AF]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
                  <Clock className="h-4 w-4 " />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{averageRating ? averageRating.toFixed(1) : "—"}</div>
                  <p className="text-xs mt-2 text-[#D1D5DB]">No ratings yet</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="bg-[#111827] text-white border-[#1F2937]">  
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <p className="text-slate-400">Your latest course updates and student interactions</p>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="mb-6 ">
                  <Image src="/openbookgrey.svg" alt="No courses created yet" width={60} height={60} className="text-slate-400 w-16 h-16" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">No courses created yet</h3>
                <p className="mb-6 text-center text-[#D1D5DB]">
                  Start sharing your knowledge by creating your first course
                </p>
                <Button variant="default" className="bg-[#9333EA] rounded-lg hover:bg-[#9333EA]/80">
                  <CirclePlus className="h-4 w-4" />
                  Create Your First Course
                </Button>
              </CardContent>
            </Card>
          </div>
        )
      
      case "courses":
        return (
          <div className="max-w-screen-xl mx-auto">
            {/* My Courses Content */}
            <Card className="bg-transparent text-white border-[#1F2937]">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="mb-6">
                  <Image src="/openbookgrey.svg" alt="No courses created yet" width={60} height={60} className="text-slate-400 w-16 h-16" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">No courses found</h3>
                <p className="mb-6 text-center text-[#D1D5DB]">Share your expertise with the world by creating your first course</p>
                <Button variant="default" className="bg-[#9333EA] rounded-lg hover:bg-[#9333EA]/80">
                  <CirclePlus className="h-4 w-4" />
                  Create Your First Course
                </Button>
              </CardContent>
            </Card>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="w-full bg-[#020618] mx-auto text-white">
        {/* Tabs Navigation */}
        <div className="shadow-[0px_10px_8px_0px_rgba(0,0,0,0.3)]">
            <div className="mb-8 max-w-screen-2xl mx-auto px-8">
                <nav className="-mb-px flex space-x-8">
                    <button 
                      onClick={() => setActiveTab("overview")}
                      className={`border-b-2 py-4 px-1 text-sm font-medium focus:outline-none ${
                        activeTab === "overview" 
                          ? "border-[#C084FC] text-[#C084FC]" 
                          : "border-transparent text-white hover:text-slate-400 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center">
                          <Image src="/chartbar.svg" alt="Overview" width={16} height={16} className="mr-2" />
                          Overview
                      </div>
                    </button>
                    <button 
                      onClick={() => setActiveTab("courses")}
                      className={`border-b-2 py-4 px-1 text-sm font-medium focus:outline-none ${
                        activeTab === "courses" 
                          ? "border-[#C084FC] text-[#C084FC]" 
                          : "border-transparent text-white hover:text-slate-400 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex gap-x-2 items-center">
                          <BookOpen className="h-4 mt-1 w-4 " />
                          <span>My courses ({totalCourses})</span>
                      </div>
                    </button>
                </nav>
            </div>
        </div>
      <main className="px-8 pb-8">
        {/* Header */}
        <div className="mb-8 flex max-w-screen-xl mx-auto items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              {activeTab === "overview" ? "Instructor Overview" : "My Courses"}
            </h1>
            <p className="mt-2">
              {activeTab === "overview" 
                ? "Manage your courses and track your teaching impact" 
                : ""
              }
            </p>
          </div>
          <Button variant="default" className="bg-purple-600 rounded-lg hover:bg-purple-700">
            <CirclePlus className="h-4 w-4" />
            Create Course
          </Button>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </main>
    </div>
  )
}
