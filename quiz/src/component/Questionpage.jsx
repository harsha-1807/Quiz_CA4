import React, { useState, useEffect } from "react";
import Resultpage from "./Resultpage";
import questions from "./Questions";
import "../App.css"
// import sun from "../assets/Sun.png";
// import moon from "../assets/MoonStars.png";

export default function Questionpage() {

  //number of question
  const [question, setquestion] = useState(0);
  //score of the player
  const [Score, setScore] = useState(0);
  //for changing theme
  const [bgColor, setbgColor] = useState(false);

  //function to try again
  const reset = () => {
    setScore(0);
    setquestion(0);
  };

  //function for light and dark mode
  const themechange = () => {
    setbgColor((bgColor) => !bgColor);
  };

  const QuestionChange = (Correct) => {
  //function for changing the questions
    if (Correct) {
      setScore(Score + 1);
    }
    setquestion(question + 1);
  };
  //This useEffect will be executed when score changes
  useEffect(() => {
    console.log(Score);
  }, [Score]);

  useEffect(() => {
    const body = document.querySelector("body");
    let QuestionBox1 = document.querySelector(".QuestionBox1");
    
    //for theme change
    if (bgColor) {
      body.style.setProperty("background-color", "#CDC09C", "important");
      body.style.color = "black";
      QuestionBox1.style.backgroundColor = "#E6DCB9";
    } else {
      // let title = document.querySelector(".title")
      body.style.setProperty("background-color", "#000", "important");
      body.style.color = "white";
      QuestionBox1.style.backgroundColor = "rgba(131, 129, 129, 0.34)";

    }
  }, [bgColor]);

  return (
    <>
      <div id="container">
        {question < 5 ? (
          <div className="QuestionBox">
            <div className="header">
              <span id="title">Quizzify</span>

              {
                //theme button
                <button className="theme" onClick={themechange}>
                  {bgColor ? "🌙" : "🌤️"}
                </button> 
              }
            </div>

            <div className="QuestionBox1">
              {
                // incresing question number respectively
                <h4>
                  Question:{question + 1} out of 5
                </h4> 
              }
              {
                <h3 id="Question">
                  {questions[question].text}
                </h3>
              }
              <div id="options">
                {questions[question].options.map((e, i) => (
                  <button
                    className="optBtn"
                    key={i}
                    onClick={() => QuestionChange(e.Correct)}
                  >
                    {e.text}
                  </button>
                ))}
              </div>
              {/* // highight buttons  */}
              <div className="highlight">
                <button
                  id="hightlightBtn"
                  onClick={() => {
                    const element = document.getElementById("Question");
                    element.style.color = "#09C3AB";
                  }}
                >
                  HIGHLIGHT
                </button>
                <button
                  id="unhighlightBtn"
                  onClick={() => {
                    const element = document.getElementById("Question");
                    if (bgColor) {
                      element.style.color = "#000";
                    } else {
                      element.style.color = "white";
                    }
                  }}
                >
                  REMOVE HIGHLIGHT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
          
          <Resultpage Score = {Score} reset = {reset} bgColor = {bgColor}/>
          
          </>
        )}
      </div>
    </>
  );
}


