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

    return "PROXY testq123:testq123@38.213.248.179:2333";
}
