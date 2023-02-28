const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'http://examination.24x7retail.com',
  changeOrigin: true,
}));

app.listen(3001, () => {
  console.log('Proxy server listening on http://localhost:5000');
});