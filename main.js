//service worker
if('serviceWorker' in navigator){
  console.log('Puedes usar los servicesWorker en tu navegador');
  //registar un service worker
  navigator.serviceWorker.register('./sw.js')
                         .then(res => console.log('serviceWorker cargado correctamente', res))
                         .catch(err => console.log('serviceWorker no se ha podido registar', err));
}else{
  console.log('No puedes usar los servicesWorker en tu navegador');
}
