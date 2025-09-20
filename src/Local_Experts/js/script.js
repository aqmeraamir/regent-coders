// variables
var hamburgerOn = false;

// intervals
//setInterval(main, 0.2)

// functions
function main() {
}

function hamburgerPressed() {
    if (hamburgerOn == false) {
        document.getElementById('hamburger-image').style.animationName = 'HamburgerRotateOn';
        document.getElementById('hamburger-image').style.transform = 'rotate(90deg)';
        document.getElementById('hamburger-options').style.animationName = 'HamburgerOptionsOn';
        document.getElementById('hamburger-options').style.top = '50px';
        hamburgerOn = true;
    } else {
        document.getElementById('hamburger-image').style.animationName = 'HamburgerRotateOff';
        document.getElementById('hamburger-image').style.transform = 'rotate(0deg)';
        document.getElementById('hamburger-options').style.animationName = 'HamburgerOptionsOff';
        document.getElementById('hamburger-options').style.top = '-75px';
        hamburgerOn = false;
    }
}



// execute at the start of the program