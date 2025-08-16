'use client';

import { useState, useEffect } from 'react';

export default function AtlasPage() {
  /* ---------- client-only gate ---------- */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* ---------- form state ---------- */
  const [pwd, setPwd] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [customPosition, setCustomPosition] = useState('');
  const [department, setDepartment] = useState('');
  const [customDepartment, setCustomDepartment] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  

  

  /* ---------- handlers ---------- */
  const handleUnlock = () => setUnlocked(true);   // ✔️ no local check

  const handleSave = async () => {
    if (!email || !name || (!position && !customPosition) || (!department && !customDepartment)) {
      return setMsg('All fields are required');
    }
    const finalPosition = position === 'custom' ? customPosition : position;
    const finalDepartment = department === 'custom' ? customDepartment : department;

    setLoading(true);
    setMsg('');
    try {
      const res = await fetch('/api/atlas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: pwd, email, name, position: finalPosition, department: finalDepartment })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setMsg('Saved ✅');
      setEmail(''); setName(''); setPosition(''); setCustomPosition(''); setDepartment(''); setCustomDepartment('');
    } catch (e) {
      setMsg(`Error: ${e.message}`);
    }
    setLoading(false);
  };

  /* ---------- early return until client hydrated ---------- */
  if (!mounted) return null;

  /* ---------- unlock screen ---------- */
  if (!unlocked) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">
        <div className="w-full max-w-md bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
          <div className="flex flex-col items-center mb-8">
            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            <h1 className="text-2xl font-semibold text-white mb-1">Atlas Admin</h1>
            <p className="text-gray-400 text-sm">Administrative dashboard</p>
          </div>
          <div className="space-y-6">
            <input
              type="password"
              placeholder="Enter password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
              onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
            />
            <button onClick={handleUnlock} className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
              Unlock Dashboard
            </button>
            {msg && <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">{msg}</div>}
          </div>
        </div>
      </div>
    );
  }

  /* ---------- main dashboard ---------- */
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Atlas Admin</h1>
            <p className="text-gray-500">Add new organiser</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-500">Admin mode</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800">New Organiser</h2>
            <p className="text-gray-500 text-sm mt-1">Fill all fields below</p>
          </div>

          <div className="p-6 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email (Document ID)</label>
              <input
                type="email"
                placeholder="user@ds.study.iitm.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="">Select position</option>
                <option>Volunteer</option>
                <option>Co-ordinator</option>
                <option>Super-Coordinator</option>
                <option>Core</option>
                <option>Deputy Core</option>
                <option>Event Head</option>
                <option>Event Deputy Head</option>
                <option>Event Team</option>
                <option value="custom">Custom</option>
              </select>
              {position === 'custom' && (
                <input
                  type="text"
                  placeholder="Type custom position"
                  value={customPosition}
                  onChange={(e) => setCustomPosition(e.target.value)}
                  className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              )}
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition"
              >
                <option value="">Select department</option>
                <option>Outreach and Hospitality</option>
                <option>Technicals</option>
                <option>Sports</option>
                <option>Culturals</option>
                <option>Sponsership</option>
                <option>Central Events</option>
                <option value="custom">Custom</option>
              </select>
              {department === 'custom' && (
                <input
                  type="text"
                  placeholder="Type custom department"
                  value={customDepartment}
                  onChange={(e) => setCustomDepartment(e.target.value)}
                  className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
                />
              )}
            </div>
{/* Password */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">Admin Password</label>
  <input
    type="password"
    value={pwd}
    onChange={(e) => setPwd(e.target.value)}
    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
  />
</div>
            <button
              onClick={handleSave}
              disabled={loading}
              className={`w-full py-3 px-4 ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium rounded-lg transition flex items-center justify-center`}
            >
              {loading ? 'Saving…' : 'Save Organiser'}
            </button>

            {msg && (
              <div className={`px-4 py-3 rounded-lg text-sm border ${msg.includes('Error') ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'}`}>
                {msg}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}