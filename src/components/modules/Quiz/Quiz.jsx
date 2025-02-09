import React, { useState, useEffect } from "react";
import styles from "./QuizPage.module.css"; // Import the CSS Module

const staticQuestions = [
  {
    id: 1,
    text: "Which of the following is a regular language?",
    options: [
      "The set of all prime numbers",
      "The set of all strings over alphabet {a, b} of even length",
      "The set of all strings with an equal number of a's and b's",
      "The set of all palindromes",
    ],
    correctAnswer: "The set of all strings over alphabet {a, b} of even length",
    type: "multiple-choice",
  },
  {
    id: 2,
    text: "What is a DFA?",
    options: [
      "A machine that can make decisions in non-deterministic ways",
      "A machine with a finite number of states and can process an input string deterministically",
      "A machine with infinite states",
      "A machine that can accept any context-sensitive language",
    ],
    correctAnswer:
      "A machine with a finite number of states and can process an input string deterministically",
    type: "multiple-choice",
  },
];



const QuizPage = () => {
  const [questions] = useState(staticQuestions);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [userPoints, setUserPoints] = useState(0);
  const [quizHistory, setQuizHistory] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const lastQuizDate = localStorage.getItem("lastQuizDate");
    const today = new Date().toISOString().split("T")[0];

    if (lastQuizDate === today) {
      setStreak((prevStreak) => prevStreak + 1);
    } else {
      setStreak(0);
    }

    localStorage.setItem("lastQuizDate", today);
  }, []);

  const handleAnswer = (questionId, selectedAnswer) => {
    const question = questions.find((q) => q.id === questionId);
    let isCorrect = false;

    if (question.type === "multiple-choice" || question.type === "true-false") {
      isCorrect = selectedAnswer === question.correctAnswer;
    } else if (question.type === "multiple-correct-choice") {
      isCorrect =
        question.correctAnswers.every((ans) => selectedAnswer.includes(ans)) &&
        selectedAnswer.every((ans) => question.correctAnswers.includes(ans));
    } else if (question.type === "image-based") {
      isCorrect = selectedAnswer === question.correctAnswer;
    }

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setUserPoints((prevPoints) => prevPoints + 5);
    }

    setQuizHistory((prevHistory) => [
      ...prevHistory,
      { questionId, selectedAnswer, isCorrect, date: new Date().toISOString() },
    ]);

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true); // Mark quiz as completed
    }
  };

  const getPerformanceAnalytics = () => {
    const correctAnswers = quizHistory.filter((item) => item.isCorrect).length;
    const totalQuestions = quizHistory.length;
    const accuracy = totalQuestions
      ? ((correctAnswers / totalQuestions) * 100).toFixed(2)
      : 0;

    return {
      accuracy,
      totalQuestions,
      correctAnswers,
      incorrectAnswers: totalQuestions - correctAnswers,
    };
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case "multiple-choice":
        return (
          <div key={question.id} className={styles.questions}>
            <h3>{question.text}</h3>
            {question.options.map((option, idx) => (
              <button
                key={idx}
                className={styles.button}
                onClick={() => handleAnswer(question.id, option)}
              >
                {option}
              </button>
            ))}
          </div>
        );
      case "true-false":
        return (
          <div key={question.id} className={styles.questions}>
            <h3>{question.text}</h3>
            <button
              className={styles.button}
              onClick={() => handleAnswer(question.id, "True")}
            >
              True
            </button>
            <button
              className={styles.button}
              onClick={() => handleAnswer(question.id, "False")}
            >
              False
            </button>
          </div>
        );
      case "multiple-correct-choice":
        return (
          <div key={question.id} className={styles.questions}>
            <h3>{question.text}</h3>
            {question.options.map((option, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  value={option}
                  onChange={(e) =>
                    handleAnswer(question.id, [
                      ...(e.target.checked ? [option] : []),
                    ])
                  }
                />
                {option}
              </label>
            ))}
          </div>
        );
      case "image-based":
        return (
          <div key={question.id} className={styles.questions}>
            <h3>{question.text}</h3>
            <img src={question.imageUrl} alt="Question" />
            <button
              className={styles.button}
              onClick={() => handleAnswer(question.id, "Eiffel Tower")}
            >
              Eiffel Tower
            </button>
            <button
              className={styles.button}
              onClick={() => handleAnswer(question.id, "Statue of Liberty")}
            >
              Statue of Liberty
            </button>
          </div>
        );
      default:
        return <div>Unknown question type</div>;
    }
  };

  const performance = getPerformanceAnalytics();

  const startQuiz = () => {
    setQuizStarted(true);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserPoints(0);
    setQuizHistory([]);
  };

  const retakeQuiz = () => {
    startQuiz(); // Reset the quiz to start again
  };

  return (
    <div className={styles.container}>
      {!quizStarted && !quizCompleted && (
        <button className={styles.button} onClick={startQuiz}>
          Start Quiz
        </button>
      )}

      {quizStarted && !quizCompleted && (
        <div>
          <h2 className={styles.title}>Question {currentQuestionIndex + 1}</h2>
          {renderQuestion(questions[currentQuestionIndex])}
        </div>
      )}

      {quizCompleted && (
        <div>
          <h2 className={styles.title}>Quiz Completed</h2>
          <p className={styles.score}>Score: {score}</p>
       
          <p className={styles.points}>Points: {userPoints}</p>

          <div className={styles.performance}>
            <h3>Performance Analytics:</h3>
            <p>Accuracy: {performance.accuracy}%</p>
            <p>Correct Answers: {performance.correctAnswers}</p>
            <p>Incorrect Answers: {performance.incorrectAnswers}</p>
          </div>

          <div className={styles.history}>
            <h3>Quiz History</h3>
            <ul>
              {quizHistory.map((item, index) => {
                const question = questions.find(
                  (q) => q.id === item.questionId
                );
                const isCorrect = item.isCorrect ? "Correct" : "Incorrect";
                const reason = item.isCorrect
                  ? `You answered correctly because the correct answer was: "${question.correctAnswer}"`
                  : `Incorrect. The correct answer was: "${question.correctAnswer}"`;

                return (
                  <div key={index} className={styles.historyItem}>
                    <h4>{question.text}</h4>
                    <p>Your answer: {item.selectedAnswer}</p>
                    <p>Status: {isCorrect}</p>
                    <p>{reason}</p>
                  </div>
                );
              })}
            </ul>
          </div>

          <button className={styles.button} onClick={retakeQuiz}>
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
