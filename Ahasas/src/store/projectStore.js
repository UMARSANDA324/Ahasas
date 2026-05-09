import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import img1 from '../assets/images/Gemini_Generated_Image_6hb6xt6hb6xt6hb6 (2).png';
import img2 from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (6).png';
import img3 from '../assets/images/Gemini_Generated_Image_6hb6xt6hb6xt6hb6 (4).png';
import img4 from '../assets/images/Gemini_Generated_Image_6hb6xt6hb6xt6hb6.png';
import img5 from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (3).png';
import img6 from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (5).png';

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
          images: [img4],
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
          images: [img2],
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
          images: [img3],
          featured: true,
        },
        {
          id: '4',
          title: 'State Hospital Wing Construction',
          description: 'Construction of a new multi-story hospital wing equipped with modern medical facilities and specialized structural engineering for healthcare.',
          location: 'Kaduna, Nigeria',
          category: 'Ongoing Projects',
          status: 'In Progress',
          progress: 45,
          images: [img1],
          featured: false,
        },
        {
          id: '5',
          title: 'Smart Office Landmark',
          description: 'A state-of-the-art office building featuring glass facade engineering, automated systems, and sustainable energy solutions.',
          location: 'Port Harcourt, Nigeria',
          category: 'Completed Projects',
          status: 'Completed',
          progress: 100,
          images: [img5],
          featured: false,
        },
        {
          id: '6',
          title: 'Industrial Warehouse Facility',
          description: 'Large-scale industrial warehouse construction with reinforced structural steel and heavy-duty flooring for logistical operations.',
          location: 'Ibadan, Nigeria',
          category: 'Ongoing Projects',
          status: 'In Progress',
          progress: 80,
          images: [img6],
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
      name: 'ahasas-projects-v3', // Changed name to bust old cache
    }
  )
);

export default useProjectStore;

