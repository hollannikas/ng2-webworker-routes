declare var System: any;

importScripts(
  "../node_modules/systemjs/dist/system.js",
  "../node_modules/zone.js/dist/zone.min.js",
  "../node_modules/reflect-metadata/Reflect.js",
  "../config.js");

System.import('background_index').then(function(m: {main: Function}) {
  m.main();
}, console.error.bind(console));

