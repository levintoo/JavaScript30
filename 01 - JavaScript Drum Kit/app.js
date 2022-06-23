
    window.addEventListener("keydown", function (e) {

        var sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!sound) return;
        sound.currentTime = 0;
        sound.play();

        key.classList.add('playing');
        key.addEventListener('transitionend',function(e){
            key.classList.remove('playing');
        });

    });
