function __lazy_js(scripts, callback) {
    var loader = function(src, handler) {
        var script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = script.onreadystatechange = function() {
            script.onreadystatechange = script.onload = null;
            handler();
        };
        var head = document.getElementsByTagName('head')[0];
        (head || document.body).appendChild(script);
    };
    (function() {
        if (scripts.length != 0) {
            loader(scripts.shift(), arguments.callee);
        } else {
            callback && callback();
        }
    })();
}