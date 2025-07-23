"use client"

import { Search, GraduationCap, Bell, User, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

// Default user data
const defaultUserInfo = {
  name: "Jhon Doe",
  email: "jhon.doe@example.com",
  userId: "A123Y6...4TP058"
}

// Dropdown menu items configuration
const dropdownMenu = [
  {
    title: "Settings",
    icon: <Settings className="w-4 h-4 group-hover:text-pink-500" />,
    href: "/settings"
  },
  {
    title: "Instructor Panel",
    icon: <GraduationCap className="w-4 h-4 group-hover:text-pink-500" />,
    href: "/instructor-panel"
  },
  {
    title: "Disconnect",
    icon: <LogOut className="w-4 h-4 group-hover:text-pink-500" />,
    href: "/logout"
  }
] as const

interface NavbarMenuProps {
  variant?: "default" | "withUser"
  userInfo?: {
    name: string
    email: string
    userId: string
  }
}

export default function NavbarMenu({ variant = "default", userInfo = defaultUserInfo }: NavbarMenuProps) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [currentMode, setCurrentMode] = useState(variant)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showDropdown])

  // Handle connect button click
  const handleConnect = () => {
    setCurrentMode("withUser")
  }

  // Handle disconnect button click
  const handleDisconnect = () => {
    setCurrentMode("default")
    setShowDropdown(false)
  }

  // Handle dropdown item click
  const handleDropdownItemClick = (href: string) => {
    if (href === "/logout") {
      handleDisconnect()
    } else {
      router.push(href)
    }
  }

  return (
    <nav className="bg-[#1F2937] px-6 py-4">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        
        {/* Logo and Explore Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/nabvar-logo.png" 
              alt="Skillcert Logo"
              width={100}
              height={100}
            />
          </div>
          <span className="text-white/80 text-sm">Explore</span>
        </div>

        {/* Search Bar Section */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Input
              type="search"
              placeholder=""
              className="w-full border-2 border-white rounded-full px-4 py-2 text-white placeholder:text-white/50 focus:border-red-400 bg-transparent"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <Search className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${isSearchFocused ? 'text-red-400' : 'text-white'}`} />
          </div>
        </div>

        {/* Right Navigation Section */}
        {currentMode === "default" ? (
          <DefaultNavigation onConnect={handleConnect} />
        ) : (
          <UserNavigation 
            userInfo={userInfo}
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
            onDropdownItemClick={handleDropdownItemClick}
            dropdownRef={dropdownRef}
          />
        )}
      </div>
    </nav>
  )
}

// Default Navigation Component (when not logged in)
function DefaultNavigation({ onConnect }: { onConnect: () => void }) {
  return (
    <div className="flex items-center gap-6">
      <a href="#" className="text-white/80 hover:text-white transition-colors">
        Home
      </a>
      <a href="#" className="text-white/80 hover:text-white transition-colors">
        Contact
      </a>
      <Button 
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full"
        onClick={onConnect}
      >
        Connect
      </Button>
    </div>
  )
}

// User Navigation Component (when logged in)
function UserNavigation({ 
  userInfo, 
  showDropdown, 
  setShowDropdown, 
  onDropdownItemClick,
  dropdownRef
}: { 
  userInfo: any
  showDropdown: boolean
  setShowDropdown: (show: boolean) => void
  onDropdownItemClick: (href: string) => void
  dropdownRef: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <div className="flex items-center gap-4">
      <button className="p-2 text-white/80 hover:text-white transition-colors">
        <GraduationCap className="w-6 h-6" />
      </button>
      <button className="p-2 text-white/80 hover:text-white transition-colors">
        <Bell className="w-6 h-6" />
      </button>
      
              {/* User Profile Button */}
        <div className="relative" ref={dropdownRef}>
          <button 
            className="flex items-center gap-2 bg-purple-600 border border-white rounded-full px-3 py-2 hover:bg-purple-700 transition-colors"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-white text-sm bg-[#1F2937] px-2 py-1 rounded-full">
              {userInfo?.userId || "A123Y6...4TP058"}
            </span>
            <div className="w-6 h-6 bg-purple-600 border-2 border-white rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </button>
          
          {/* Dropdown Menu */}
          {showDropdown && (
            <UserDropdown 
              userInfo={userInfo}
              onItemClick={onDropdownItemClick}
              setShowDropdown={setShowDropdown}
            />
          )}
        </div>
    </div>
  )
}

// User Dropdown Component
function UserDropdown({ 
  userInfo, 
  onItemClick,
  setShowDropdown
}: { 
  userInfo: any
  onItemClick: (href: string) => void
  setShowDropdown: (show: boolean) => void
}) {
  return (
    <div className="px-6 py-4 absolute right-0 mt-2 w-64 bg-[#020618] rounded-lg shadow-lg z-50" onMouseLeave={() => setShowDropdown(false)}>
      {/* User Info Section */}
      <div className="pb-2 border-b border-white flex flex-col gap-2 justify-end items-end">
        <div className="font-semibold text-white">{userInfo?.name || "Jhon Doe"}</div>
        <div className="text-sm text-white/70">{userInfo?.email || "jhon.doe@example.com"}</div>
      </div>
      
      {/* Menu Items Section */}
      <div className="py-2 flex flex-col gap-2">
        {dropdownMenu.map((item) => (
          <button 
            key={item.title} 
            className="w-full flex items-center gap-3 px-4 py-1 text-white bg-[#111827] hover:text-pink-500 hover:border-pink-500 border border-transparent transition-all duration-200 group rounded-md" 
            onClick={() => onItemClick(item.href)}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
} 