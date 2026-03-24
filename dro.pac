function FindProxyForURL(url, host) {

    if(host=="127.0.0.1") {return "DIRECT";}
    if(url.indexOf(".mp4") !== -1){
        return "DIRECT";
    }

    return "PROXY 127.0.0.1:10809";
}
