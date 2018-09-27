var bc = new BroadcastChannel('control');
bc.onmessage = function (ev) {
    if (sozi.player.findFrame(ev.data)) {
        sozi.player.moveToFrame(ev.data);
    }
};
