import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

// Pages
const Landing = lazy(() => import('./pages/Landing'));
const Admin = lazy(() => import('./pages/Admin'));
const Profile = lazy(() => import('./pages/Profile'));

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-primary">
    <div className="relative">
      <div className="h-24 w-24 border-4 border-secondary rounded-full border-t-transparent animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs">AHASAS</div>
    </div>
  </div>
);

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Single Page Experience */}
              <Route path="/" element={<Landing />} />

              {/* Admin Dashboard */}
              <Route path="/admin" element={<Admin />} />

              {/* Company Profile */}
              <Route path="/profile" element={<Profile />} />

              {/* Redirects for legacy routes */}
              <Route path="/about" element={<Navigate to="/" state={{ scrollTo: 'about' }} replace />} />
              <Route path="/services" element={<Navigate to="/" state={{ scrollTo: 'services' }} replace />} />
              <Route path="/projects" element={<Navigate to="/" state={{ scrollTo: 'projects' }} replace />} />
              <Route path="/management" element={<Navigate to="/" state={{ scrollTo: 'management' }} replace />} />
              <Route path="/contact" element={<Navigate to="/" state={{ scrollTo: 'contact' }} replace />} />

              {/* Common home aliases */}
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/Home" element={<Navigate to="/" replace />} />

              {/* Catch-all route to redirect back home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
