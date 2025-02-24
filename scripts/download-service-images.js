const https = require('https');
const fs = require('fs');
const path = require('path');

const serviceImages = [
  {
    name: 'web-development.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  },
  {
    name: 'ai-integration.jpg',
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
  },
  {
    name: 'mobile-apps.jpg',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80',
  },
  {
    name: 'custom-software.jpg',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
  },
];

// Create the services images directory if it doesn't exist
const servicesDir = path.join(__dirname, '..', 'public', 'images', 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// Download each image
serviceImages.forEach((image) => {
  const imagePath = path.join(servicesDir, image.name);
  
  https.get(image.url, (response) => {
    const fileStream = fs.createWriteStream(imagePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${image.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${image.name}:`, err.message);
  });
}); 