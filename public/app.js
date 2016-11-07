/**
 * Created by farst on 2016-11-07.
 */
$(function(){
    var socket = io();
    socket.on('message', function (data) {
        console.log(data);
    });
});