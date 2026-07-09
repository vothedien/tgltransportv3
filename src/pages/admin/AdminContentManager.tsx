import React, { useState } from 'react';
import { useCMS } from '../../context/CMSContext';
import { Plus, Edit2, Trash2, Search, Filter } from 'lucide-react';
import { Article } from '../../types/cms';

export function AdminContentManager() {
  const { state, deleteArticle, addArticle, updateArticle } = useCMS();
  const { articles, categories } = state;
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  let filtered = articles;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(a => a.title.en.toLowerCase().includes(q) || a.title.vi.toLowerCase().includes(q));
  }
  if (filterCategory) {
    filtered = filtered.filter(a => a.categoryId === filterCategory);
  }
  if (filterStatus) {
    filtered = filtered.filter(a => a.status === filterStatus);
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      deleteArticle(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Manager</h2>
          <p className="text-sm text-gray-500 mt-1">Manage blog posts, articles, and pages.</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-sm font-medium hover:bg-gray-800 transition flex items-center shadow-sm">
          <Plus size={16} className="mr-2" />
          New Article
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 border border-gray-200 rounded-sm shadow-sm flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm text-sm focus:ring-black focus:border-black"
          />
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <div className="sm:w-48">
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-sm text-sm py-2 px-3 focus:ring-black focus:border-black"
          >
            <option value="">All Categories</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name.en}</option>
            ))}
          </select>
        </div>
        <div className="sm:w-48">
          <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full border border-gray-300 rounded-sm text-sm py-2 px-3 focus:ring-black focus:border-black"
          >
            <option value="">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filtered.map(article => {
              const category = categories.find(c => c.id === article.categoryId);
              return (
                <tr key={article.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-sm object-cover" src={article.imageUrl} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-bold text-gray-900 line-clamp-1">{article.title.en}</div>
                        <div className="text-xs text-gray-500">/{article.slug}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {category?.name.en || 'None'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(article.publishedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4"><Edit2 size={16} /></button>
                    <button onClick={() => handleDelete(article.id)} className="text-red-600 hover:text-red-900"><Trash2 size={16} /></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-gray-500">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
