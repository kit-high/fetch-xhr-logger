(function() {
    var originalXHR = window.XMLHttpRequest;

    function overrideXHR() {
        var xhr = new originalXHR();

        var originalSend = xhr.send;
        xhr.send = function(...args) {
            console.log("XHR request sent:", args);
            return originalSend.apply(xhr, args);
        };

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log("XHR request completed:", xhr);
            }
        };

        return xhr;
    }

    window.XMLHttpRequest = overrideXHR;
})();
