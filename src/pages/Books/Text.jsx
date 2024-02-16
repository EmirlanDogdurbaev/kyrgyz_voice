import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../store/api";
import { header } from "../../store/header";
import { useParams } from "react-router-dom";

function Text() {
  const { id } = useParams();
  const [audioSrc, setAudioSrc] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}/content/books/${id}`, header)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  console.log(data);

  //   const cardLesson = data.map((item) => {
  //     return <p key={item.id} >{item.content}</p>;
  //   });

  function playAudio(audioData) {
    const audioURL = URL.createObjectURL(audioData);
    var audioElement = new Audio(audioURL);
    audioElement.play();
  }

  useEffect(() => {
    let lastSelectedText = "";

    function getSelectedText() {
      let selectedText = "";
      if (window.getSelection) {
        selectedText = window.getSelection().toString();
      } else if (document.selection && document.selection.type !== "Control") {
        selectedText = document.selection.createRange().text;
      }
      return selectedText;
    }

    document.addEventListener("mouseup", async function () {
      const selectedText = getSelectedText();
      if (selectedText !== "" && selectedText !== lastSelectedText) {
        console.log("Выделенный текст:", selectedText);
        try {
          const response = await axios.post(
            "http://192.168.221.209:8000/api/v1/tts/send",
            { text: selectedText },
            { responseType: "blob" }
          );
          const audioUrl = URL.createObjectURL(response.data);
          setAudioSrc(audioUrl);
          const audio = new Audio(audioUrl);
          audio
            .play()
            .catch((error) =>
              console.log("Ошибка воспроизведения аудио:", error)
            );
        } catch (error) {
          console.error("There was a problem with the POST request:", error);
        }
        lastSelectedText = selectedText;
      }
    });

    return () => {
      document.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{padding:"20px 150px", lineHeight: "1.5", textAlign: "center"}}>{data.title}</h2>
      <p style={{padding:"20px 100px", lineHeight: "1.5", textAlign: "justify"}}>{data.content}</p>
    </div>
  );
}

export default Text;
