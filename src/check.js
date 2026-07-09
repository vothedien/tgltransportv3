import https from 'https';
https.get('https://i.ibb.co/mCvDY6n9/dhl.webp', (res) => {
  console.log(res.statusCode);
  console.log(res.headers);
});
