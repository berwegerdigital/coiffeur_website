import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // WICHTIG: base: './' sorgt dafür, dass die Seite auf GitHub Pages (Unterordner) funktioniert
  base: './', 
  plugins: [react()]
});