import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { Save } from 'lucide-react';
import { LocalizedString } from '../../types/cms';

export function AdminEditor() {
  const { state, updateHero, updateAbout } = useCMS();
  const [activeTab, setActiveTab] = React.useState('hero');
  
  // Local state for forms
  const [heroForm, setHeroForm] = React.useState(state.hero);
  const [aboutForm, setAboutForm] = React.useState(state.about);
  
  const handleSaveHero = () => {
    updateHero(heroForm);
    alert('Hero section updated successfully!');
  };

  const handleSaveAbout = () => {
    updateAbout(aboutForm);
    alert('About section updated successfully!');
  };

  const tabs = [
    { id: 'hero', label: 'Hero' },
    { id: 'quick_actions', label: 'Quick Actions' },
    { id: 'about', label: 'About' },
    { id: 'stats_counter', label: 'Stats Counter' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Fleet' },
    { id: 'why_choose_us', label: 'Why Choose Us' },
    { id: 'global_network', label: 'Global Network' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'partners', label: 'Partners' },
    { id: 'news', label: 'News' },
    { id: 'faq', label: 'FAQ' },
    { id: 'newsletter', label: 'Newsletter' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Website Editor</h2>
          <p className="mt-1 text-sm text-gray-500">Manage your website content across languages.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Vertical Tabs */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50 p-4">
          <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-black shadow-sm border border-gray-200'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Hero Section</h3>
                <div className="flex items-center">
                  <label className="flex items-center cursor-pointer">
                    <span className="mr-3 text-sm font-medium text-gray-700">Visible</span>
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={heroForm.visible}
                      onChange={(e) => setHeroForm({...heroForm, visible: e.target.checked})}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-gray-700 border-b pb-2">English Content</h4>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input 
                      type="text" 
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                      value={heroForm.title.en}
                      onChange={(e) => setHeroForm({...heroForm, title: { ...heroForm.title, en: e.target.value }})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                    <textarea 
                      rows={3}
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                      value={heroForm.subtitle.en}
                      onChange={(e) => setHeroForm({...heroForm, subtitle: { ...heroForm.subtitle, en: e.target.value }})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CTA Button Text</label>
                    <input 
                      type="text" 
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                      value={heroForm.ctaText.en}
                      onChange={(e) => setHeroForm({...heroForm, ctaText: { ...heroForm.ctaText, en: e.target.value }})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-sm text-gray-700 border-b pb-2">Vietnamese Content</h4>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title (Tiêu đề)</label>
                    <input 
                      type="text" 
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                      value={heroForm.title.vi}
                      onChange={(e) => setHeroForm({...heroForm, title: { ...heroForm.title, vi: e.target.value }})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle (Mô tả)</label>
                    <textarea 
                      rows={3}
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                      value={heroForm.subtitle.vi}
                      onChange={(e) => setHeroForm({...heroForm, subtitle: { ...heroForm.subtitle, vi: e.target.value }})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CTA Text (Nút bấm)</label>
                    <input 
                      type="text" 
                      className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                      value={heroForm.ctaText.vi}
                      onChange={(e) => setHeroForm({...heroForm, ctaText: { ...heroForm.ctaText, vi: e.target.value }})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Background Image URL</label>
                <div className="flex rounded-md shadow-sm">
                  <input 
                    type="text" 
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-black focus:border-black sm:text-sm border-gray-300 border"
                    value={heroForm.backgroundImage}
                    onChange={(e) => setHeroForm({...heroForm, backgroundImage: e.target.value})}
                  />
                </div>
                {heroForm.backgroundImage && (
                  <div className="mt-4 h-48 w-full max-w-lg rounded-md overflow-hidden border border-gray-200">
                    <img src={heroForm.backgroundImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="pt-5 border-t border-gray-200">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleSaveHero}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'about' && (
             <div className="space-y-6">
               <div className="flex items-center justify-between">
                 <h3 className="text-lg font-medium text-gray-900">About Section</h3>
                 <div className="flex items-center">
                   <label className="flex items-center cursor-pointer">
                     <span className="mr-3 text-sm font-medium text-gray-700">Visible</span>
                     <input 
                       type="checkbox" 
                       className="sr-only peer" 
                       checked={aboutForm.visible}
                       onChange={(e) => setAboutForm({...aboutForm, visible: e.target.checked})}
                     />
                     <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                   </label>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* English */}
                 <div className="space-y-4">
                    <h4 className="font-medium text-sm text-gray-700 border-b pb-2">English Content</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input 
                        type="text" 
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 sm:text-sm"
                        value={aboutForm.title.en}
                        onChange={(e) => setAboutForm({...aboutForm, title: { ...aboutForm.title, en: e.target.value }})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                      <input 
                        type="text" 
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 sm:text-sm"
                        value={aboutForm.subtitle.en}
                        onChange={(e) => setAboutForm({...aboutForm, subtitle: { ...aboutForm.subtitle, en: e.target.value }})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea 
                        rows={4}
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 sm:text-sm"
                        value={aboutForm.description.en}
                        onChange={(e) => setAboutForm({...aboutForm, description: { ...aboutForm.description, en: e.target.value }})}
                      />
                    </div>
                 </div>

                 {/* Vietnamese */}
                 <div className="space-y-4">
                    <h4 className="font-medium text-sm text-gray-700 border-b pb-2">Vietnamese Content</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title (Tiêu đề)</label>
                      <input 
                        type="text" 
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 sm:text-sm"
                        value={aboutForm.title.vi}
                        onChange={(e) => setAboutForm({...aboutForm, title: { ...aboutForm.title, vi: e.target.value }})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle (Mô tả ngắn)</label>
                      <input 
                        type="text" 
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 sm:text-sm"
                        value={aboutForm.subtitle.vi}
                        onChange={(e) => setAboutForm({...aboutForm, subtitle: { ...aboutForm.subtitle, vi: e.target.value }})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description (Nội dung)</label>
                      <textarea 
                        rows={4}
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 sm:text-sm"
                        value={aboutForm.description.vi}
                        onChange={(e) => setAboutForm({...aboutForm, description: { ...aboutForm.description, vi: e.target.value }})}
                      />
                    </div>
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                 <input 
                   type="text" 
                   className="block w-full px-3 py-2 rounded-md sm:text-sm border-gray-300 border"
                   value={aboutForm.imageUrl}
                   onChange={(e) => setAboutForm({...aboutForm, imageUrl: e.target.value})}
                 />
                 {aboutForm.imageUrl && (
                    <div className="mt-4 h-48 w-full max-w-lg rounded-md overflow-hidden border border-gray-200">
                      <img src={aboutForm.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
               </div>

               <div className="pt-5 border-t border-gray-200">
                 <div className="flex justify-end">
                   <button
                     type="button"
                     onClick={handleSaveAbout}
                     className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                   >
                     <Save className="h-4 w-4 mr-2" />
                     Save Changes
                   </button>
                 </div>
               </div>
             </div>
          )}

          {activeTab !== 'hero' && activeTab !== 'about' && (
            <div className="py-24 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Editor for {activeTab.replace('_', ' ')}</h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                This section editor is currently in development. You will be able to edit array items (like lists of services, fleet items, FAQs) here soon.
              </p>
              <p className="text-sm text-gray-400 mt-4 bg-yellow-50 p-3 rounded-md inline-block border border-yellow-100">
                Data is fully structured in <code className="font-mono text-xs text-yellow-800">src/context/CMSContext.tsx</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
