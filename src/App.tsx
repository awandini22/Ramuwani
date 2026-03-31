import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Navbar, 
  Footer, 
  WhatsAppButton, 
  HomePage, 
  AboutPage, 
  ServicesPage, 
  MethodologyPage, 
  ContactPage 
} from './components/Layout';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
