
current.innerHTML = ""
currtym = setInterval(() => {
    let tym = new Date()
    
    current.innerHTML = `${tym.getHours()}:${tym.getMinutes()}:${tym.getSeconds()}` 
}, 1000);

set.addEventListener("click",()=>{
    time = `${hr.value}:${min.value}:${sec.value}`
    alarm = setInterval(() => {
        if(current.innerHTML == time){
            console.log("wake up")
            let audio = new Audio("dangal.mp3")
            audio.play()
        }
        
    }, 1000);
    
})