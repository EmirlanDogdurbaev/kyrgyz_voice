import React from 'react'
import cl from './Audio.module.scss'

function AudioBooks() {

function playAudio() {
    var audio = new Audio('../../../../src/assets/audio/audio.mp3');
    audio.play();
}

document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    if (selectedText.trim() !== '') {
        playAudio();
    }
});

    const audio = "../../../../src/assets/audio/audio.mp3"

  return (
    <div>
        фывфывыфвasdasd
        <audio controls>
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
    </div>
  )
}

export default AudioBooks