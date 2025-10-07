'use client';
'use client';
import React from "react";
import Link from "next/link";
import { Link2 } from "lucide-react";

function page() {
  return (
    <div className="p-16 min-h-screen bg-slate-900 text-slate-50">
      <div className="text-start">
        <h1 className="text-3xl font-bold">TERMS AND CONDITIONS</h1>
        <h2>
          <span className="font-bold">Effective Date:</span> January 1, 2025
        </h2>
        <br />
      </div>
      <div className="border mb-8"></div>
      <div>
        <h1 className="font-bold text-3xl">1. Acceptance of Terms</h1>
        <p className="pt-4 text-lg">
          By accessing and using Shortly (&quot;the Service&quot;), you accept and agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately.
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8 ">2. Service Description</h1>
        <p className="pt-4 text-lg">Shortly provides URL shortening services, analytics, and related features. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">3. User Accounts</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. You must provide accurate information when creating an account</li>
          <li>2. You are responsible for maintaining the confidentiality of your account credentials</li>
          <li>3. You must be at least 18 years old to use the Service</li>
          <li>4. One person or legal entity may not maintain more than one free account</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">4. Acceptable Use</h1>
        <p className="pt-4 text-lg">You agree NOT to:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Use the Service for illegal activities</li>
          <li>2. Create short URLs for malicious websites, malware, or phishing</li>
          <li>3. Abuse the Service through excessive API calls or automated scraping</li>
          <li>4. Violate intellectual property rights</li>
          <li>5. Spam or distribute unsolicited content</li>
          <li>6. Attempt to gain unauthorized access to our systems</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">5. Subscription and Payment</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Subscription fees are billed in advance on a monthly or annual basis</li>
          <li>2. All fees are in Indian Rupees (INR) unless otherwise stated</li>
          <li>3. Price changes will be communicated 30 days in advance</li>
          <li>4. Non-payment may result in service suspension</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">6. Data Ownership and Privacy</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. You retain ownership of all content you create</li>
          <li>2. We collect and process data as described in our Privacy Policy</li>
          <li>3. We implement industry-standard security measures</li>
          <li>4. We do not sell your personal data to third parties</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">7. Service Limits</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Free and paid plans have specific usage limits as described on our pricing page</li>
          <li>2. Exceeding limits may result in service restrictions</li>
          <li>3. We reserve the right to rate-limit or suspend accounts that violate fair use policies</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">8. Intellectual Property</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Shortly and its original content, features, and functionality are owned by <Link href="https://github.com/yansh07" className="underline">[Priyanshu Kumar Singh]</Link></li>
          <li>2. You may not copy, modify, or reverse-engineer our Service</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">9. Termination</h1>
        <p className="pt-4 text-lg">We may terminate or suspend your account for:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Violation of these Terms</li>
          <li>2. Fraudulent payment activity</li>
          <li>3. Abusive behavior toward our staff or other users</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">10. Disclaimers</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. The Service is provided &quot;as is&quot; without warranties</li>
          <li>2. We do not guarantee uninterrupted or error-free service</li>
          <li>3. We are not responsible for third-party links or content</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">11. Limitation of Liability</h1>
        <p className="pt-4 text-lg">Shortly shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the Service.</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">12. Governing Law</h1>
        <p className="pt-4 text-lg">These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Uttarakhand, India.</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">13. Contact</h1>
        <p className="pt-4 text-lg">For questions about these Terms, contact us at: <a href="mailto:pksingh69313@gmail.com">pksingh69313@gmail.com</a></p>
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
