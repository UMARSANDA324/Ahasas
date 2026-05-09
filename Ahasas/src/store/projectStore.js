import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import buildingImg from '../assets/images/01.png';
import civilImg from '../assets/images/Gemini_Generated_Image_6hb6xt6hb6xt6hb6.png';
import renovationImg from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (1).png';

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
          images: [buildingImg],
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
          images: [civilImg],
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
          images: [renovationImg],
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
