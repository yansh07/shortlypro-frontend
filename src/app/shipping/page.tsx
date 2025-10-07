'use client';
import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="p-16 min-h-screen bg-slate-900 text-slate-50">
      <div className="text-start">
        <h1 className="text-3xl font-bold">SHIPPING POLICY</h1>
        <h2>
          <span className="font-bold">Effective Date:</span> January 1, 2025
        </h2>
        <br />
      </div>
      <div className="border mb-8"></div>
      <div>
        <h1 className="font-bold text-3xl">Digital Service - No Physical Shipping</h1>
        <p className="pt-4 text-lg mb-8">ShortIt is a 100% digital Software-as-a-Service (SaaS) platform. We do not ship any physical products.</p>
      </div>
      <div>
        <h1 className="font-bold text-3xl">Service Delivery</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li><span className="font-bold">1. Instant Access: </span>
            Upon successful registration and payment verification, your account is activated immediately
          </li>
          <li><span className="font-bold">2. No Shipping Required: </span>
            All features are accessible online through your web browser
          </li>
          <li><span className="font-bold">3. Global Availability: </span>
            Our service is available worldwide with internet access
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Account Activation</h1>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>
            1. Free accounts are activated instantly upon email verification
          </li>
          <li>
            2. Paid subscriptions are activated immediately after successful payment processing
          </li>
          <li>
            3. In rare cases of payment verification delays, activation may take up to 24 hours
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Technical Support Delivery</h1>
        <p className="pt-4 text-lg">
          While we don&apos;t ship physical items, we deliver:
        </p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Email support responses within 24 hours (Priority support: within 4 hours)</li>
          <li>2. API documentation and integration guides via our online portal</li>
          <li>3. Feature updates and improvements automatically to all users</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Refund Delivery</h1>
        <p className="pt-4 text-lg">
          If you request a refund under our Cancellation & Refunds policy:
        </p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Refunds are processed to your original payment method within 5-7 business days</li>
          <li>2. No physical shipment is involved</li>
        </ul>
        <p className="pt-4 text-lg mt-4">For any questions regarding service delivery, contact: <a className="hover:font-bold" href="mailto:pksingh69313@gmail.com">pksingh69313@gmail.com</a></p>
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
