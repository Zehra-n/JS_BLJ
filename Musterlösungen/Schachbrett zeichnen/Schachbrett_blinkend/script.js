var count = 0;
zeichneSchachbrett();

function zeichneSchachbrett() {
    var result = '';
    count++;
    for(var i = 1; i <= 8; i++) {
        var color = '';
        for(var j = 1; j <= 8; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) 
                    color = 'white';
                else
                    color = 'black';
            } else {
                if (j % 2 == 0) 
                    color = 'black';
                else
                    color = 'white';
            }

            if (count % 2 == 0) {
                //switch colors
                if (color == 'black')
                    color = 'white';
                else 
                    color = 'black';
            } 

            result += '<div class="' + color + '"></div>';
        }
    }
    
    document.getElementsByTagName("body")[0].innerHTML = result;
    setTimeout(zeichneSchachbrett, 500);
}
