function FindProxyForURL(url, host) {
    var proxy = "PROXY 192.168.100.7:12334";

    if (isResolvable("192.168.100.7")) {
        return proxy;
    }

    return "DIRECT";
}
