import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who is the father of Computers?",
      answers: [
        {
          text: "James Gosling",
          correct: false,
        },
        {
          text: "Charles Babbage",
          correct: true,
        },
        {
          text: "Dennis Ritchie",
          correct: false,
        },
        {
          text: "Bjarne Stroustrup",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answers: [
        {
          text: "Central Processing Unit",
          correct: true,
        },
        {
          text: "Computer Processing Unit",
          correct: false,
        },
        {
          text: "Computer Principle Unit",
          correct: false,
        },
        {
          text: "Control Processing Unit",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "A computer program that converts assembly language to machine language is?",
      answers: [
        {
          text: "Compiler",
          correct: false,
        },
        {
          text: "Interpreter",
          correct: false,
        },
        {
          text: "Assembler",
          correct: true,
        },
        {
          text: "Comparator",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which of the following computer language is written in binary codes only?",
      answers: [
        {
          text: "pascal",
          correct: false,
        },
        {
          text: "machine language",
          correct: true,
        },
        {
          text: "C",
          correct: false,
        },
        {
          text: "C#",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of the following is the brain of the computer?",
      answers: [
        {
          text: "Central Processing Unit",
          correct: true,
        },
        {
          text: "Memory",
          correct: false,
        },
        {
          text: "Arithmetic and Logic unit",
          correct: false,
        },
        {
          text: "Control unit",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which of the following is the smallest unit of data in a computer?",
      answers: [
        {
          text: "Byte",
          correct: false,
        },
        {
          text: "Bit",
          correct: true,
        },
        {
          text: "Nibble",
          correct: false,
        },
        {
          text: "KB",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the following unit is responsible for converting the data received from the user into a computer understandable format?",
      answers: [
        {
          text: "Output Unit",
          correct: false,
        },
        {
          text: "Arithmetic & Logic Unit",
          correct: false,
        },
        {
          text: "Input Unit",
          correct: true,
        },
        {
          text: "Memory Unit",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which of the following are physical devices of a computer?",
      answers: [
        {
          text: "Hardware",
          correct: true,
        },
        {
          text: "Software",
          correct: false,
        },
        {
          text: "System Software",
          correct: false,
        },
        {
          text: "Package",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of the following devices provides the communication between a computer and the outer world?",
      answers: [
        {
          text: "Compact",
          correct: false,
        },
        {
          text: "I/O",
          correct: true,
        },
        {
          text: "Drivers",
          correct: false,
        },
        {
          text: "Comparator",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who is the father of C language?",
      answers: [
        {
          text: "Steve Jobs",
          correct: false,
        },
        {
          text: "James Gosling",
          correct: false,
        },
        {
          text: "Rasmus Lerdorf",
          correct: false,
        },
        {
          text: "Dennis Ritchie",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Who invented C++?",
      answers: [
        {
          text: "Dennis Ritchie",
          correct: false,
        },
        {
          text: "Ken Thompson",
          correct: false,
        },
        {
          text: "Brian Kernighan",
          correct: false,
        },
        {
          text: "Bjarne Stroustrup",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the following is used for comments in C++?",
      answers: [
        {
          text: "// comment */",
          correct: false,
        },
        {
          text: "// comment",
          correct: false,
        },
        {
          text: "both // comment or /* comment */",
          correct: true,
        },
        {
          text: "// comment */",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "RAM is also called as?",
      answers: [
        {
          text: "Virtual memory",
          correct: false,
        },
        {
          text: "Volatile memory",
          correct: true,
        },
        {
          text: "Non volatile memory",
          correct: false,
        },
        {
          text: "Cache memory",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "The two kinds of main memory are?",
      answers: [
        {
          text: "RAM and ROM",
          correct: true,
        },
        {
          text: "CDs and DVDs",
          correct: false,
        },
        {
          text: "Primary and secondary",
          correct: false,
        },
        {
          text: "Direct and sequential",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Control unit of a digital computer is often called as the?",
      answers: [
        {
          text: "System center",
          correct: false,
        },
        {
          text: "Input center",
          correct: false,
        },
        {
          text: "Logical center",
          correct: false,
        },
        {
          text: "Nervous center",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 && 
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
