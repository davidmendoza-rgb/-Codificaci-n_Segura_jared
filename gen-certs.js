const selfsigned = require('selfsigned');
const fs = require('fs');
const path = require('path');

try {
  const attrs = [{ name: 'commonName', value: 'localhost' }];
  const pems = selfsigned.generate(attrs, { days: 365 });

  const keyPath = path.join(__dirname, 'server.key');
  const certPath = path.join(__dirname, 'server.cert');

  if (pems.private) {
    fs.writeFileSync(keyPath, pems.private);
    console.log('✓ Certificado privado generado:', keyPath);
  }
  
  if (pems.cert) {
    fs.writeFileSync(certPath, pems.cert);
    console.log('✓ Certificado público generado:', certPath);
  }
} catch (error) {
  console.error('Error:', error.message);
}
