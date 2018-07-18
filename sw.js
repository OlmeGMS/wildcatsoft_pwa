//Asignar nombre y versión de la cache
const CACHE_NAME = 'v1_cache_wildcatsoft';

//Ficheros a cachear en la aplicación
var urlToCache = [
  './',
  './css/animate.min.css',
  './css/bootstrap.min.css',
  './css/bootstrapV.css',
  './css/font-awesome.min.css',
  './css/formValidation.css',
  './css/lightbox.css',
  './css/main.css',
  './css/plugins.css',
  './css/responsive.css',
  './css/presets/preset1.css',
  './css/presets/preset2.css',
  './css/presets/preset3.css',
  './css/presets/preset4.css',
  './css/presets/preset5.css',
  './css/presets/preset6.css',
  './css/presets/preset7.css',
  './css/thank/main.css',
  './css/thank/plugins.css',
  './css/thank/themes.css',
  './images/slider/1.jpg',
  './images/slider/2.jpg',
  './images/slider/3.jpg',
  './images/slider/desarrollo.jpg',
  './images/slider/empresas.jpg',
  './images/blog/1.png',
  './images/blog/2.png',
  './images/blog/3.png',
  './images/lightbox/close.png',
  './images/lightbox/loading.gif',
  './images/lightbox/next.png',
  './images/lightbox/prev.png',
  './images/portfolio/1.jpg',
  './images/portfolio/2.jpg',
  './images/portfolio/3.jpg',
  './images/portfolio/4.jpg',
  './images/portfolio/5.jpg',
  './images/portfolio/6.jpg',
  './images/portfolio/7.jpg',
  './images/portfolio/8.jpg',
  './images/portfolio/diseno.jpg',
  './images/portfolio/disenoweb.jpg',
  './images/portfolio/portfolio-details.jpg',
  './images/portfolio/programas_medida.jpg',
  './images/portfolio/servicio.png',
  './images/portfolio/Sistema.png',
  './images/about-bg.jpg',
  './images/colombia.png',
  './images/contact-bg.jpg',
  './images/diseno.jpg',
  './images/features-bg.jpg',
  './images/paginaLogo.png',
  './images/twitter-bg.jpg',
  './images/uk.png',
  './images/favicon-1024.png',
  './images/favicon-512.png',
  './images/favicon-384.png',
  './images/favicon-256.png',
  './images/favicon-192.png',
  './images/favicon-128.png',
  './images/favicon-96.png',
  './images/favicon-64.png',
  './images/favicon-32.png',
  './images/team/angela.jpg',
  './images/team/angela.png',
  './images/team/carlos.jpg',
  './images/team/carlos.png',
  './images/team/fredy.png',
  './images/team/IMG_20160401_191132.jpg',
  './images/team/olme.png',
  './fonts/fontawesome-webfont.eot',
  './fonts/fontawesome-webfont.svg',
  './fonts/fontawesome-webfont.ttf',
  './fonts/fontawesome-webfont.woff',
  './fonts/fontawesome-webfont.woff2',
  './fonts/FontAwesome.otf',
  './fonts/glyphicons-halflings-regular.eot',
  './fonts/glyphicons-halflings-regular.svg',
  './fonts/glyphicons-halflings-regular.ttf',
  './fonts/glyphicons-halflings-regular.woff',
  './fonts/glyphicons-halflings-regular.woff2',
  './js/bootstrap.min.js',
  './js/bootstrapV.js',
  './js/formValidation.js',
  './js/html5shiv.js',
  './js/jquery.countTo.js',
  './js/jquery.inview.min.js',
  './js/jquery.js',
  './js/lightbox.min.js',
  './js/main.js',
  './js/modernizr-respond.min.js',
  './js/mousescroll.js',
  './js/respond.min.js',
  './js/smoothscroll.js',
  './js/wow.min.js',
];

//Envento de instalación
//instalción del serviceworker y guarda en cache los recursos estaticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
          .then(cache => {
            return cache.addAll(urlToCache)
                        .then(() => {
                          self.skipWaiting();
                        })
          })
          .catch(err => console.log('No sea registrado en cache', err))
  );
});

//Evento activate
//La App funcione sin conexion
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
      caches.keys()
            .then(cacheNames => {
              return Promise.all(
                cacheNames.map(cacheName => {
                  if(cacheWhitelist.indexOf(cacheName) === -1){
                    //Borrar elementos que no se necestian
                    return caches.delete(cacheName);
                  }
                })
              );
            })
            .then(() => {
              //Activa cache en el dispositivo
              self.clients.claim();
            })
    );
});

//Evento fetch
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
          .then(res => {
            if(res){
              //Devuelvo datos desde la cache
              return res;
            }

            return fetch(e.request);
          })
  );
});
