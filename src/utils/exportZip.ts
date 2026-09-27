import JSZip from 'jszip';

export async function downloadProjectZip() {
  const zip = new JSZip();

  // Root configuration files
  zip.file(
    'package.json',
    JSON.stringify(
      {
        name: 'unitconvert-hub',
        private: true,
        version: '1.0.0',
        type: 'module',
        scripts: {
          dev: 'vite --port=3000 --host=0.0.0.0',
          build: 'vite build',
          preview: 'vite preview',
          clean: 'rm -rf dist',
          lint: 'tsc --noEmit'
        },
        dependencies: {
          '@tailwindcss/vite': '^4.3.3',
          '@vitejs/plugin-react': '^6.1.1',
          'lucide-react': '^0.546.0',
          jszip: '^3.10.1',
          react: '^19.0.1',
          'react-dom': '^19.0.1',
          tailwindcss: '^4.3.3',
          vite: '^8.3.0'
        },
        devDependencies: {
          '@types/jszip': '^3.4.1',
          '@types/node': '^22.14.0',
          '@types/react': '^19.3.0',
          '@types/react-dom': '^19.3.0',
          typescript: '^7.0.2'
        }
      },
      null,
      2
    )
  );

  zip.file(
    'tsconfig.json',
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          experimentalDecorators: true,
          useDefineForClassFields: false,
          module: 'ESNext',
          types: ['vite/client'],
          lib: ['ES2022', 'DOM', 'DOM.Iterable'],
          skipLibCheck: true,
          moduleResolution: 'bundler',
          isolatedModules: true,
          moduleDetection: 'force',
          allowJs: true,
          jsx: 'react-jsx',
          paths: {
            '@/*': ['./*']
          },
          allowImportingTsExtensions: true,
          noEmit: true
        }
      },
      null,
      2
    )
  );

  zip.file(
    'vite.config.ts',
    `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    port: 3000,
  },
});
`
  );

  zip.file(
    'vercel.json',
    JSON.stringify(
      {
        $schema: 'https://openapi.vercel.sh/vercel.json',
        framework: 'vite',
        cleanUrls: true,
        trailingSlash: true,
        rewrites: [
          {
            source: '/(.*)',
            destination: '/index.html'
          }
        ]
      },
      null,
      2
    )
  );

  zip.file(
    '.env.example',
    `# UnitConvert Hub Environment Variables
# Optional custom API key for ExchangeRate-API (not required, defaults to free open public rates)
# VITE_EXCHANGE_RATE_API_KEY=""

# Canonical site base URL
VITE_SITE_URL="https://unitconverthub.com"
`
  );

  zip.file(
    '.gitignore',
    `node_modules/
dist/
.DS_Store
*.local
.env
`
  );

  zip.file(
    'README.md',
    `# UnitConvert Hub

> Simple Conversions. Clear Results.

A fast, clean, production-ready unit conversion website optimized for Google Search. Built with React 19, TypeScript, Vite, and Tailwind CSS.

## 🚀 Quick Start

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Run development server:
   \`\`\`bash
   npm run dev
   \`\`\`
   Visit [http://localhost:3000](http://localhost:3000)

3. Build for production:
   \`\`\`bash
   npm run build
   \`\`\`

## 🌐 Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com/new) and import your repo.
3. Vercel automatically detects the Vite framework settings:
   - **Framework Preset**: Vite
   - **Build Command**: \`npm run build\`
   - **Output Directory**: \`dist\`
   - **Install Command**: \`npm install\`
4. The included \`vercel.json\` automatically configures SPA routing and clean trailing slashes.

## 📊 Features & Converters

- **Weight**: Kilograms ↔ Pounds, Ounces ↔ Grams
- **Length**: Centimeters ↔ Inches, Feet ↔ Meters, Meters ↔ Kilometers
- **Temperature**: Celsius ↔ Fahrenheit
- **Time**: Minutes ↔ Hours, Seconds ↔ Minutes, Minutes ↔ Seconds
- **Volume**: Liters ↔ Gallons (with US Gallon vs Imperial Gallon selector)
- **Currency**: Live exchange rates for USD, EUR, GBP, CAD, AUD, JPY, CHF, CNY, INR, AED, SAR, DJF
- **SEO**: Unique titles, meta descriptions, canonical URLs, JSON-LD structured data, XML sitemap, and robots.txt.
`
  );

  // Generate blob and trigger browser download
  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'unitconvert-hub-complete-project.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
