
var v = 0;
let loadBar = `Loading:`+`...###########################################...
`;
setInterval(function(){
    document.getElementById("intro").innerHTML+=loadBar.charAt(v);
    v++},5);



var w = 0;
let sysData = [`    #Core: `+window.navigator.userAgent+`    |    `, "#Cookies Enabled: "+window.navigator.cookieEnabled+`    |    `, `#Language: `+window.navigator.language+`    |    `, `#Platform: `+window.navigator.platform+`

`]; 

    setTimeout(() => {            
    setInterval(function(){
    while (w < sysData.length) {
        document.getElementById("intro").innerHTML+=sysData[w];
        w++
    }
},5);
    }, 5000);

var i = 0;
setTimeout(() => {  
let blurb1 = `//I'm mostly interested in Android architechture and development, applied math and physics, algorithm design, and scientific programming and simulations.
    
`;           
setInterval(function(){
    
document.getElementById("intro").innerHTML+=blurb1.charAt(i);
i++},5); 
}, 8000); 


      
            
var j = 0;
setTimeout(() => {  
let blurb2 = `//But we\'re both on the internet right now, so I\'ll do some web dev. Check it out:

`;           
setInterval(function(){

document.getElementById("intro").innerHTML+=blurb2.charAt(j);
j++},5); 
}, 11000); 
              

var k = 0;
setTimeout(() => {  
let blurb3 = `//It's a cellular automaton that I\'m calculating in real time and animating with JavaScript.

`;             
setInterval(function(){
    
document.getElementById("intro").innerHTML+=blurb3.charAt(k);
k++},5); 
}, 14000); 

var h = 0;
setTimeout(() => {  
let blurb4 = `//Doesn't it look like a beautiful digital sea sparkling in the sun as it ebbs and flows?`;             
setInterval(function(){
    
document.getElementById("intro").innerHTML+=blurb4.charAt(h);
h++},5); 
}, 17000); 
