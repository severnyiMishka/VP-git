document.addEventListener("keypress", function(event){
    let audio = document.createElement("AUDIO");
   switch (event.code) {
       case "KeyA":
           console.log("The 'A' key is pressed");
           audio.src = "white_keys\\A.mp3";
           audio.play();
           document.getElementById("key-A").style.backgroundColor = "gray";
           function colorBack () {
            document.getElementById("key-A").style.backgroundColor = "white";
           };
           this.addEventListener("keyup", colorBack);
           break;
       case"KeyS":
           console.log("The 'S' key is pressed");
           audio.src = "white_keys\\S.mp3";
           audio.play();
           break;
       case "KeyD":
           console.log("The 'D' key is pressed");
           audio.src = "white_keys\\D.mp3";
           audio.play();
           break;
       case "KeyF":
           console.log("The 'F' key is pressed");
           audio.src = "white_keys\\F.mp3";
           audio.play();
           break;
       case "KeyG":
           console.log("The 'G' key is pressed");
           audio.src = "white_keys\\G.mp3";
           audio.play();
           break;
       case "KeyH":
           console.log("The 'H' key is pressed");
           audio.src = "white_keys\\H.mp3";
           audio.play();
           break;
       case "KeyJ":
           console.log("The 'J' key is pressed");
           audio.src = "white_keys\\J.mp3";
           audio.play();
           break;
       case "KeyW":
           console.log("The 'W' key is pressed");
           audio.src = "black_keys\\W.mp3";
           audio.play();
           break;
       case "KeyE":
           console.log("The 'E' key is pressed");
           audio.src = "black_keys\\E.mp3";
           audio.play();
           break;
       case "KeyT":
           console.log("The 'T' key is pressed");
           audio.src = "black_keys\\T.mp3";
           audio.play();
           break;
       case "KeyY":
           console.log("The 'Y' key is pressed");
           audio.src = "black_keys\\Y.mp3";
           audio.play();
           break;
       case "KeyU":
           console.log("The 'U' key is pressed");
           audio.src = "black_keys\\U.mp3";
           audio.play();
           break;
       default:
           alert("Press A-Z or W-U");
   }
});