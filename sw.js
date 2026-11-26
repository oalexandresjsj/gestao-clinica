// Service worker mínimo: deixa o app instalável. Não guarda nada em cache: o app sempre vem do servidor (sempre a versão mais nova).
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* passa direto para a rede */ });
