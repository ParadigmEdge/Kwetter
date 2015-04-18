/**
 *
 * @author Yongyi Jin
 */
(function () {
    var webSocket = new WebSocket("ws://localhost:23761/Kwetter_Server/websocket");
    webSocket.onopen = function (evt) {
        onOpen(evt);
    };
    webSocket.onclose = function (evt) {
        onClose(evt);
    };
    webSocket.onmessage = function (evt) {
        onMessage(evt);
    };
    webSocket.onerror = function (evt) {
        onError(evt);
    };

    function onOpen(evt) {
        writeToScreen("CONNECTED");
    }
    function onWindowClose(evt) {
        websocket.close();
    }
    function onClose(evt) {
        writeToScreen("DISCONNECTED");
    }
    function onMessage(evt) {
        //convert json to javascript object
        var message = JSON.parse(evt.data);
        //write message.text to screen
        writeToScreen('<span style="color: green;">RESPONSE: ' + message.text + '</span>');
    }

    function onError(event) {
        writeToScreen('<span style="color: red;">ERROR:</span> ' + event.data);
    }

    function doSend(message) {
        writeToScreen("SENT: " + message);
        var json = "{text:'" + message + "'}";
        websocket.send(json);
    }

    //appends text to #output
    function writeToScreen(text) {
        var pre = document.createElement("p");
        pre.style.wordWrap = "break-word";
        pre.innerHTML = text;
        output.appendChild(pre);
    }

    //invoke init() on load
    window.addEventListener("load", init, false);

    //handles [Enter] in #textforws/clicks on #sendButton
    function keyPressed(event) {
        if (event.keyCode === 13) {
            document.getElementById("sendButton").click();
            document.getElementById("textforws").value = '';
        }
    }
})();





