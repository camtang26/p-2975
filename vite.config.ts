import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Content-Security-Policy': `
        default-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
        script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://player.vimeo.com https://f.vimeocdn.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https: https://www.google-analytics.com https://i.vimeocdn.com;
        font-src 'self' data: https:;
        connect-src 'self' https: https://www.google-analytics.com https://*.vimeo.com;
        frame-src 'self' https://*.elevenlabs.io https://player.vimeo.com https://*.vimeocdn.com;
      `.replace(/\s+/g, ' ').trim()
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));