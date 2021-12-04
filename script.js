const quizDB = [
    { question:"Q1. What is Javascript?",
      a:"Scripting Language",
      b:"Programming Language",
      c:"Database",
      d:"Sofware",
      ans:"ans1"
    },
    {  question:"Q2. What is Javascript?",
    a:"Scripting Language",
    b:"Programming Language",
    c:"Database",
    d:"Sofware",
    ans:"ans2"
    },
    { question:"Q3. What is Javascript?",
    a:"Scripting Language",
    b:"Programming Language",
    c:"Database",
    d:"Sofware",
    ans:"ans1"
    },
    {  question:"Q4. What is Javascript?",
    a:"Scripting Language",
    b:"Programming Language",
    c:"Database",
    d:"Sofware",
    ans:"ans1"
    },
    { question:"Q5. What is Javascript?",
    a:"Scripting Language",
    b:"Programming Language",
    c:"Database",
    d:"Sofware",
    ans:"ans1"
    },
    { question:"Q6. What is Javascript?",
    a:"Scripting Language",
    b:"Programming Language",
    c:"Database",
    d:"Sofware",
    ans:"ans1"
    }
    ];

    
    //variables 
    var Question = document.querySelector('.question');
    var option1 = document.querySelector('#Option1');
    var option2 = document.querySelector('#Option2');
    var option3 = document.querySelector('#Option3');
    var option4 = document.querySelector('#Option4');
    var optionTicked = document.querySelectorAll('.answer');
    var submitButton = document.querySelector('#submit');
    var showScoree = document.querySelector('#showScore');
    var Score = document.querySelector('#score');
    let count = 0;
    var score=0;
    //event
    submitButton.addEventListener('click' , afterSubmit);
   // optionTicked.addEventListener('click' , getAnswer());
   loadNextQuestion();
    function  loadNextQuestion () {
      var quizObj = quizDB[count];
      Question.innerHTML = quizObj.question;
      option1.innerHTML = quizObj.a;
      option2.innerHTML = quizObj.b;
      option3.innerHTML = quizObj.c;
      option4.innerHTML = quizObj.d;

    }

    function getAnswer(){
      let answer;
      optionTicked.forEach((curElement) => {
        if(curElement.checked){
          answer = curElement.id;           
        }
      }    
);
    return answer; 
    }
  
    //functions
    function afterSubmit (){
     const getAnswers = getAnswer();
     if(getAnswers == quizDB[count].ans){
       score++;
     }
     deselectAll();
     count++;
     if(count<quizDB.length)
       loadNextQuestion();
       else{
        showScoree.style.display ="block";
        showScoree.innerHTML =  `
          <span >You scored ${score}/${quizDB.length}.</span>
          <button onclick="location.reload()">Play Again</button>
        
        `;
       }
    }
    function deselectAll(){
      optionTicked.forEach((curElem) => {
       if(curElem.checked){
        curElem.checked = false;
       }

      })
    }
    