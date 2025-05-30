import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* About SkillCert Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">About SkillCert</h3>
            <p className="text-gray-300 leading-relaxed">
              SkillCert is a revolutionary platform that enables universities, academies, and companies to issue digital
              NFT certificates on the Stellar blockchain
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                  About us
                </Link>
                <Link href="/courses" className="block text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
                <Link href="/instructors" className="block text-gray-300 hover:text-white transition-colors">
                  Instructors
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
              <div className="space-y-3">
                <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
                <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Connect With Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-400">Connect With Us</h3>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Telegram">
                <Send className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Discord">
                <MessageCircle className="w-6 h-6" />
              </Link> */}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">Copyright © 2025 - SkillCert</p>
        </div>
      </div>
    </footer>
  )
}
