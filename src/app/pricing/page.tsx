'use client';
import { useState, FC } from 'react';
import { Link2, Check, X, Zap, Star, Rocket, Crown, TrendingUp, Shield, IndianRupee, Clock, BarChart3, Users, Target, Heart, Code, Coffee, Menu, XIcon } from 'lucide-react';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react'; 
import { useRouter } from 'next/navigation';

// Define types for pricing plans
interface Feature {
  text: string;
  included: boolean;
}

interface Price {
  monthly: number;
  yearly: number;
}

interface PricingPlan {
  name: string;
  tagline: string;
  price: Price;
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'pink';
  features: Feature[];
  cta: string;
  popular: boolean;
}

// Define types for color classes
interface ColorClasses {
  bg: string;
  icon: string;
  border: string;
  button: string;
}

const PricingAboutPages: FC = () => {
  const [activePage, setActivePage] = useState<'pricing' | 'about'>('pricing');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  // Pricing tiers
  const pricingPlans: PricingPlan[] = [
    {
      name: 'Starter',
      tagline: 'Perfect for trying out',
      price: { monthly: 0, yearly: 0 },
      icon: Zap,
      color: 'blue',
      features: [
        { text: '25 URLs per month', included: true },
        { text: '1,000 clicks per month', included: true },
        { text: 'Basic analytics', included: true },
        { text: '7 days data retention', included: true },
        { text: 'Custom alias', included: false },
        { text: 'QR codes', included: false },
        { text: 'API access', included: false },
        { text: 'Priority support', included: false },
        { text: 'Team collaboration', included: false }
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      tagline: 'For the serious hustlers',
      price: { monthly: 49, yearly: 470 }, // ~20% discount yearly
      icon: Star,
      color: 'purple',
      features: [
        { text: '500 URLs per month', included: true },
        { text: 'Unlimited clicks', included: true },
        { text: 'Advanced analytics', included: true },
        { text: '90 days data retention', included: true },
        { text: 'Custom alias', included: true },
        { text: 'QR codes with branding', included: true },
        { text: 'API access (10k req/month)', included: true },
        { text: 'Priority support', included: true },
        { text: 'Team collaboration (3 members)', included: false }
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      tagline: 'Absolute powerhouse mode',
      price: { monthly: 99, yearly: 950 }, // ~20% discount yearly
      icon: Crown,
      color: 'pink',
      features: [
        { text: 'Unlimited URLs', included: true },
        { text: 'Unlimited clicks', included: true },
        { text: 'Real-time analytics + exports', included: true },
        { text: 'Unlimited data retention', included: true },
        { text: 'Custom alias + branded domains', included: true },
        { text: 'Advanced QR codes + logos', included: true },
        { text: 'API access (unlimited)', included: true },
        { text: '24/7 priority support', included: true },
        { text: 'Team collaboration (unlimited)', included: true }
      ],
      cta: 'Go Enterprise',
      popular: false
    }
  ];

  const getColorClasses = (color: 'blue' | 'purple' | 'pink'): ColorClasses => {
    const colors: Record<typeof color, ColorClasses> = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        icon: 'bg-blue-500/10 text-blue-400',
        border: 'border-blue-500/50',
        button: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-blue-500/25 hover:shadow-blue-500/40'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        icon: 'bg-purple-500/10 text-purple-400',
        border: 'border-purple-500/50',
        button: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-purple-500/25 hover:shadow-purple-500/40'
      },
      pink: {
        bg: 'from-pink-500 to-pink-600',
        icon: 'bg-pink-500/10 text-pink-400',
        border: 'border-pink-500/50',
        button: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 shadow-pink-500/25 hover:shadow-pink-500/40'
      }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ShortIt
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setActivePage('pricing')} className={`${activePage === 'pricing' ? 'text-white' : 'text-slate-300'} hover:text-white transition-colors`}>
                Pricing
              </button>
              <button onClick={() => setActivePage('about')} className={`${activePage === 'about' ? 'text-white' : 'text-slate-300'} hover:text-white transition-colors`}>
                About
              </button>
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 text-slate-300 hover:text-white transition-colors" onClick={ () => router.push('/user')}>
                Login
              </button>
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all shadow-lg shadow-blue-500/25" onClick={ () => router.push('/user')}>
                Sign Up
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4">
                <button onClick={() => { setActivePage('pricing'); setMobileMenuOpen(false); }} className="text-slate-300 hover:text-white transition-colors text-left">
                  Pricing
                </button>
                <button onClick={() => { setActivePage('about'); setMobileMenuOpen(false); }} className="text-slate-300 hover:text-white transition-colors text-left">
                  About
                </button>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Pricing Page */}
      {activePage === 'pricing' && (
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-slate-300">Simple, transparent pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Plans for Everyone
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Start free, upgrade when you're ready. No hidden fees, cancel anytime.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center p-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-lg transition-all ${billingCycle === 'monthly' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-lg transition-all ${billingCycle === 'yearly' ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
              >
                Yearly
                <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              const colors = getColorClasses(plan.color);
              const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;
              
              return (
                <div
                  key={index}
                  className={`relative p-8 bg-slate-800/50 backdrop-blur-sm border rounded-3xl transition-all hover:scale-105 ${plan.popular ? `${colors.border} shadow-2xl` : 'border-slate-700 hover:border-slate-600'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`px-4 py-1 bg-gradient-to-r ${colors.bg} text-white text-sm font-medium rounded-full shadow-lg`}>
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-6">{plan.tagline}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <IndianRupee className="w-7 h-7 text-white" />
                      <span className="text-5xl font-bold text-white">{price}</span>
                      {price > 0 && (
                        <span className="text-slate-400 ml-2">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && price > 0 && (
                      <p className="text-sm text-slate-500 mt-2">
                        <IndianRupee className="w-3 h-3 inline-block align-baseline" />{(price / 12).toFixed(2)}/month billed annually
                      </p>
                    )}
                  </div>

                  <button className={`w-full py-4 bg-gradient-to-r ${colors.button} text-white rounded-xl font-medium transition-all shadow-lg mb-8 hover:scale-105`}>
                    {plan.cta}
                  </button>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-slate-300' : 'text-slate-600'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-2">Can I switch plans anytime?</h3>
                <p className="text-slate-400">Yes! Upgrade, downgrade, or cancel anytime. No questions asked.</p>
              </div>
              <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-2">What happens if I exceed my limits?</h3>
                <p className="text-slate-400">We'll notify you before hitting limits. You can upgrade instantly or wait until next billing cycle.</p>
              </div>
              <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer refunds?</h3>
                <p className="text-slate-400">Yes! 14-day money-back guarantee. No questions asked if you're not satisfied.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Page */}
      {activePage === 'about' && (
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full mb-6">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-slate-300">Built with passion</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About ShortIt
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              We're on a mission to make URL management simple, powerful, and accessible to everyone. No complexity, just results.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
            <div className="p-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl mb-20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  ShortIt was born from a simple frustration: existing URL shorteners were either too complicated, too expensive, or lacked the features modern teams need.
                </p>
                <p>
                  We built ShortIt to be different. Lightning-fast infrastructure powered by Redis, real-time analytics that actually matter, and a clean interface that doesn't get in your way.
                </p>
                <p>
                  Whether you're a solo creator sharing content, a marketer tracking campaigns, or an enterprise managing thousands of links, ShortIt scales with you.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all group">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Speed First</h3>
                <p className="text-slate-400">
                  Built on Redis and FastAPI for blazing-fast URL generation and redirects. Your users won't even notice the hop.
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all group">
                <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Privacy Matters</h3>
                <p className="text-slate-400">
                  Your data is yours. We don't sell information, track users across sites, or do anything shady. Period.
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-pink-500/50 transition-all group">
                <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Data-Driven</h3>
                <p className="text-slate-400">
                  Real-time analytics that help you understand your audience. See what's working and optimize accordingly.
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-all group">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Developer Friendly</h3>
                <p className="text-slate-400">
                  Clean REST API, comprehensive docs, and webhooks. Integrate ShortIt into your workflow in minutes.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="p-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-slate-700 rounded-3xl mb-20">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Built With Modern Tech</h2>
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
              <h2 className="text-3xl font-bold text-white mb-4">Meet the Team</h2>
              <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                Currently a solo project built with ❤️ and lots of coffee. Open to collaborators who share the vision!
              </p>
              <div className="inline-flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                  YN
                </div>
                <p className="text-xl font-semibold text-white">Your Name</p>
                <p className="text-slate-400">Founder & Developer</p>
                <p className="text-sm text-slate-500 mt-2">📍 Vikāsnagar, Uttarakhand</p>
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
                Join thousands of users who trust ShortIt for their link management
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105">
                Start Free Today
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">ShortIt</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 ShortIt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PricingAboutPages;