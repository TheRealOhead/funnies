let style = document.createElement('style');
document.head.appendChild(style);

let i = 0;

setInterval(()=>{
    style.innerHTML = '* {transform:rotate(' + i + 'deg)}';
    i+=.05;
},10);