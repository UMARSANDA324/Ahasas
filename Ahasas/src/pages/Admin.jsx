import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit3, Save, X, Image as ImageIcon, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import useProjectStore from '../store/projectStore';

const Admin = () => {
  const { projects, addProject, updateProject, deleteProject } = useProjectStore();
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: 'Ongoing Projects',
    status: 'In Progress',
    progress: 0,
    images: ['https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000'],
    featured: false
  });

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      updateProject(editingId, formData);
      setEditingId(null);
    } else {
      addProject(formData);
      setIsAdding(false);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      location: '',
      category: 'Ongoing Projects',
      status: 'In Progress',
      progress: 0,
      images: ['https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000'],
      featured: false
    });
  };

  const startEdit = (project) => {
    setEditingId(project.id);
    setFormData(project);
    setIsAdding(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-primary">Project Management</h1>
            <p className="text-text-light">Control and update your construction portfolio</p>
          </div>
          <button
            onClick={() => { setIsAdding(true); resetForm(); }}
            className="btn-secondary flex items-center gap-2 shadow-xl"
          >
            <Plus size={20} /> Add New Project
          </button>
        </div>

        {isAdding && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 mb-12"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-primary">{editingId ? 'Edit Project' : 'New Project'}</h2>
              <button onClick={() => setIsAdding(false)} className="text-gray-400 hover:text-red-500"><X size={24} /></button>
            </div>

            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase">Project Title</label>
                  <input
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase">Location</label>
                  <input
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase">Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="4"
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary"
                  ></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary"
                    >
                      <option>Ongoing Projects</option>
                      <option>Completed Projects</option>
                      <option>Before & After</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary"
                    >
                      <option>In Progress</option>
                      <option>Planning</option>
                      <option>Completed</option>
                      <option>On Hold</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase flex justify-between">
                    Progress <span>{formData.progress}%</span>
                  </label>
                  <input
                    type="range"
                    min="0" max="100"
                    value={formData.progress}
                    onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-secondary"
                  />
                </div>

                <div className="flex items-center gap-4 py-4">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-secondary focus:ring-secondary"
                  />
                  <label htmlFor="featured" className="font-bold text-primary">Feature on Home Page</label>
                </div>

                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                  <Save size={20} /> {editingId ? 'Update Project' : 'Save Project'}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <motion.div
              layout
              key={project.id}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8 group hover:shadow-xl transition-all"
            >
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex-grow space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  {project.featured && <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-secondary/20">Featured</span>}
                </div>
                <p className="text-sm text-text-light flex items-center gap-2">
                  <Clock size={14} className="text-gray-300" /> {project.category} • <span className="font-bold text-secondary">{project.status}</span>
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex-grow h-1.5 bg-gray-50 rounded-full overflow-hidden max-w-[200px]">
                    <div className="h-full bg-secondary" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <span className="text-xs font-bold text-primary">{project.progress}%</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => startEdit(project)}
                  className="p-3 bg-gray-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Edit3 size={20} />
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="p-3 bg-gray-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <AlertCircle size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary">No projects found</h3>
            <p className="text-gray-400">Start by adding your first construction project.</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Admin;
