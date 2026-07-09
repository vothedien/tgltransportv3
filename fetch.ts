const fetchLogo = async () => {
  const res = await fetch("https://ibb.co/7NXW8GXq");
  const html = await res.text();
  const match = html.match(/<meta property="og:image" content="([^"]+)"/);
  if (match) {
    console.log("LOGO_URL:", match[1]);
  } else {
    console.log("Not found");
  }
};
fetchLogo();
