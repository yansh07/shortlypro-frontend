'use client';
import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="p-16 min-h-screen bg-slate-900 text-slate-50">
      <div className="text-start">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <h2>
          Get in Touch with Shortly
        </h2>
        <br />
      </div>
      <div className="border mb-8"></div>
      <div>
        <p className="mb-8">We&apos;d love to hear from you! Whether you have questions, need support, or want to provide feedback, we&apos;re here to help.</p>
        <h1 className="font-bold text-3xl">Support Email</h1>
        <p className="pt-4 text-lg">
          Mail us at: <Link href="mailto:pksingh69313@gmail.com" className="hover:font-bold">pksingh69313@gmail.com</Link>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Response Time</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>
            1. <span className="font-bold">Free Plan:</span> Within 48 hours
          </li>
          <li>
            2. <span className="font-bold">Pro Plan:</span> Within 24 hours (Priority Support)
          </li>
          <li>
            3. <span className="font-bold">Enterprise Plan:</span> Within 4 hours (24/7 Priority Support)
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Business Address</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>Shortly</li>
          <li>Selaqui</li>
          <li>Vikasnagar, Uttarakhand</li>
          <li>India, 248198</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Social Media</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>X (formerly Twitter) - <Link href="https://www.x.com/yansh_08" className="text-blue-400 hover:font-bold">Priyanshu</Link></li>
          <li>LinkedIn - <Link href="https://www.linkedin.com/in/yansh08/" className="text-blue-400 hover:font-bold">Priyanshu</Link></li>
          <li>GitHub - <Link href="https://www.github.com/yansh07" className="text-blue-400 hover:font-bold">Priyanshu</Link></li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Business Hours</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>Monday - Friday: 9:00 AM - 6:00 PM IST</li>
          <li>Saturday: 10:00 AM - 4:00 PM IST</li>
          <li>Sunday: Closed (Enterprise customers: 24/7 support via email)</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Report Abuse</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>If you encounter a malicious short URL or abuse of our service:</li>
          <li>Email: <Link href="mailto:pksingh69313@gmail.com" className="text-blue-400 hover:font-bold">pksingh69313@gmail.com</Link></li>
          <li>We investigate all reports within 24 hours.</li>
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
