import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Settings, Type, FileText, FileDown, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCMS } from '../context/CMSContext';

export function AdminLayout() {
  const location = useLocation();
  const { state, exportConfig } = useCMS();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Website Editor', path: '/admin/editor', icon: Type },
    { name: 'Content Manager', path: '/admin/content', icon: FileText },
    { name: 'Theme & Global', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex fixed h-full z-10">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <Link to="/" className="text-xl font-bold tracking-tight text-gray-900 truncate">
            {state.settings.companyName}
          </Link>
          <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-sm">CMS</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors",
                    isActive 
                      ? "bg-gray-100 text-gray-900" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className={cn("mr-3 h-5 w-5", isActive ? "text-gray-900" : "text-gray-400")} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <button 
            onClick={exportConfig}
            className="flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors w-full justify-center shadow-sm"
          >
            <FileDown className="mr-2 h-4 w-4" />
            Export Config
          </button>
          <Link 
            to="/"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors w-full justify-center"
          >
            <LogOut className="mr-2 h-4 w-4 text-gray-400" />
            Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden md:pl-64">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
          <h1 className="text-lg font-medium text-gray-900 capitalize">
            {location.pathname.split('/').pop() === 'admin' ? 'Dashboard' : location.pathname.split('/').pop()}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm">
              A
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
