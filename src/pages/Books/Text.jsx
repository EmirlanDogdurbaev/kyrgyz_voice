import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Text() {
    const [audioSrc, setAudioSrc] = useState(''); 

    function playAudio(audioData) {
        const audioURL = URL.createObjectURL(audioData);
        var audioElement = new Audio(audioURL);
        audioElement.play();
    }

    useEffect(() => {
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

        document.addEventListener('mouseup', async function () {
            const selectedText = getSelectedText();
            if (selectedText !== '' && selectedText !== lastSelectedText) {
                console.log("Выделенный текст:", selectedText);
                try {
                    const response = await axios.post('http://192.168.243.149:8000/api/v1/tts/send', { text: selectedText }, { responseType: 'blob' });
                    const audioUrl = URL.createObjectURL(response.data);
                    setAudioSrc(audioUrl);
                    const audio = new Audio(audioUrl);
                    audio.play().catch(error => console.log("Ошибка воспроизведения аудио:", error));
                } catch (error) {
                    console.error('There was a problem with the POST request:', error);
                }
                lastSelectedText = selectedText;
            }
        });

        return () => {
            document.removeEventListener('mouseup', () => {});
        };
    }, []);

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
