import React from 'react'

function Text() {

    function playAudio() {
        var audio = new Audio('../../../../src/assets/audio/audio.mp3');
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
    
    document.addEventListener('mouseup', function() {
        const selectedText = getSelectedText();
        if (selectedText !== '' && selectedText !== lastSelectedText) {
            console.log("Выделенный текст:", selectedText);
            playAudio();
            lastSelectedText = selectedText;
        }
    });
    
    
  return (
    <div style={{padding: "30px"}} ><p>Рустам Интеллигент чөйрөдөгү үй-бүлөнүн жашоосу баяндалат.
    Сүрөтчү Темир менен диктор Сабиранын жашоосу башкаларга бактылуу көрүнгөнү менен, 
    чынында экөөнүн турмушу теӊирден тескери экени сүрөттөлөт. Темир качандыр бир учурда бейтааныш сулууга көзү түшүп, 
    ал бийкечти сүйүп калып, канча убакыт өтсө да оюнан чыгара албай коёт, 
    Кеч күздө бактан кызыл алма таап, аны ага белекке берүүнү чечет.</p></div>
  )
}

export default Text