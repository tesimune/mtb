import type React from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Mommy to Be</h3>
            <p className="text-sm">
              Your ultimate pregnancy companion, providing support and guidance throughout your journey.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-purple-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#tracker" className="hover:text-purple-300">
                  Pregnancy Tracker
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#chat" className="hover:text-purple-300">
                  AI Chat
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: info@mommytobe.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-purple-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-purple-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-purple-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-purple-300">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center">
          <p className="text-sm">&copy; 2023 Mommy to Be. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

