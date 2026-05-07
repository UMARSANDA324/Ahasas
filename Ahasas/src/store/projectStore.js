import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useProjectStore = create(
  persist(
    (set) => ({
      projects: [
        {
          id: '1',
          title: 'Modern Residential Complex',
          description: 'A high-end residential development featuring 20 luxury apartments with modern amenities.',
          location: 'Kano, Nigeria',
          category: 'Completed Projects',
          status: 'Completed',
          progress: 100,
          images: ['https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000'],
          featured: true,
        },
        {
          id: '2',
          title: 'Urban Highway Expansion',
          description: 'Critical infrastructure project involving the expansion of the main arterial road connecting the city center.',
          location: 'Abuja, Nigeria',
          category: 'Ongoing Projects',
          status: 'In Progress',
          progress: 65,
          images: ['https://images.unsplash.com/photo-1590486803833-ffc4701248a7?auto=format&fit=crop&q=80&w=1000'],
          featured: true,
        },
        {
          id: '3',
          title: 'Corporate Headquarters Reno',
          description: 'Complete renovation and modernization of a 10-story corporate building.',
          location: 'Lagos, Nigeria',
          category: 'Before & After',
          status: 'Completed',
          progress: 100,
          images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000'],
          featured: false,
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
