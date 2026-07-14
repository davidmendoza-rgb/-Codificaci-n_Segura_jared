const http = require('http');
const app = require('./server');

const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});