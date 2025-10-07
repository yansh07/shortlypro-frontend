"use client";

import { useState } from "react";
import {
  Link2,
  Plus,
  Copy,
  Check,
  ExternalLink,
  BarChart3,
  Trash2,
  Edit2,
  Search,
  Calendar,
  TrendingUp,
  MousePointer,
  Globe,
  LogOut,
  User,
  Settings,
  Menu,
  X,
  Zap,
  Filter,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("");

  interface UrlData {
    id: number;
    shortUrl: string;
    originalUrl: string;
    clicks: number;
    createdAt: string;
    status: "active" | "inactive" | "deleted";
  }

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "JD",
  };

  // Mock URLs data
  const [urls, setUrls] = useState<UrlData[]>([
    {
      id: 1,
      shortUrl: "short.ly/abc123",
      originalUrl: "https://example.com/very-long-url-that-needs-shortening",
      clicks: 1247,
      createdAt: "2025-10-01",
      status: "active",
    },
    {
      id: 2,
      shortUrl: "short.ly/xyz789",
      originalUrl: "https://github.com/username/repository-name",
      clicks: 856,
      createdAt: "2025-10-03",
      status: "active",
    },
    {
      id: 3,
      shortUrl: "short.ly/qwe456",
      originalUrl: "https://docs.example.com/documentation/getting-started",
      clicks: 432,
      createdAt: "2025-10-05",
      status: "active",
    },
  ]);

  // Stats
  const stats = {
    totalUrls: 24,
    totalClicks: 12847,
    avgClicksPerUrl: 535,
    activeUrls: 22,
  };

  const handleCreateUrl = () => {
    if (!newUrl) return;

    const randomId = Math.random().toString(36).substring(2, 8);

    const newShortUrl: UrlData = {
      id: urls.length + 1,
      shortUrl: customAlias
        ? `short.ly/${customAlias}`
        : `short.ly/${randomId}`,
      originalUrl: newUrl,
      clicks: 0,
      createdAt: new Date().toISOString().split("T")[0],
      status: "active",
    };

    setUrls([newShortUrl, ...urls]);
    setNewUrl("");
    setCustomAlias("");
  };

  const handleCopy = (id: number, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = (id: number) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  const filteredUrls = urls.filter((url) => {
    const matchesSearch =
      url.originalUrl.toLowerCase().includes(searchQuery.toLowerCase()) ||
      url.shortUrl.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === "all" || url.status === filterBy;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-800/95 backdrop-blur-xl border-r border-slate-700 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Link2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ShortIt
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-500/10 text-blue-400 rounded-xl transition-all">
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all">
              <Link2 className="w-5 h-5" />
              <span className="font-medium">My Links</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Analytics</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-xl transition-all">
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm">
                {user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {user.name}
                </p>
                <p className="text-xs text-slate-400 truncate">{user.email}</p>
              </div>
              <button className="text-slate-400 hover:text-white transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64 relative z-10">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-slate-400 hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-sm text-slate-400">
                  Manage your shortened URLs
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Link</span>
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Link2 className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                  +12%
                </span>
              </div>
              <p className="text-3xl font-bold text-white mb-1">
                {stats.totalUrls}
              </p>
              <p className="text-sm text-slate-400">Total URLs</p>
            </div>

            <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-purple-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MousePointer className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                  +8%
                </span>
              </div>
              <p className="text-3xl font-bold text-white mb-1">
                {stats.totalClicks.toLocaleString()}
              </p>
              <p className="text-sm text-slate-400">Total Clicks</p>
            </div>

            <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-pink-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-pink-400" />
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                  +5%
                </span>
              </div>
              <p className="text-3xl font-bold text-white mb-1">
                {stats.avgClicksPerUrl}
              </p>
              <p className="text-sm text-slate-400">Avg Clicks/URL</p>
            </div>

            <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-emerald-500/50 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-3xl font-bold text-white mb-1">
                {stats.activeUrls}
              </p>
              <p className="text-sm text-slate-400">Active URLs</p>
            </div>
          </div>

          {/* Create New URL Section */}
          <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
              <Plus className="w-5 h-5 text-blue-400" />
              <span>Create New Short URL</span>
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Destination URL
                </label>
                <input
                  type="url"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://example.com/your-long-url"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Custom Alias (Optional)
                </label>
                <div className="flex space-x-2">
                  <div className="flex-1 flex items-center bg-slate-700/50 border border-slate-600 rounded-xl px-4 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
                    <span className="text-slate-400 text-sm">short.ly/</span>
                    <input
                      type="text"
                      value={customAlias}
                      onChange={(e) => setCustomAlias(e.target.value)}
                      placeholder="my-custom-link"
                      className="flex-1 py-3 bg-transparent text-white placeholder-slate-400 focus:outline-none ml-1"
                    />
                  </div>
                  <button
                    onClick={handleCreateUrl}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* URLs List */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">Your URLs</h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1 sm:flex-initial">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search URLs..."
                      className="w-full sm:w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value)}
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="all">All URLs</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* URLs Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/30">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Short URL
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider hidden lg:table-cell">
                      Original URL
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Clicks
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider hidden sm:table-cell">
                      Created
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {filteredUrls.map((url) => (
                    <tr
                      key={url.id}
                      className="hover:bg-slate-700/30 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <code className="text-blue-400 font-mono text-sm">
                            {url.shortUrl}
                          </code>
                          <button
                            onClick={() => handleCopy(url.id, url.shortUrl)}
                            className="text-slate-400 hover:text-white transition-colors"
                          >
                            {copiedId === url.id ? (
                              <Check className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <div className="flex items-center space-x-2 max-w-md">
                          <Globe className="w-4 h-4 text-slate-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm truncate">
                            {url.originalUrl}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <MousePointer className="w-4 h-4 text-purple-400" />
                          <span className="text-white font-medium">
                            {url.clicks.toLocaleString()}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="flex items-center space-x-2 text-slate-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{url.createdAt}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all">
                            <BarChart3 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-all">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(url.id)}
                            className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredUrls.length === 0 && (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Link2 className="w-8 h-8 text-slate-400" />
                </div>
                <p className="text-slate-400">No URLs found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        ></div>
      )}
    </div>
  );
}
