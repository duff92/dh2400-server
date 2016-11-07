/**
 * Created by farst on 2016-11-07.
 */
$(function(){
    var socket = io();
    var $player1h1 = $('.player1').find('h1');
    var $player2h1 = $('.player2').find('h1');

    socket.on('message', function (data) {
        var data = data.msg.split('AT+CIPSEND=0,19')[1];
        $player1h1.text(data.toString());
    });
});