let sw=0
var r = document.querySelector(':root');
document.getElementById("but").className="buttonTheme"


function light(sw) {
  
  if (sw%2 == 0) {
    document.getElementById("para").className="slideDay"
    r.style.setProperty('--color1','skyblue');
    r.style.setProperty('--color2','#357bb3');
    r.style.setProperty('--color3','rgb(12, 0, 41)');
    document.getElementById("text").innerHTML="Light Theme"
    r.style.setProperty('--color4','black');
    
    
  } else if(sw%2 == 1) {
    document.getElementById("para").className="slideNight"
    r.style.setProperty('--color1','rgb(41, 44, 62)');
    r.style.setProperty('--color2','rgb(20, 19, 39)');
    r.style.setProperty('--color3','rgb(0, 0, 0)');
    r.style.setProperty('--color4','white');
    document.getElementById("text").innerHTML="Dark Theme"
    
  }
}

