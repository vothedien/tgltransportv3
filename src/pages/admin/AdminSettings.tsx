import React from 'react';
import { useCMS } from '../../context/CMSContext';
import { Save } from 'lucide-react';

export function AdminSettings() {
  const { state, updateTheme, updateSettings } = useCMS();
  
  const [themeForm, setThemeForm] = React.useState(state.theme);
  const [settingsForm, setSettingsForm] = React.useState(state.settings);

  const handleSave = () => {
    updateTheme(themeForm);
    updateSettings(settingsForm);
    alert('Settings updated successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Theme & Settings</h2>
        <p className="mt-1 text-sm text-gray-500">Configure global colors, typography, and company information.</p>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-6 space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 border-b border-gray-100 pb-2 mb-4">Design Variables</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
              <div className="flex items-center space-x-3">
                <input 
                  type="color" 
                  value={themeForm.primaryColor}
                  onChange={(e) => setThemeForm({...themeForm, primaryColor: e.target.value})}
                  className="h-10 w-10 border-0 p-0 rounded cursor-pointer shrink-0"
                />
                <input 
                  type="text" 
                  value={themeForm.primaryColor}
                  onChange={(e) => setThemeForm({...themeForm, primaryColor: e.target.value})}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-black focus:border-black"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
              <div className="flex items-center space-x-3">
                <input 
                  type="color" 
                  value={themeForm.secondaryColor}
                  onChange={(e) => setThemeForm({...themeForm, secondaryColor: e.target.value})}
                  className="h-10 w-10 border-0 p-0 rounded cursor-pointer shrink-0"
                />
                <input 
                  type="text" 
                  value={themeForm.secondaryColor}
                  onChange={(e) => setThemeForm({...themeForm, secondaryColor: e.target.value})}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-black focus:border-black"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Border Radius</label>
              <select 
                value={themeForm.borderRadius}
                onChange={(e) => setThemeForm({...themeForm, borderRadius: e.target.value})}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2.5 px-3 text-sm focus:ring-black focus:border-black"
              >
                <option value="0px">0px (Square)</option>
                <option value="0.25rem">4px (Small)</option>
                <option value="0.5rem">8px (Medium)</option>
                <option value="1rem">16px (Large)</option>
                <option value="9999px">Pill</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 border-b border-gray-100 pb-2 mb-4">Company Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
              <input 
                type="text" 
                value={settingsForm.companyName}
                onChange={(e) => setSettingsForm({...settingsForm, companyName: e.target.value})}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
              <input 
                type="email" 
                value={settingsForm.email}
                onChange={(e) => setSettingsForm({...settingsForm, email: e.target.value})}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                type="text" 
                value={settingsForm.phone}
                onChange={(e) => setSettingsForm({...settingsForm, phone: e.target.value})}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Logo URL</label>
              <input 
                type="text" 
                value={settingsForm.logoUrl}
                onChange={(e) => setSettingsForm({...settingsForm, logoUrl: e.target.value})}
                className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-end border-t border-gray-100">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <Save className="h-4 w-4 mr-2" />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
