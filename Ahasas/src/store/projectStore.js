import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useProjectStore = create(
  persist(
    (set) => ({
      projects: [
        {
          id: '1',
          title: 'Modern Residential Complex',
          description: 'A high-end residential development featuring luxury apartments with contemporary architectural aesthetics and sustainable infrastructure.',
          location: 'Kano, Nigeria',
          category: 'Completed Projects',
          status: 'Completed',
          progress: 100,
          images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200'],
          featured: true,
        },
        {
          id: '2',
          title: 'Urban Highway Expansion',
          description: 'A major infrastructure achievement involving road expansion, modern drainage systems, and structural bridge engineering for urban connectivity.',
          location: 'Abuja, Nigeria',
          category: 'Ongoing Projects',
          status: 'In Progress',
          progress: 65,
          images: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200'],
          featured: true,
        },
        {
          id: '3',
          title: 'Corporate Headquarters Modernization',
          description: 'Full-scale structural renovation and interior modernization of a high-rise corporate tower including advanced HVAC and electrical system upgrades.',
          location: 'Lagos, Nigeria',
          category: 'Before & After',
          status: 'Completed',
          progress: 100,
          images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'],
          featured: true,
        }
      ],
      addProject: (project) => set((state) => ({ 
        projects: [...state.projects, { ...project, id: Date.now().toString() }] 
      })),
      updateProject: (id, updatedProject) => set((state) => ({
        projects: state.projects.map((p) => p.id === id ? { ...p, ...updatedProject } : p)
      })),
      deleteProject: (id) => set((state) => ({
        projects: state.projects.filter((p) => p.id !== id)
      })),
    }),
    {
      name: 'ahasas-projects',
    }
  )
);

export default useProjectStore;
