setInterval(()=>{navigator.serviceWorker.ready.then(a=>{var e;(e=a.active)==null||e.postMessage("keepAlive")})},2e4);
