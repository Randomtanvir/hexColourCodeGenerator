button.onclick = function() {
    let hexColor = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    let color = '#';

    for(let i = 0; i < 6; i++){
        let randomSixCode = Math.round(Math.random() * 15);
        let numTwo = hexColor[randomSixCode];
        color += numTwo;
    }

    document.getElementById('container').style.backgroundColor = color;
    document.getElementById('output').style.color = color;
    document.getElementById('output').innerHTML = color;
    document.getElementById('output').value = color;
    
}

const div = document.querySelector('output')

function copy() {
    output.select();
    document.execCommand('copy');
    alert('Copyed')
}




















