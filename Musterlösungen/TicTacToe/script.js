var player = 'x'; 
var gameOver = false; 
window.addEventListener('load', initialize);

function tileClick(e) {
    if (gameOver) 
        return;

    var img = e.target;
    if (img.src.indexOf('_.png') > -1) {
        img.src = './' + player + '.png';

        if(checkForWin() === true) {
            var elem = document.getElementById('won-message');
            elem.innerHTML = 'Player ' + player.toUpperCase() + ' has won! Congratulations!';
            gameOver = true;
        } else if(checkForDraw() === true) {
            var elem = document.getElementById('won-message');
            elem.innerHTML = 'Draw! Nobody has won.';
            gameOver = true;
        } else {
            if (player == 'x') 
                player = 'o';
            else 
                player = 'x';
        }
    }
}

function  checkForDraw() {
    var images =  document.querySelectorAll('.tile img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].src.indexOf('_.png') > -1) {
            return false;
        }
    }

    return !checkForWin();
}

function checkForWin() {
    var images =  document.querySelectorAll('.tile img');
    //rows 
    for (var i = 0; i < images.length; i += 3) {
        if (images[i].src.indexOf('_.png') > -1 
            || images[i + 1].src.indexOf('_.png') > -1 
            || images[i + 2].src.indexOf('_.png') > -1) {
                continue;
        } else if (images[i].src == images[i + 1].src 
                && images[i + 1].src == images[i + 2].src) {
                return true;
        }
    }

    //columns 
    for (var i = 0; i < images.length / 3; i++) {
        if (images[i].src.indexOf('_.png') > -1 
            || images[i + 3].src.indexOf('_.png') > -1 
            || images[i + 6].src.indexOf('_.png') > -1) {
            continue;
        } else if (images[i].src == images[i + 3].src 
            && images[i + 3].src == images[i + 6].src) {
            return true;
        }
    }

    //diagonal 1
    if (images[0].src.indexOf('_.png') > -1 
        || images[4].src.indexOf('_.png') > -1 
        || images[8].src.indexOf('_.png') > -1) {
        //do nothing
    } else if (images[0].src == images[4].src 
        && images[4].src == images[8].src) {
        return true;
    }

    //diagonal 2
    if (images[2].src.indexOf('_.png') > -1 
        || images[4].src.indexOf('_.png') > -1 
        || images[6].src.indexOf('_.png') > -1) {
        //do nothing
    } else if (images[2].src == images[4].src 
        && images[4].src == images[6].src) {
        return true;
    }
  
    return false;
}

function initialize() {
    document.querySelector('.tile:nth-child(1) img').addEventListener('click', tileClick);
    document.querySelector('.tile:nth-child(2) img').addEventListener('click', tileClick);
    document.querySelector('.tile:nth-child(3) img').addEventListener('click', tileClick);
    document.querySelector('.tile:nth-child(4) img').addEventListener('click', tileClick);
    document.querySelector('.tile:nth-child(5) img').addEventListener('click', tileClick);
    document.querySelector('.tile:nth-child(6) img').addEventListener('click', tileClick);
    document.querySelector('.tile:nth-child(7) img').addEventListener('click', tileClick);
    document.querySelector('.tile:nth-child(8) img').addEventListener('click', tileClick);
    document.querySelector('.tile:nth-child(9) img').addEventListener('click', tileClick);
}
