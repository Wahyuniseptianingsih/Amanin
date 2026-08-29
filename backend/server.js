import express from "express";
import cors from "cors";
import { checkSsl } from "./checks/ssl.js";
import { checkHeaders } from "./checks/headers.js";
import { checkMixedContent } from "./checks/mixedContent.js";
import { hitungSkor } from "./checks/scoring.js";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server SiteGuard jalan!");
});

app.get("/api/scan", async (req, res) => {
  const hostname = req.query.url;

  if (!hostname) {
    return res.status(400).json({ error: "Parameter url wajib diisi" });
  }

  const targetUrl = `https://${hostname}`;

  try {
    const [hasilSsl, hasilHeaders, hasilMixed] = await Promise.all([
      checkSsl(hostname),
      checkHeaders(targetUrl),
      checkMixedContent(targetUrl),
    ]);

    const { skor, grade } = hitungSkor(hasilSsl, hasilHeaders, hasilMixed);

    res.json({
      hostname,
      grade,
      skor,
      ssl: hasilSsl,
      headers: hasilHeaders,
      mixedContent: hasilMixed,
    });
  } catch (err) {
    res.status(500).json({ error: "Gagal memeriksa situs ini", detail: err.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});