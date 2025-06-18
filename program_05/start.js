// This script registers a service worker for the current web application.
// It checks if the browser supports service workers and then registers the service worker script located at "/sw.js".

        if ('serviceWorker' in navigator) {

        	navigator.serviceWorker.register("./serviceworker.js")

        	.then((reg)=>console.log("registered",reg))

        	.catch((err)=>console.log("err",err));

} else {

        	console.log('No service worker support in this browser');

}
