import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// PWA icon sizes
const ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

// Base SVG content for the portfolio icon
const BASE_SVG = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="512" height="512" rx="80" fill="url(#grad1)"/>
  
  <!-- Letter M -->
  <path d="M120 140 L200 300 L280 140 L360 300 L360 140 L320 140 L280 200 L240 140 L200 200 L160 140 L120 140 Z" 
        fill="white" opacity="0.9"/>
  
  <!-- Portfolio icon -->
  <rect x="180" y="320" width="152" height="120" rx="12" fill="white" opacity="0.8"/>
  <rect x="200" y="340" width="112" height="8" rx="4" fill="#3B82F6"/>
  <rect x="200" y="360" width="80" height="8" rx="4" fill="#8B5CF6"/>
  <rect x="200" y="380" width="96" height="8" rx="4" fill="#3B82F6"/>
  <rect x="200" y="400" width="64" height="8" rx="4" fill="#8B5CF6"/>
  <rect x="200" y="420" width="88" height="8" rx="4" fill="#3B82F6"/>
</svg>
`;

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate SVG files for each size
ICON_SIZES.forEach(size => {
  const svgContent = BASE_SVG.replace(/width="512"/, `width="${size}"`).replace(/height="512"/, `height="${size}"`);
  const svgPath = path.join(iconsDir, `icon-${size}x${size}.svg`);
  
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Generated SVG icon: icon-${size}x${size}.svg`);
});

// Create a simple PNG placeholder (base64 encoded minimal PNG)
const MINIMAL_PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');

ICON_SIZES.forEach(size => {
  const pngPath = path.join(iconsDir, `icon-${size}x${size}.png`);
  fs.writeFileSync(pngPath, MINIMAL_PNG);
  console.log(`Generated PNG placeholder: icon-${size}x${size}.png`);
});

console.log('\nPWA icons generated successfully!');
console.log('Note: The PNG files are minimal placeholders.');
console.log('For production, replace them with actual high-quality PNG icons.');
console.log('You can use tools like:');
console.log('- https://realfavicongenerator.net/');
console.log('- https://www.pwabuilder.com/imageGenerator');
console.log('- https://favicon.io/'); 