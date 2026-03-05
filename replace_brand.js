const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'public/manifest.json',
    'app/layout.tsx',
    'app/services/page.tsx',
    'app/page.tsx',
    'app/careers/page.tsx',
    'app/about/page.tsx',
    'components/Footer.tsx',
    'components/Navbar.tsx'
];

filesToUpdate.forEach(file => {
    const fullPath = path.join('d:/Desktop/Snaplessons', file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        // Replace "SnapLessons" or "snapLessons" with "snaplessons"
        // using a regex that ignores if it's followed by 'Logo'
        content = content.replace(/(?<!\w)(SnapLessons|snapLessons)(?!Logo\b)/g, 'snaplessons');
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`File not found: ${file}`);
    }
});
