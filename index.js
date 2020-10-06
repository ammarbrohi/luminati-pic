const fetch = require('node-fetch');
const HttpProxyAgent = require('http-proxy-agent');

async function requestIt() {
  const response = await fetch('https://api.binance.com', {
    method: 'get',
    compress: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip,deflate',
    },
    agent: new HttpProxyAgent('http://44.237.23.66:24000'),
  });
  const jsonx = await response.text();
  console.log(jsonx.ip);
}

(async () => {
  for (let index = 0; index < 1; index++) {
    requestIt();
  }
  // await requestIt();
})();

process.on('unhandledRejection', (err) => {
  console.log(
    `Unhandled Rejection Details::${err}`,
  );
});
