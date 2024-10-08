var c = 0;
var t;
var timer_is_on = 0;
function setBG() {
let a = [
"url(../img/top-10-canh-dep-phap-4.jpg)",
"url(../img/Tháp-Eiffel-e1582616127405.jpg)",
"url(../img/istockphoto-516019979-612x612.jpg)",
"url(../img/5-canh-dep-ha-lan-lam-say-dam-long-nguoi-4.jpg)",
];
let n = a[Math.round(Math.random() * a.length)];
let d = document.getElementById("div1");
d.style.backgroundImage = n;
d.style.backgroundSize = "cover";
t = setTimeout("setBG()", 1000);
}
function play() {
if (!timer_is_on) {
timer_is_on = 1;
setBG();
}
}
function stop() {
clearTimeout(t);
timer_is_on = 0;
}
