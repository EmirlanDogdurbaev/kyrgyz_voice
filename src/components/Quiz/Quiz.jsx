import React, { useState } from 'react';
import cl from "./Quiz.module.scss"

function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);

  // Предположим, что вопросы, ответы и подсказки приходят с бэкенда
  const questions = [
    {
      question: 'Манас ата ким болгон?',
      options: ['кыргыздардын атасы', 'баатыр', 'чабан', 'аял киши'],
      correctAnswer: 'кыргыздардын атасы',
      hint: 'Манас великодушный отец кыргызов и глава Кыргызского каганата'
    },
    {
      question: 'Каныкей апа ким болгон?',
      options: ['кемпир', 'эчким', 'Манастын аялы', 'Конурбайдын аялы'],
      correctAnswer: 'Манастын аялы',
      hint: 'Каныкей апа Манастын аялы, Сейтектин апасы болгон'
    },
    // Другие вопросы...
  ];

  const handleAnswer = (selectedOption) => {
    if (quizFinished) {
      return; // Предотвращаем обработку ответов после завершения теста
    }

    if (selectedOption === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    } else {
      // Если ответ неправильный, показываем подсказку
      setShowHint(true);
      setHintText(questions[questionIndex].hint);
      setCorrectAnswer(questions[questionIndex].correctAnswer);
    }

    // Проверяем, завершен ли тест
    if (questionIndex === questions.length - 1) {
      setQuizFinished(true);
    } else {
      // Переходим к следующему вопросу
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setScore(0);
    setShowHint(false);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div>
        <h2>Тест тапшырылды</h2>
        <p>Туура жооптор: {score}</p>
        <button className={cl.btn} onClick={handleRestart}>Кайра ойноо</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Суроо № {questionIndex + 1}</h2>
      <p>{questions[questionIndex].question}</p>
      <ul className={cl.list}>
        {questions[questionIndex].options.map((option, index) => (
          <li className={cl.li} key={index} onClick={() => handleAnswer(option)}>{option}</li>
        ))}
      </ul>
      {showHint && (
        <div>
          <p>Тушундурмо: {hintText}</p>
          <p>Туура жооп: {correctAnswer}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
