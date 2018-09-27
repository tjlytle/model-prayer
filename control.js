document.addEventListener('keypress', function(ev) {
    var bc = new BroadcastChannel('control');
    switch (ev.key) {
        case '1':
            bc.postMessage('full');
            break;
        case 'q':
            bc.postMessage('father');
            break;
        case 'w':
            bc.postMessage('hallowed');
            break;
        case 'e':
            bc.postMessage('kingdom-come');
            break;
        case 'a':
            bc.postMessage('give-us');
            break;
        case 's':
            bc.postMessage('forgive');
            break;
        case 'd':
            bc.postMessage('lead');
            break;
        case 'z':
            bc.postMessage('kingdom');
            break;
        case 'x':
            bc.postMessage('power');
            break;
        case 'c':
            bc.postMessage('glory');
            break;
    }
});

document.addEventListener('click', function(ev){
    var bc = new BroadcastChannel('control');
    if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(ev.target.tagName)) {
        bc.postMessage(ev.target.textContent.toLowerCase().replace(/\s+/g, '-'));
    }
});

