const crypto = require('crypto');

console.log("Starting the key generation...");

const generateEncryptionKey = () => {
  try {
    const key = crypto.randomBytes(16).toString('hex'); // Generates a 32-character hexadecimal key
    console.log("Your Encryption Key:", key);
  } catch (error) {
    console.error("Error generating key:", error);
  }
};

generateEncryptionKey();