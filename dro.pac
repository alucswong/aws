function FindProxyForURL(url, host) {
    url = url.toLowerCase();

    if (shExpMatch(url, "*\\.mp4") ||
        shExpMatch(url, "*\\.apk") ||
        shExpMatch(url, "*\\.jpg") ||
        shExpMatch(url, "*\\.png") ||
        shExpMatch(url, "*\\.gif") ||
        shExpMatch(url, "*\\.zip")) {
        return "DIRECT";
    }

    return "PROXY 127.0.0.1:10809";
}
