import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Fish, Info, FileText, ExternalLink, Anchor, Waves, AlertCircle } from 'lucide-react';

// --- Components ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-sky-800 text-white shadow-lg sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Fish className="w-8 h-8" />
            <span className="hidden sm:inline">Keystone Native Fish</span>
          </Link>
          <div className="flex gap-4 sm:gap-8">
            <Link to="/" className={`nav-link flex items-center gap-1 ${location.pathname === '/' ? 'text-sky-300' : ''}`}>
              <Anchor className="w-4 h-4" /> Home
            </Link>
            <Link to="/species" className={`nav-link flex items-center gap-1 ${location.pathname === '/species' ? 'text-sky-300' : ''}`}>
              <Waves className="w-4 h-4" /> Species
            </Link>
            <Link to="/report" className={`nav-link flex items-center gap-1 ${location.pathname === '/report' ? 'text-sky-300' : ''}`}>
              <FileText className="w-4 h-4" /> Report
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer id="main-footer">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm">© {new Date().getFullYear()} Keystone Native Fish Guide. IT105 Signature Assignment.</p>
          <div className="mt-4 flex justify-center gap-6">
             {/* Requirement: 3 Hypertext references to outside sources */}
            <a href="https://www.fishandboat.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-sky-300">
              PAFBC <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.usgs.gov" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-sky-300">
              USGS <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.nature.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-sky-300">
              The Nature Conservancy <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-sky-900 mb-6 font-serif">Deep Into the Keystone State's Waters</h1>
        <p className="text-lg text-sky-700 max-w-2xl mx-auto">
          Pennsylvania is home to over 160 species of fish. From the cold mountain streams harboring the Brook Trout to the winding rivers where Smallmouth Bass thrive, our aquatic biodiversity is a treasure.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img 
          src="/USACE_Raystown_Lake_Dam.jpg" 
          alt="Pennsylvania river environment" 
          className="rounded-2xl shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div>
          <h2 className="text-3xl font-bold text-sky-800 mb-4">Conservation Stewardship</h2>
          {/* Requirement: 1 List */}
          <ul className="space-y-4 text-sky-900">
            <li className="flex items-start gap-2">
              <Info className="w-5 h-5 text-sky-500 mt-1 shrink-0" />
              <span><strong>Clean Gear:</strong> Always wash your boats and equipment to prevent the spread of invasive species like DIDYMO.</span>
            </li>
            <li className="flex items-start gap-2">
              <Info className="w-5 h-5 text-sky-500 mt-1 shrink-0" />
              <span><strong>Catch & Release:</strong> Use barbless hooks and handle fish with wet hands to increase survival rates.</span>
            </li>
            <li className="flex items-start gap-2">
              <Info className="w-5 h-5 text-sky-500 mt-1 shrink-0" />
              <span><strong>Habitat Protection:</strong> Stay on designated paths to avoid eroding river banks where fish spawn.</span>
            </li>
            <li className="flex items-start gap-2">
              <Info className="w-5 h-5 text-sky-500 mt-1 shrink-0" />
              <span><strong>Licensing:</strong> Your license fees directly fund Pennsylvania's conservation and hatchery programs.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const SpeciesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-sky-900 mb-8 border-b pb-4">Native Fish Directory</h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Requirement: 4 Image(s) */}
        <div className="fish-card">
          <img src="/Brook_Trout.jpg" alt="Brook Trout" className="w-full h-40 object-cover rounded-lg mb-2" referrerPolicy="no-referrer" />
          <h3 className="font-bold">Brook Trout</h3>
          <p className="text-xs text-sky-600">The State Fish of PA</p>
        </div>
        <div className="fish-card">
          <img src="/Smallmouth_bass.jpg" alt="Smallmouth Bass" className="w-full h-40 object-cover rounded-lg mb-2" referrerPolicy="no-referrer" />
          <h3 className="font-bold">Smallmouth Bass</h3>
          <p className="text-xs text-sky-600">Legend of the Susquehanna</p>
        </div>
        <div className="fish-card">
          <img src="/Walley.jpg" alt="Walleye" className="w-full h-40 object-cover rounded-lg mb-2" referrerPolicy="no-referrer" />
          <h3 className="font-bold">Walleye</h3>
          <p className="text-xs text-sky-600">Deep Water Predator</p>
        </div>
        <div className="fish-card">
          <img src="/Musky.jpg" alt="Musky" className="w-full h-40 object-cover rounded-lg mb-2" referrerPolicy="no-referrer" />
          <h3 className="font-bold">Muskellunge</h3>
          <p className="text-xs text-sky-600">Fish of Ten Thousand Casts</p>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        {/* Requirement: 1 Table */}
        <table className="w-full text-left">
          <thead className="bg-sky-100 text-sky-900 border-b">
            <tr>
              <th className="p-4 font-bold">Common Name</th>
              <th className="p-4 font-bold">Scientific Name</th>
              <th className="p-4 font-bold">Habitat</th>
              <th className="p-4 font-bold">PA Record</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sky-800">
            <tr className="hover:bg-sky-50 transition-colors">
              <td className="p-4">Brook Trout</td>
              <td className="p-4 italic">Salvelinus fontinalis</td>
              <td className="p-4">Cold mountain streams</td>
              <td className="p-4">7 lbs, 0 oz.</td>
            </tr>
            <tr className="hover:bg-sky-50 transition-colors">
              <td className="p-4">Smallmouth Bass</td>
              <td className="p-4 italic">Micropterus dolomieu</td>
              <td className="p-4">Large rivers (Susquehanna, Delaware)</td>
              <td className="p-4">8 lbs, 8 oz.</td>
            </tr>
            <tr className="hover:bg-sky-50 transition-colors">
              <td className="p-4">Walleye</td>
              <td className="p-4 italic">Sander vitreus</td>
              <td className="p-4">Deep lakes & river pools</td>
              <td className="p-4">17 lbs, 9 oz.</td>
            </tr>
            <tr className="hover:bg-sky-50 transition-colors">
              <td className="p-4">Channel Catfish</td>
              <td className="p-4 italic">Ictalurus punctatus</td>
              <td className="p-4">Large lakes & muddy rivers</td>
              <td className="p-4">35 lbs, 8 oz.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ReportPage = () => {
  const [formData, setFormData] = useState({
    fishName: '',
    agreed: false,
    location: 'Susquehanna'
  });
  
  const consoleRef = useRef<HTMLDivElement>(null);

  // --- Requirement: At least three Javascript functions ---
  
  // Function 1: Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Function 2: Logic with if-then-else
  const getRecommendation = (location: string) => {
    // Requirement: At least one if-then-else statement
    if (location === 'Susquehanna') {
      return "Strong current! Use heavy sinkers.";
    } else if (location === 'Delaware') {
      return "Tidal waters. Check the charts!";
    } else {
      return "Ideal for light tackle.";
    }
  };

  // Function 3: Update page using innerHTML
  // Requirement: Update at least one page using innerHTML
  const updateConsole = (message: string) => {
    if (consoleRef.current) {
      consoleRef.current.innerHTML = `<span class="text-green-500 font-mono text-sm">SYSTEM LOG: ${message}</span>`;
    }
  };

  // --- Requirement: At least two different events ---
  // Event 1: Form Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fishName) {
      updateConsole("Error: Please enter a species name.");
      return;
    }
    updateConsole(`Report Submitted for ${formData.fishName} in ${formData.location}!`);
  };

  // Event 2: Form Reset
  const handleReset = () => {
    setFormData({ fishName: '', agreed: false, location: 'Susquehanna' });
    updateConsole("Form cleared and reset.");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-sky-100">
        <h2 className="text-3xl font-bold text-sky-900 mb-6">Citizen Science Tool</h2>
        <p className="text-sky-600 mb-8">Report your native species sightings to help PA Fish & Boat Commission tracking.</p>

        {/* Requirement: 1 Form with specifically: 
            input type=text, input type=checkbox, input type=radio, button type=reset, button type=submit 
        */}
        <form onSubmit={handleSubmit} onReset={handleReset} className="report-form space-y-6">
          <div>
            <label className="block text-sm font-bold text-sky-800 mb-2">Fish Species Name</label>
            {/* Requirement: Use the value of an HTML input type=text field */}
            <input 
              type="text" 
              name="fishName"
              value={formData.fishName}
              onChange={handleInputChange}
              placeholder="e.g. Bluegill" 
              className="border-2 border-sky-100 rounded-lg p-2 focus:border-sky-500 outline-none w-full"
            />
          </div>

          <div className="flex gap-4 items-center">
             <label className="block text-sm font-bold text-sky-800">Observation Location:</label>
             <label className="flex items-center gap-2 text-sm text-sky-700">
                <input 
                  type="radio" 
                  name="location" 
                  value="Susquehanna" 
                  checked={formData.location === 'Susquehanna'}
                  onChange={handleInputChange}
                /> Susquehanna River
             </label>
             <label className="flex items-center gap-2 text-sm text-sky-700">
                <input 
                  type="radio" 
                  name="location" 
                  value="Delaware" 
                  checked={formData.location === 'Delaware'}
                  onChange={handleInputChange}
                /> Delaware River
             </label>
             <label className="flex items-center gap-2 text-sm text-sky-700">
                <input 
                  type="radio" 
                  name="location" 
                  value="Lake Erie" 
                  checked={formData.location === 'Lake Erie'}
                  onChange={handleInputChange}
                /> Lake Erie
             </label>
          </div>

          <div className="bg-sky-50 p-4 rounded-lg flex items-center gap-3">
            <AlertCircle className="text-sky-500 w-5 h-5 shrink-0" />
            <span className="text-xs text-sky-700 italic">{getRecommendation(formData.location)}</span>
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              name="agreed"
              checked={formData.agreed}
              onChange={handleInputChange}
              className="w-4 h-4 text-sky-600 rounded" 
            />
            <label className="text-sm text-sky-800">I verify that this photo/sighting occurred in Pennsylvania waters.</label>
          </div>

          <div className="flex gap-4 pt-4">
            <button 
              type="submit" 
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Submit Report
            </button>
            <button 
              type="reset" 
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer"
            >
              Reset Form
            </button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-sky-100">
          <h3 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">Live Console Output</h3>
          <div 
            ref={consoleRef}
            className="bg-slate-900 rounded-lg p-4 min-h-[50px] flex items-center"
          >
            <span className="text-slate-500 font-mono text-sm italic">Awating activity...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/species" element={<SpeciesPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
