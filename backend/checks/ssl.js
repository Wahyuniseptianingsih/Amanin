import tls from "tls";

export function checkSsl(hostname) {
  return new Promise((resolve) => {
    const socket = tls.connect(
      { host: hostname, port: 443, servername: hostname },
      () => {
        const cert = socket.getPeerCertificate();

        const validTo = new Date(cert.valid_to);
        const now = new Date();
        const sisaHari = Math.floor(
          (validTo.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );
        const expired = now > validTo;

        socket.end();

        resolve({
          issuer: cert.issuer.O,
          sisaHari,
          expired,
          ok: socket.authorized && !expired,
        });
      }
    );

    socket.on("error", (err) => {
      resolve({ ok: false, error: err.message });
    });
  });
}
