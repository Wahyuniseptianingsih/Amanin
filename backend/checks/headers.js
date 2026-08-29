const HEADER_PENTING = [
  { key: "strict-transport-security", label: "Strict-Transport-Security" },
  { key: "content-security-policy", label: "Content-Security-Policy" },
  { key: "x-frame-options", label: "X-Frame-Options" },
  { key: "x-content-type-options", label: "X-Content-Type-Options" },
];

export async function checkHeaders(targetUrl) {
  const res = await fetch(targetUrl);

  const ditemukan = [];
  const hilang = [];

  for (const header of HEADER_PENTING) {
    if (res.headers.has(header.key)) {
      ditemukan.push(header.label);
    } else {
      hilang.push(header.label);
    }
  }

  return { ditemukan, hilang };
}

const hasil = await checkHeaders("https://google.com");
console.log(hasil);