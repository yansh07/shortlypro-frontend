"use client";
import React from "react";
// import Link from "next/link";

function page() {
  return (
    <div className="p-16 min-h-screen bg-slate-900 text-slate-50">
      <div className="text-start">
        <h1 className="text-3xl font-bold">PRIVACY POLICY</h1>
        <h2>
          <span className="font-bold">Effective Date:</span> January 1, 2025
        </h2>
        <br />
      </div>
      <div className="border mb-8"></div>
      <div>
        <h1 className="font-bold text-3xl">1. Introduction</h1>
        <p className="pt-4 text-lg mb-8">
          ShortIt (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects
          your privacy. This Privacy Policy explains how we collect, use, and
          protect your personal information.
        </p>
      </div>
      <div className="mb-8">
        <h1 className="font-bold text-3xl">2. Information We Collect</h1>
        <h2 className="pt-4 text-2xl font-bold">Personal Information</h2>
        <ul className="ml-6 font-medium text-lg">
          <li>1. Name</li>
          <li>2. Email Address</li>
          <li>3. Payment Information (processed securely through Razorpay)</li>
        </ul>
        <h2 className="pt-4 text-2xl font-bold">Usage Data</h2>
        <ul className="ml-6 font-medium text-lg">
          <li>1. URLs you shorten</li>
          <li>
            2. Click analytics (timestamps, approximate geographic location,
            referrer data)
          </li>
          <li>3. Device and browser information</li>
          <li>4. IP addresses (for security and analytics)</li>
        </ul>
        <h2 className="pt-4 text-2xl font-bold">Cookies</h2>
        <ul className="ml-6 font-medium text-lg">
          <li>
            1. We use cookies to maintain your session and improve user
            experience
          </li>
          <li>2. You can disable cookies in your browser settings</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">
          3. How We Use Your Information
        </h1>
        <p className="pt-4 text-lg">We use collected information to:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Provide and maintain our Service</li>
          <li>2. Process payments and manage subscriptions</li>
          <li>3. Send service-related notifications</li>
          <li>4. Improve our features and user experience</li>
          <li>5. Detect and prevent fraud or abuse</li>
          <li>6. Comply with legal obligations</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">4. Data Sharing</h1>
        <p className="pt-4 text-lg">
          We DO NOT sell your personal information. We may share data with:
        </p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>
            1. <span className="font-bold">Payment Processors:</span> Razorpay
            (for payment processing)
          </li>
          <li>
            2. <span className="font-bold">Authentication Providers:</span>{" "}
            Auth0 (for secure login)
          </li>
          <li>
            3. <span className="font-bold">Analytics Tools:</span> For
            aggregated, anonymized usage statistics
          </li>
          <li>
            4. <span className="font-bold">Legal Requirements:</span> When
            required by law or to protect our rights
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">5. Data Security</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. We implement industry-standard encryption (HTTPS/TLS)</li>
          <li>2. Passwords are hashed using secure algorithms</li>
          <li>3. Payment data is handled by PCI-compliant processors</li>
          <li>4. Regular security audits and updates</li>
          <li>5. Redis data is encrypted in transit and at rest</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">6. Data Retention</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>
            1. Active account data is retained as long as your account exists
          </li>
          <li>2. Deleted accounts: Personal data is removed within 30 days</li>
          <li>3. Analytics data may be retained in anonymized form</li>
          <li>4. Free plan: 7 days click data retention</li>
          <li>5. Pro plan: 90 days retention</li>
          <li>6. Enterprise: Unlimited retention</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">7. Your Rights</h1>
        <p className="pt-4 text-lg">You have the right to:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Access your personal data</li>
          <li>2. Correct inaccurate information</li>
          <li>3. Delete your account and associated data</li>
          <li>4. Export your data</li>
          <li>5. Opt-out of marketing communications</li>
          <li>6. Object to data processing</li>
        </ul>
        <p className="pt-4 text-lg mt-4">
          To exercise these rights, contact:{" "}
          <a className="hover:font-bold" href="mailto:pksingh69313@gmail.com">
            pksingh69313@gmail.com
          </a>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">8. Third-Party Links</h1>
        <p className="pt-4 text-lg">Shortened URLs may redirect to third-party websites. We are not responsible for the privacy practices of those sites.</p>
      </div>
       <div>
        <h1 className="font-bold text-3xl pt-8">9. Children&apos;s Privacy</h1>
        <p className="pt-4 text-lg">Our Service is not intended for users under 18. We do not knowingly collect data from minors.</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">10. International Data Transfers</h1>
        <p className="pt-4 text-lg">Your data may be processed in servers located in various countries. We ensure adequate data protection measures are in place.</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">11. Changes to This Policy</h1>
        <p className="pt-4 text-lg">We may update this Privacy Policy. Changes will be posted on this page with an updated &quot;Effective Date.&quot;</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">12. Contact Us</h1>
        <p className="pt-4 text-lg">For privacy concerns or questions:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Email: <a href="mailto:pksingh69313@gmail.com" className="hover:font-bold">pksingh69313@gmail.com</a></li>
          <li>2. Address: [Selaqui, Vikāsnagar, Uttarakhand, India]</li>
        </ul>
      </div>
      <div className="border border-gray-400 mt-8 mb-4"></div>
      <footer>
        <div className="flex space-x-6 text-sm text-slate-400">
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
          <a href="/refund-policy">Refunds</a>
          <a href="/contact">Contact</a>
          <a href="/shipping">Shipping</a>
        </div>
      </footer>
    </div>
  );
}

export default page;
