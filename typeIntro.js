

function typeIntro() {
    var blurb = `//Mostly into Data Science, physics, applied mathematics, algorithm design, and Android architecture.<br>
    //But we're both on the internet right now, so I'll do some web dev. Check it out: <br> //a cellular automaton I'm rendering in real time, and animating with JavaScript.  
    //Kind of looks like the ebb and flow of a beautiful digital sea sparkling in the sun...`;           
    let speed = 50;       
    for (let i = 0; i < blurb.length; i++) {
      document.getElementById("intro").innerHTML += blurb.charAt(i);
      setTimeout(typeIntro, speed);
    }
}