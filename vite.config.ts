import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
// @ts-ignore
import linaria from '@linaria/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), linaria()],
  define: {
    'process.env': {},
  },
});
