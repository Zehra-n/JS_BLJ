    const crownHeight = 60;
    const trunkWidth = 20;
    const trunkHeight = 8;
    var result = '';

    start();

    function start() {
        result = '';
        drawTree();
        document.getElementsByTagName('body')[0].innerHTML = result;
        setTimeout(start, 280);
    }

    function drawTree() {
        drawCrown(crownHeight);
        drawTrunk(trunkHeight, trunkWidth, crownHeight);
    }

    function drawCrown(crownHeight) {
        var filled = 1;                 
        var empty = crownHeight - 1;      
       
        for (var i = 1; i <= crownHeight; i++) {
            drawLine(empty, filled, 'green', true);
            filled += 2;
            empty -= 1;
        }
    }

    function drawTrunk(trunkHeight, trunkWidth, crownHeight) {
    
        for (var i = 0; i <= trunkHeight; i++) {
            var empty = (crownHeight - 1) - (trunkWidth / 2);
            drawLine(empty, trunkWidth, 'brown', false);
        }
    }

    function drawLine(empty, filled, fillColor, isCrown) {
        
        for (var i = 0; i < empty; i++) {
            result += '<div></div>';
        }

        for (var i = 0; i < filled; i++) {
            //var rand = Math.floor(Math.random() * 100) + 1; //Zufallszahl zwischen 1 und 100
            if (isCrown) {
                fillColor = getRandomColor();
            }   

            result += '<div style="background-color: ' + fillColor + ';"></div>';
        }

        result += '<br>';
    }

    function getRandomColor() {
        //at most times we want green
        //and we want a bit more black or red than yellow
        var colors = ['yellow', 'black', 'black', 'red', 'red','green', 'green', 'green', 'green', 'green', 'green']; 
        var rand = Math.floor(Math.random() * colors.length); 
        return colors[rand];
    }
