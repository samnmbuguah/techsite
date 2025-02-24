const https = require('https');
const fs = require('fs');
const path = require('path');

const portfolioImages = [
  {
    name: 'ecommerce.jpg',
    url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
  },
  {
    name: 'healthcare.jpg',
    url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80',
  },
  {
    name: 'real-estate.jpg',
    url: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80',
  },
  {
    name: 'supply-chain.jpg',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
  },
];

// Create the portfolio images directory if it doesn't exist
const portfolioDir = path.join(__dirname, '..', 'public', 'images', 'portfolio');
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

// Download each image
portfolioImages.forEach((image) => {
  const imagePath = path.join(portfolioDir, image.name);
  
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