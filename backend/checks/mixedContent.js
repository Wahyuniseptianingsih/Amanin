export async function checkMixedContent(targetUrl) {
  const res = await fetch(targetUrl);
  const html = await res.text();

  const pola = /(?:src|href)\s*=\s*["']http:\/\/[^"']+["']/gi;
  const ditemukan = html.match(pola) || [];

  return {
    jumlahDitemukan: ditemukan.length,
    contoh: ditemukan.slice(0, 3),
  };
}

const hasil = await checkMixedContent("https://google.com");
console.log(hasil);