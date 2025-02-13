const sweetMessage = document.querySelector('#sweetMessage');
const combination = document.querySelector('#combination');
const checkButton = document.querySelector('#check-button');
const empty = document.querySelector('#empty');
const invalid = document.querySelector('#invalid');
const music = document.querySelector('#music');
const pauseMusic = document.querySelector('#pause-music');
const playMusic = document.querySelector('#play-music');
const clearButton = document.querySelector('#clear');


checkButton.addEventListener('click', function() {
    clear();
    if(combination.value != ''){
        let combinationMsg = combination.value;
        if(combinationMsg != "BnD"){
            invalid.textContent = `Not yours!!`;
        }
        else {
            music.play();
            combination.value = '';
            sweetMessage.style.padding = "10px";
            //sweetMessage.textContent = ``;

            var i = 0;
            var msg = 'Hey Daniellah 😊 Happy Valentine\'s to you 😁 \
                I didn\'t know I was gonna celebrate this day with such a beautiful gal 😍\
                The little time we\'ve spent together has been awesome.\
                When I\'m with you everything feels right 😌\
                You make me happy and I think you are amazing 🤩, strong 💪, determined 🙂 and you have a sweet heart ☺️\
                I hope I get to spend more and more time with you';

            var speed = 120;

            function typeWriter() {
                if (i<msg.length) {
                    sweetMessage.innerHTML += msg.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }
            typeWriter();
        }
    }
    else{
        empty.textContent = `Enter combination!!`;
    }

    //display();
});

pauseMusic.addEventListener('click', function() {
    music.pause();
});
playMusic.addEventListener('click', function() {
    music.play();
});
clearButton.addEventListener('click', function() {
    window.location.reload();
});

function clear(){
    empty.textContent = '';
    invalid.textContent = '';
    sweetMessage.textContent = '';
    sweetMessage.style.padding = "0px";
    music.pause();
}
