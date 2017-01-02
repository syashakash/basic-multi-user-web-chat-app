var socket = io();

socket.on('connect', function() {
    console.log("CONNECTED TO SOCKET SEREVR");
});

socket.on('message', function(message) {
    var mtimestamp = moment.utc(message.timeStamp);
    console.log("New Message: ");
    console.log(message.text);
    jQuery('.message').append('<p><strong>' + mtimestamp.local().format('h:mma') + '</strong>' + message.text + '</p>');
});

var $form = jQuery('#message-form');

$form.on('submit', function() {
    event.preventDefault();
    var $msg = $form.find('input[name=message]');
    socket.emit('message', {
        text: $msg.val()
    });
    $msg.val('');

});
