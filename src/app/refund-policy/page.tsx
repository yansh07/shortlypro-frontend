'use client';
import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="p-16 min-h-screen bg-slate-900 text-slate-50">
      <div className="text-start">
        <h1 className="text-3xl font-bold">CANCELLATION & REFUNDS POLICY</h1>
        <h2>
          <span className="font-bold">Effective Date:</span> January 1, 2025
        </h2>
        <br />
      </div>
      <div className="border mb-8"></div>
      <div>
        <h1 className="font-bold text-3xl">Subscription Cancellation</h1>
        <p className="pt-4 text-lg">
          You can cancel your <span className="font-bold">Shortly</span>{" "}
          subscription at any time through your account dashboard. Upon
          cancellation:
        </p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>
            1. Your subscription will remain active until the end of your
            current billing cycle
          </li>
          <li>
            2. You will continue to have access to all paid features until the
            subscription expires
          </li>
          <li>3. No charges will be made for subsequent billing cycles</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-3xl pt-8">Refund Policy</h1>
        <p className="pt-4 text-lg">14-Day Money-Back Guarantee:</p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>
            1. All new subscriptions (Pro and Enterprise) are covered by our
            14-day money-back guarantee
          </li>
          <li>
            2. If you&apos;re not satisfied within 14 days of purchase, contact
            us for a full refund
          </li>
          <li>
            3. Refunds are processed within 5-7 business days to the original
            payment method
          </li>
        </ul>
      </div>
      <p className="pt-4 text-lg">After 14 days:</p>
      <ul className="pt-3 ml-6 font-medium text-lg">
        <li>1. Refunds are evaluated on a case-by-case basis</li>
        <li>
          2. Service interruptions caused by technical issues on our end may
          qualify for pro-rated refunds
        </li>
        <li>
          3. Refunds are not provided for partial billing periods after the
          first 14 days
        </li>
      </ul>
      <p className="pt-4 text-lg">Free Plan:</p>
      <ul className="pt-3 ml-6 font-medium text-lg">
        <li>1. The free plan has no charges and requires no refund policy</li>
      </ul>
      <div>
        <h1 className="font-bold text-3xl pt-8">How to Request a Refund</h1>
        <p className="pt-4 text-lg">
          Email us at:{" "}
          <Link href="mailto:pksingh69313@gmail.com" className="underline">
            pksingh69313@gmail.com
          </Link>
        </p>
        <ul className="pt-3 ml-6 font-medium text-lg">
          <li>1. Your registered email address</li>
          <li>2. Subscription plan details</li>
          <li>3. Reason for refund request</li>
        </ul>
        <p className="pt-4">
          We aim to process all refund requests within 48 hours.
        </p>
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
