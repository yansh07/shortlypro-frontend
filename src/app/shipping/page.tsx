'use client';
import React from "react";
import { Link2 } from "lucide-react";
// import Link from "next/link";

function page() {
  return (
    <div className="p-16 min-h-screen bg-slate-900 text-slate-50">
      <div className="text-start mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">SHIPPING AND DELIVERY POLICY</h1>
        <p className="text-lg text-slate-300">
          <span className="font-semibold">Effective Date:</span> January 1, 2025
        </p>
        <p className="text-lg text-slate-300">
          <span className="font-semibold">Last Updated:</span> January 8, 2025
        </p>
      </div>
      <div className="border border-slate-700 mb-12"></div>

      <div className="space-y-10">
        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Overview</h2>
          <p className="text-lg text-slate-400">
            Shortly provides digital software services. This policy outlines our service delivery terms.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Nature of Service</h2>
          <p className="text-lg text-slate-400">
            Shortly is a Software-as-a-Service (SaaS) platform providing URL shortening and analytics services. No physical products are shipped or delivered.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Service Delivery Timeline</h2>
          <h3 className="font-semibold text-2xl text-white mb-3">Immediate Delivery</h3>
          <p className="text-lg text-slate-400 mb-4">
            All Shortly services are delivered instantly and electronically upon:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>Successful account registration</li>
            <li>Payment confirmation (for paid plans)</li>
            <li>Email verification (for free accounts)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Delivery Method</h2>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li><span className="font-semibold">Online Access:</span> All services are accessible via web browser at <a href="https://shortleepro.vercel.app" className="text-blue-400 hover:underline">https://shortleepro.vercel.app</a></li>
            <li><span className="font-semibold">No Physical Shipping:</span> No courier, postal, or physical delivery is involved</li>
            <li><span className="font-semibold">Digital Delivery:</span> 100% online service activation</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Delivery Timelines by Plan</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-slate-800 rounded-lg shadow-md">
              <thead>
                <tr className="bg-slate-700 text-left text-white text-lg">
                  <th className="py-3 px-4 border-b border-slate-600">Plan Type</th>
                  <th className="py-3 px-4 border-b border-slate-600">Delivery Time</th>
                  <th className="py-3 px-4 border-b border-slate-600">Access Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Free Starter</td>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Instant (upon email verification)</td>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Web browser</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Pro Plan</td>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Instant (upon payment confirmation)</td>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Web browser</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Enterprise</td>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Instant (upon payment confirmation)</td>
                  <td className="py-3 px-4 border-b border-slate-700 text-slate-300">Web browser</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            <span className="font-semibold">Note:</span> In rare cases of payment gateway delays, activation may take up to 24 hours. You will receive email notification upon successful activation.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Service Availability</h2>
          <h3 className="font-semibold text-2xl text-white mb-3">Geographic Coverage</h3>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li><span className="font-semibold">Global Service:</span> Available worldwide with internet connection</li>
            <li><span className="font-semibold">No Shipping Restrictions:</span> No geographic shipping limitations as this is a digital service</li>
            <li><span className="font-semibold">24/7 Access:</span> Service accessible at any time from anywhere</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-2xl text-white mb-3">Technical Requirements</h3>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>Internet connection</li>
            <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
            <li>Valid email address</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Delivery Confirmation</h2>
          <p className="text-lg text-slate-400 mb-4">
            Upon successful service activation, you will receive:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>Email confirmation to your registered email address</li>
            <li>Immediate dashboard access at <a href="https://shortleepro.vercel.app/dashboard" className="text-blue-400 hover:underline">https://shortleepro.vercel.app/dashboard</a></li>
            <li>Welcome email with getting started guide</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">No Physical Shipment Costs</h2>
          <p className="text-lg text-slate-400 mb-4">
            Since Shortly is a digital service:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>No shipping charges apply</li>
            <li>No handling fees apply</li>
            <li>No customs or import duties apply</li>
            <li>No delivery partner involvement</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Refund and Return Policy</h2>
          <p className="text-lg text-slate-400 mb-4">
            As a digital service with instant delivery:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>Services cannot be &quot;returned&quot; in the traditional sense</li>
            <li>Refunds are governed by our Refund Policy (see separate policy page)</li>
            <li>14-day money-back guarantee available for paid plans</li>
            <li>Cancellation possible at any time</li>
          </ul>
          <p className="text-lg text-slate-400 mt-4">
            For refund details, please visit: <a href="https://shortleepro.vercel.app/refund-policy" className="text-blue-400 hover:underline">https://shortleepro.vercel.app/refund-policy</a>
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Support Delivery</h2>
          <p className="text-lg text-slate-400 mb-4">
            While we don&apos;t ship physical items, we provide:
          </p>
          <h3 className="font-semibold text-2xl text-white mb-3">Email Support</h3>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2 mb-4">
            <li>Free Plan: Response within 48 hours</li>
            <li>Pro Plan: Priority response within 24 hours</li>
            <li>Enterprise Plan: Premium support within 4 hours (24/7)</li>
          </ul>
          <h3 className="font-semibold text-2xl text-white mb-3">Documentation Delivery</h3>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2 mb-4">
            <li>Instant access to API documentation</li>
            <li>Online knowledge base</li>
            <li>Video tutorials and guides</li>
          </ul>
          <p className="text-lg text-slate-400 mb-4">
            All support materials are delivered digitally via:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>Email: <a href="mailto:pksingh69313@gmail.com" className="text-blue-400 hover:underline">pksingh69313@gmail.com</a></li>
            <li>Online portal: <a href="https://shortleepro.vercel.app/docs" className="text-blue-400 hover:underline">https://shortleepro.vercel.app/docs</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Service Interruptions</h2>
          <p className="text-lg text-slate-400 mb-4">
            In case of:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2 mb-4">
            <li>Technical maintenance</li>
            <li>Unexpected downtime</li>
            <li>Service updates</li>
          </ul>
          <p className="text-lg text-slate-400 mb-4">
            Users will be notified via:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>Email notification</li>
            <li>Dashboard banner</li>
            <li>Status page updates</li>
          </ul>
          <p className="text-lg text-slate-400 mt-4">
            No shipping delays apply as this is a digital service.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Order Processing</h2>
          <h3 className="font-semibold text-2xl text-white mb-3">Subscription Orders</h3>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2 mb-4">
            <li>User selects plan and completes payment</li>
            <li>Payment processed via Razorpay</li>
            <li>Account upgraded instantly</li>
            <li>Confirmation email sent immediately</li>
            <li>Full feature access granted</li>
          </ul>
          <p className="text-lg text-slate-400 mt-4">
            <span className="font-semibold">Processing Time:</span> Instant (0-24 hours maximum)
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-2xl text-white mb-3">International Service Delivery</h3>
          <p className="text-lg text-slate-400 mb-4">
            Shortly serves customers globally:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>No international shipping delays</li>
            <li>No customs clearance required</li>
            <li>Instant global access</li>
            <li>Payment accepted in INR (Indian Rupees)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Cancellation and Service Termination</h2>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2 mb-4">
            <li>Cancellation effective immediately</li>
            <li>Access continues until end of billing period</li>
            <li>No &quot;return shipping&quot; required</li>
            <li>Data export available before account closure</li>
          </ul>
          <p className="text-lg text-slate-400 mt-4">
            For cancellation, visit: <a href="https://shortleepro.vercel.app/dashboard/settings" className="text-blue-400 hover:underline">https://shortleepro.vercel.app/dashboard/settings</a>
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Contact Information</h2>
          <p className="text-lg text-slate-400 mb-4">
            For questions about service delivery:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2 mb-4">
            <li>Email: <a href="mailto:pksingh69313@gmail.com" className="text-blue-400 hover:underline">pksingh69313@gmail.com</a></li>
            <li>Support Portal: <a href="https://shortleepro.vercel.app/contact" className="text-blue-400 hover:underline">https://shortleepro.vercel.app/contact</a></li>
            <li>Business Hours: Monday-Friday, 9:00 AM - 6:00 PM IST</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Policy Updates</h2>
          <p className="text-lg text-slate-400">
            This Shipping and Delivery Policy may be updated periodically. Changes will be posted on this page with an updated &quot;Last Updated&quot; date.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl text-white mb-4">Acknowledgment</h2>
          <p className="text-lg text-slate-400 mb-4">
            By using Shortly services, you acknowledge that:
          </p>
          <ul className="list-disc list-inside ml-6 text-lg text-slate-400 space-y-2">
            <li>This is a digital service with no physical shipping</li>
            <li>Service delivery is instant and electronic</li>
            <li>No physical products will be delivered to your address</li>
            <li>All support and documentation is provided digitally</li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-xl font-bold text-white mb-2">Shortly - Lightning Fast URL Shortening</p>
          <p className="text-lg text-slate-400">Digital Service Provider</p>
          <p className="text-lg text-slate-400">Vikāsnagar, Uttarakhand, India</p>
        </div>
      </div>

      <div className="border border-gray-400 mt-8 mb-4"></div>
      <footer className="relative z-10 border-t border-slate-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Shortly</span>
              </div>
              <p className="text-slate-400 text-sm">
                Lightning fast URL shortening with powerful analytics.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/pricing" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/features" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/faq" className="text-slate-400 hover:text-white transition-colors text-sm">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/docs" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/refund-policy" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="text-slate-400 hover:text-white transition-colors text-sm">
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm text-center md:text-left">
                © 2025 Shortly. All rights reserved.
              </p>
              
              {/* Social Links (Optional) */}
              <div className="flex items-center space-x-6">
                <a href="https://www.x.com/yansh_08" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.github.com/yansh07" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/yansh08/" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page;