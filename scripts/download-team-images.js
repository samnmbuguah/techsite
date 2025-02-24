const https = require('https');
const fs = require('fs');
const path = require('path');

const teamImages = [
  {
    name: 'samuel.jpg',
    url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
  },
  {
    name: 'jane.jpg',
    url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80',
  },
  {
    name: 'michael.jpg',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'sarah.jpg',
    url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
  },
];

// Create the team images directory if it doesn't exist
const teamDir = path.join(__dirname, '..', 'public', 'images', 'team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

// Download each image
teamImages.forEach((image) => {
  const imagePath = path.join(teamDir, image.name);
  
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