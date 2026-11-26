/* Alexandre System: sem cache próprio; ao abrir, sempre confere com o servidor se há versão nova */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  var r = e.request;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r.url, { cache: 'no-cache', credentials: 'same-origin' }).catch(function(){ return fetch(r); }));
  }
});
