
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);
    

player.on('timeupdate', function (data) {
    
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
});

const loadData = JSON.parse(localStorage.getItem("videoplayer-current-time"));

const currentSeconds = loadData.seconds;

player.setCurrentTime(currentSeconds).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
    

