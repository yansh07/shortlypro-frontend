'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Link2, Menu, X, Zap, Shield, Heart, BarChart3, Code, TrendingUp, Coffee } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='min-h-screen bg-slate-900 text-slate-50'>
        <nav className="relative z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Shortly
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                Features
              </a> */}
              <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors" onClick={ () => router.push('/user')}>
                Login
              </button>
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40" onClick={ () => router.push('/user')}>
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                {/* <a href="#features" className="text-slate-300 hover:text-white transition-colors">
                  Features
                </a> */}
                <Link href="/pricing" className="text-slate-300 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  About
                </Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
                  <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors text-left" onClick={ () => router.push('/user')}>
                    Login
                  </button>
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all" onClick={ () => router.push('/user')}>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full mb-6">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-slate-300">Built with passion</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Shortly
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              We&apos;re on a mission to make URL management simple, powerful, and
              accessible to everyone. No complexity, just results.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
            <div className="p-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl mb-20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Shortly was born from a simple frustration: existing URL
                  shorteners were either too complicated, too expensive, or
                  lacked the features modern teams need.
                </p>
                <p>
                  We built Shortly to be different. Lightning-fast
                  infrastructure powered by Redis, real-time analytics that
                  actually matter, and a clean interface that doesn&apos;t get in
                  your way.
                </p>
                <p>
                  Whether you&apos;re a solo creator sharing content, a marketer
                  tracking campaigns, or an enterprise managing thousands of
                  links, Shortly scales with you.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Speed First
                </h3>
                <p className="text-slate-400">
                  Built on Redis and FastAPI for blazing-fast URL generation and
                  redirects. Your users won&apos;t even notice the hop.
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all group">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Privacy Matters
                </h3>
                <p className="text-slate-400">
                  Your data is yours. We don&apos;t sell information, track users
                  across sites, or do anything shady. Period.
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-pink-500/50 transition-all group">
                <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Data-Driven
                </h3>
                <p className="text-slate-400">
                  Real-time analytics that help you understand your audience.
                  See what&apos;s working and optimize accordingly.
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-all group">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Developer Friendly
                </h3>
                <p className="text-slate-400">
                  Clean REST API, comprehensive docs, and webhooks. Integrate
                  Shortly into your workflow in minutes.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="p-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-slate-700 rounded-3xl mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-8">
                Built With Modern Tech
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Code className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-slate-300 font-medium">Next.js</p>
                  <p className="text-slate-500 text-sm">Frontend</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="text-slate-300 font-medium">FastAPI</p>
                  <p className="text-slate-500 text-sm">Backend</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-pink-400" />
                  </div>
                  <p className="text-slate-300 font-medium">Redis</p>
                  <p className="text-slate-500 text-sm">Caching</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-emerald-400" />
                  </div>
                  <p className="text-slate-300 font-medium">Auth0</p>
                  <p className="text-slate-500 text-sm">Authentication</p>
                </div>
              </div>
            </div>

            {/* Team Section - Placeholder */}
            <div className="text-center p-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl">
              <Coffee className="w-16 h-16 text-slate-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Meet the Team
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                Currently a solo project built with ❤️ and lots of coffee. Open
                to collaborators who share the vision!
              </p>
              <div className="inline-flex flex-col items-center">
                {/* <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                  YN
                </div> */}
                <Image
                  src="/pk.webp"
                  alt="priyanshu"
                  width={70}
                  height={48}
                  priority={true}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                />
                <p className="text-xl font-semibold text-white">Priyanshu</p>
                <p className="text-slate-400">Founder & Developer</p>
                <p className="text-sm text-slate-500 mt-2">
                  📍 Dehradun, Uttarakhand
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-slate-700 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Join thousands of users who trust Shortly for their link
                management
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                Start Free Today
              </button>
            </div>
          </div>
        </div>

        <footer className="relative z-10 border-t border-slate-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Shortly</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 Shortly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
