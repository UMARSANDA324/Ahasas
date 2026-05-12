import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import img02 from '../assets/images/02.jpg';
import img03 from '../assets/images/03.jpg';
import img04 from '../assets/images/04.jpg';
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
          title: 'Premium Residential Site',
          description: 'A major residential project featuring world-class structural engineering and modern architectural finishes.',
          location: 'Kano, Nigeria',
          category: 'Completed Projects',
          status: 'Completed',
          progress: 100,
          images: [img02],
          featured: true,
        },
        {
          id: '2',
          title: 'Infrastructure Development',
          description: 'Large-scale civil engineering works focusing on robust foundation systems and structural integrity.',
          location: 'Nigeria',
          category: 'Ongoing Projects',
          status: 'In Progress',
          progress: 85,
          images: [img03],
          featured: true,
        },
        {
          id: '3',
          title: 'Commercial Complex Hub',
          description: 'Modern commercial structure designed for high-density usage with premium materials and precision planning.',
          location: 'Nigeria',
          category: 'Completed Projects',
          status: 'Completed',
          progress: 100,
          images: [img04],
          featured: true,
        },
        {
          id: '4',
          title: 'State Hospital Wing Construction',
          description: 'Construction of a new multi-story hospital wing equipped with modern medical facilities and specialized structural engineering for healthcare.',
          location: '',
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
          location: '',
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
          location: '',
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

