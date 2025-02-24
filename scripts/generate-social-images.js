const https = require('https');
const fs = require('fs');
const path = require('path');

const socialImages = [
  {
    name: 'og-image.jpg',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=630',
  },
  {
    name: 'twitter-image.jpg',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=600',
  },
];

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download each image
socialImages.forEach((image) => {
  const imagePath = path.join(imagesDir, image.name);
  
  https.get(image.url, (response) => {
    const fileStream = fs.createWriteStream(imagePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Generated ${image.name}`);
    });
  }).on('error', (err) => {
    console.error(`Error generating ${image.name}:`, err.message);
  });
}); 