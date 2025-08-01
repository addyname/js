const clock = document.getElementById('clock')
const newDate = document.getElementById('date')

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString().toLocaleUpperCase();
    newDate.innerHTML = date.toLocaleDateString();
}, 1000);