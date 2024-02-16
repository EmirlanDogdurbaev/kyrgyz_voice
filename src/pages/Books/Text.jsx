import React from 'react';
import axios from 'axios';

function Text() {
  function playAudio(audioURL) {
    var audio = new Audio(audioURL);
    audio.play();
  }

  let lastSelectedText = '';

  function getSelectedText() {
    let selectedText = '';
    if (window.getSelection) {
      selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== 'Control') {
      selectedText = document.selection.createRange().text;
    }
    return selectedText;
  }

  document.addEventListener('mouseup', function () {
    const selectedText = getSelectedText();
    if (selectedText !== '' && selectedText !== lastSelectedText) {
      console.log("Выделенный текст:", selectedText);
      // Отправляем запрос
      axios.post('http://192.168.243.149:8000/api/v1/tts/send', { text: selectedText })
        .then(response => {
            console.log(response)
          const audioURL = response.data
          playAudio(audioURL)
        })
        .catch(error => {
          console.error('There was a problem with the POST request:', error);
        });

      lastSelectedText = selectedText;
    }
  });

  return (
    <div style={{ padding: "30px" }} >
      <p>Рустам Интеллигент чөйрөдөгү үй-бүлөнүн жашоосу баяндалат.
        Сүрөтчү Темир менен диктор Сабиранын жашоосу башкаларга бактылуу көрүнгөнү менен,
        чынында экөөнүн турмушу теӊирден тескери экени сүрөттөлөт. Темир качандыр бир учурда бейтааныш сулууга көзү түшүп,
        ал бийкечти сүйүп калып, канча убакыт өтсө да оюнан чыгара албай коёт,
        Кеч күздө бактан кызыл алма таап, аны ага белекке берүүнү чечет.
      </p>
    </div>
  );
}

export default Text;
