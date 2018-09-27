var bc = new BroadcastChannel('control');
bc.onmessage = function (ev) {
    console.log(ev);
    sozi.player.moveToFrame(ev.data);

};
