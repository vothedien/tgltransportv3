import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CMSProvider } from './context/CMSContext';
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';

import { HomePage } from './pages/public/HomePage';
import { BlogPage } from './pages/public/BlogPage';
import { BlogPostPage } from './pages/public/BlogPostPage';
import { CompanyNewsPage } from './pages/public/CompanyNewsPage';
import { NewsPostPage } from './pages/public/NewsPostPage';
import { DynamicPage } from './pages/public/DynamicPage';
import { FAQPage } from './pages/public/FAQPage';

import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminEditor } from './pages/admin/AdminEditor';
import { AdminSettings } from './pages/admin/AdminSettings';
import { AdminContentManager } from './pages/admin/AdminContentManager';

export default function App() {
  return (
    <CMSProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="company-news" element={<CompanyNewsPage />} />
            <Route path="company-news/:slug" element={<NewsPostPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="*" element={<DynamicPage />} />
          </Route>

          {/* Admin Routes - Only available in development mode */}
          {import.meta.env.DEV && (
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="editor" element={<AdminEditor />} />
              <Route path="content" element={<AdminContentManager />} />
              <Route path="sections" element={<div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">Sections manager (Drag & drop functionality to be implemented)</div>} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          )}

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CMSProvider>
  );
}
