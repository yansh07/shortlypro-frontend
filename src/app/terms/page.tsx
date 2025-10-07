'use client';
'use client';
import React from "react";
import Link from "next/link";

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
        <p className="pt-4 text-lg">ShortIt provides URL shortening services, analytics, and related features. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.</p>
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
        <p className="pt-4 text-lg">ShortIt shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the Service.</p>
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
      <footer>
        <div className="flex space-x-6 text-sm text-slate-400">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/refund-policy">Refunds</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default page;
