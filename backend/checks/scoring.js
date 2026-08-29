export function hitungSkor(ssl, headers, mixedContent) {
  let skor = 0;

  if (ssl.ok) {
    skor += 60;
  }

  skor += headers.ditemukan.length * 10;

  if (mixedContent.jumlahDitemukan === 0) {
    skor += 0;
  } else {
    skor -= 5 * mixedContent.jumlahDitemukan;
  }

  skor = Math.max(0, Math.min(100, skor));

  let grade;
  if (skor >= 90) grade = "A";
  else if (skor >= 70) grade = "B";
  else if (skor >= 50) grade = "C";
  else if (skor >= 30) grade = "D";
  else grade = "F";

  return { skor, grade };
}