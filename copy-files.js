const ncp = require('ncp').ncp;
const fs = require('fs');

const sourceFolderServer = 'dist/fom-website/server/';
const destinationFolderServer = 'dist/package/';

const sourceFolderBrowser = 'dist/fom-website/browser/';
const destinationFolderBrowser = 'dist/package/dist/fom-website/browser/';

// Check if the destination folder exists, create it if not
if (!fs.existsSync(destinationFolderServer)) {
    fs.mkdirSync(destinationFolderServer, { recursive: true });
}

// Check if the destination folder exists, create it if not
if (!fs.existsSync(destinationFolderBrowser)) {
    fs.mkdirSync(destinationFolderBrowser, { recursive: true });
}

ncp.limit = 16; // Set the concurrency limit, adjust as needed

ncp(sourceFolderServer, destinationFolderServer, (err) => {
    if (err) {
        console.error('Error copying files:', err);
    } else {
        console.log('Files copied successfully!');
    }
});

ncp(sourceFolderBrowser, destinationFolderBrowser, (err) => {
    if (err) {
        console.error('Error copying files:', err);
    } else {
        console.log('Files copied successfully!');
    }
});
