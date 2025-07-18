import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/index.js';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
