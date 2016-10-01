function bootstrap() {
    System.import('app').then(function(m: {main: Function}) {
        m.main();
    }, console.error.bind(console));
}