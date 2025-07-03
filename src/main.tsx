// 🧙‍♂️ Hogwarts Entry Portal
import { createRoot } from 'react-dom/client'

// 🪄 Summoning the Main Spellbook (App)
import App from './App.tsx'

// 📜 Enchanted parchment styles
import './index.css'

// 🕯️ Casting the Root Charm
const rootElement = document.getElementById("root")!;
createRoot(rootElement).render(<App />);
