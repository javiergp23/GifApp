import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import "../src/assets/style.css";

createRoot(document.getElementById('root')).render(
  <>
    <GifExpertApp />
 </>
)
