import React, { useState, useEffect } from "react";
import "../App.css"
// import '../Components/QuestionBox.jsx'
// import './Questionpage.jsx'
import './Questionpage.jsx'


function Resultpage(props) {
  const result = props.Score
  const totalQuestion = 5

  // this changes the color of elements according to the theme 
  useEffect(()=>{
    const body = document.querySelector("body");
    let resultBox = document.querySelector(".resultBox")
    if(props.bgColor){
      resultBox.style.backgroundColor = "#E6DCB9"

    }else{
      resultBox.style.backgroundColor = "rgba(031, 229, 229, 0.44)"
      body.style.color = 'white';
    }
  })
  

  return (
    <>
    <div className="resultpage">

    
    <div className="header2" >
        <span id="title">Quizzify</span>
    </div>
    <div className="resultBox">
      <h2>Final Results</h2>
    {/* this shows the no of correct answers  */}
    <div className='score'>{result} out of {totalQuestion} correct - {(result/totalQuestion)*100}% </div>
    {/* try again button  */}
    <button id='TryBtn' onClick={props.reset}>Try Again</button>
    </div>
    </div>
    {/* <div className='report'>{result} out of {totalQuestion} correct - {(result/totalQuestion)*100}%  */}

    

    
    
    </>
  )
}

export default Resultpage