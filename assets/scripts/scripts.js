// Get the video
var video = document.getElementById("myVideo");

document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,1})(\d{0,4})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + ' ' + x[3] + (x[4] ? '-' + x[4] : '');
});