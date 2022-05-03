const bigButton = document.querySelector('#bigButton')

function clickFunction() {
    document.getElementById('textBox').style ="font-size: 24pt";
}


function fancyChange() {
    document.getElementById('textBox').style ="font-weight: bold; color: blue; text-decoration-line: underline";
}


function boringChange() {
    document.getElementById('textBox').style ="font-weight: normal";
}

function mooFunction() {
    var input = document.getElementById('textBox').value;
    input = input.toUpperCase(); 
    var parts = input.split(".")
    input = parts.join('Moo.')
    document.getElementById('textBox').value = input; 
}



