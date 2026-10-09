import fs from 'node:fs';
import path from 'node:path';

const routes = [
  'kilograms-to-pounds',
  'pounds-to-kilograms',
  'ounces-to-grams',
  'grams-to-ounces',
  'centimeters-to-inches',
  'inches-to-centimeters',
  'feet-to-meters',
  'meters-to-feet',
  'meters-to-kilometers',
  'kilometers-to-meters',
  'celsius-to-fahrenheit',
  'fahrenheit-to-celsius',
  'minutes-to-hours',
  'hours-to-minutes',
  'seconds-to-minutes',
  'minutes-to-seconds',
  'liters-to-gallons',
  'gallons-to-liters',
  'currency-converter',
  'about',
  'contact',
  'privacy-policy',
  'terms',
  'disclaimer'
];

export function generateStaticRoutesPlugin() {
  return {
    name: 'generate-static-routes',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const indexPath = path.join(distDir, 'index.html');

      if (!fs.existsSync(indexPath)) {
        return;
      }

      const indexHtml = fs.readFileSync(indexPath, 'utf8');

      // 1. Create a 404.html page for static hosting fallbacks
      fs.writeFileSync(path.join(distDir, '404.html'), indexHtml);

      // 2. Pre-generate physical directory structure for every known route
      //    e.g. dist/kilograms-to-pounds/index.html AND dist/kilograms-to-pounds.html
      //    This guarantees HTTP 200 on every web server, CDN, or static host
      //    (Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3, Apache, Nginx)
      for (const route of routes) {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
        fs.writeFileSync(path.join(distDir, `${route}.html`), indexHtml);
      }

      console.log(`[generate-static-routes] Pre-rendered static endpoints for ${routes.length} routes + 404.html`);
    }
  };
}
