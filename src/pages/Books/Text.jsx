import React from 'react'

function Text() {


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
            lastSelectedText = selectedText;
        }
    });
    
    
  return (
    <div style={{padding: "30px"}} ><p>Интеллигент чөйрөдөгү үй-бүлөнүн жашоосу баяндалат.
    Сүрөтчү Темир менен диктор Сабиранын жашоосу башкаларга бактылуу көрүнгөнү менен, 
    чынында экөөнүн турмушу теӊирден тескери экени сүрөттөлөт. Темир качандыр бир учурда бейтааныш сулууга көзү түшүп, 
    ал бийкечти сүйүп калып, канча убакыт өтсө да оюнан чыгара албай коёт. 
    Кеч күздө бактан кызыл алма таап, аны ага белекке берүүнү чечет.</p></div>
  )
}

export default Text