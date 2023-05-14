function upDateTime(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");
    document.getElementById("hours").innerHTML = `${hours} :`;
    document.getElementById("minutes").innerHTML = ` ${minutes} :`;
    document.getElementById("seconds").innerHTML = ` ${seconds}`;
}


setInterval(upDateTime , 1000);