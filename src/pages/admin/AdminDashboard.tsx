import React from 'react';
import { useCMS } from '../../context/CMSContext';

export function AdminDashboard() {
  const { state } = useCMS();
  
  const stats = [
    { name: 'Total Sections', stat: '8' },
    { name: 'Active Languages', stat: '2' },
    { name: 'Services Listed', stat: state.services.items.length.toString() },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Welcome back, Admin</h2>
      
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>

      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/admin/editor" className="block p-4 border border-gray-200 rounded-md hover:border-black transition-colors">
            <h4 className="font-medium text-gray-900">Website Editor</h4>
            <p className="text-sm text-gray-500 mt-1">Edit homepage hero, services, and quick actions.</p>
          </a>
          <a href="/admin/settings" className="block p-4 border border-gray-200 rounded-md hover:border-black transition-colors">
            <h4 className="font-medium text-gray-900">Theme Settings</h4>
            <p className="text-sm text-gray-500 mt-1">Update colors, branding, and contact info.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
