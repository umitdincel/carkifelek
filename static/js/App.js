var ws = new WebSocket('ws://' + document.domain + ':' + 4000 + '/feed'),
    messages = document.createElement('ul');
ws.onmessage = function (event) {
    var messages = document.getElementsByTagName('ul')[0],
        message = document.createElement('li'),
        content = document.createTextNode('Received: ' + event.data);
    message.appendChild(content);
    messages.appendChild(message);
};
document.body.appendChild(messages);
window.setInterval(function() {
    data = 'bye!'
    ws.send(data);
    var messages = document.getElementsByTagName('ul')[0],
        message = document.createElement('li'),
        content = document.createTextNode('Sent: ' + data);
    message.appendChild(content);
    messages.appendChild(message);
}, 1000);