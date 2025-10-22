self.addEventListener("install", event => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", event => {
  // Por ahora solo dejamos que todo pase directo
});
