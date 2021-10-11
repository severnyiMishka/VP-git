document.addEventListener("keypress", function(event){
    let audio = document.createElement("AUDIO");
    if (event.code == "KeyA" || event.code == "KeyS" || event.code == "KeyD" || event.code == "KeyF" || event.code == "KeyG" || event.code == "KeyH" || event.code == "KeyJ") {
        let pressedKey = event.key.toUpperCase();
           console.log(`The '${pressedKey}' key is pressed`);
           audio.src = `white_keys\\${pressedKey}.mp3`;
           audio.play();
           document.getElementById(`key-${pressedKey}`).style.backgroundColor = "gray";
           function colorBack () {
            document.getElementById(`key-${pressedKey}`).style.backgroundColor = "white";
           };
           this.addEventListener("keyup", colorBack);
    }
    else if (event.code == "KeyW" || event.code == "KeyE" || event.code == "KeyT" || event.code == "KeyY" || event.code == "KeyU") {
        let pressedKey = event.key.toUpperCase();
           console.log(`The '${pressedKey}' key is pressed`);
           audio.src = `black_keys\\${pressedKey}.mp3`;
           audio.play();
           document.getElementById(`key-${pressedKey}`).style.backgroundColor = "gray";
           function colorBack () {
            document.getElementById(`key-${pressedKey}`).style.backgroundColor = "black";
           };
           this.addEventListener("keyup", colorBack);
     } else {
        alert("Oops.. Press another key");
    }
});