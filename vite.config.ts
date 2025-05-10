
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      // Специальные настройки для работы в среде Poehali
      clientPort: 443, // Используем HTTPS порт для WebSocket
      protocol: 'wss', // Используем защищенный WebSocket
      host: 'preview--fresh-touch-cleaning-1.poehali.dev', // Используем актуальный хост
      overlay: false // Отключаем оверлей ошибок
    },
    // Разрешаем запросы с любых хостов
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
});
