import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);




function onTimeSave(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};
    
player.on('timeupdate', throttle(onTimeSave, 1000));

const loadData = JSON.parse(localStorage.getItem("videoplayer-current-time"));

setTime();

function setTime() {
    if (loadData === null) {
        return;
    }
    const currentSeconds = loadData.seconds;

    player.setCurrentTime(currentSeconds);
}




