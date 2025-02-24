const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80';
const imagePath = path.join(__dirname, '..', 'public', 'images', 'hero-image.jpg');

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download the image
https.get(imageUrl, (response) => {
  const fileStream = fs.createWriteStream(imagePath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Image downloaded successfully');
  });
}).on('error', (err) => {
  console.error('Error downloading image:', err.message);
}); 