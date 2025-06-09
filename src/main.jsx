import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SelectedSkipProvider } from './context/SelectedSkipContext';

createRoot(document.getElementById('root')).render(
  <SelectedSkipProvider>
    <App />
  </SelectedSkipProvider>
)
