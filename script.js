// let submit = document.getElementById('submit')

// let answers = document.querySelectorAll('.answer')

// function getAnswer(){
//     answers.forEach((answer)=>{
//         if(answer.checked){
//             console.log(answer, answer.id);
//         }
//     })
// }

let questionsList = [
  {
    question: "What is the theme for Independence Day celebrations 2021?",
    option1: "Self-reliant India",
    option2: "Promote India's culture",
    option3: "Nation First, Always First",
    option4: "None of the above",
    ans: "ans3",
  },
  {
    question: `The famous quote "a tryst with destiny" is given by`,
    option1: "Dr. BR Ambedkar",
    option2: "Pt. Jawaharlal Nehru",
    option3: "Mahatma Gandhit",
    option4: "Abdul Kalam Azad",
    ans: "ans2",
  },
  {
    question: "What is the full form of HTML",
    option1: "Hello To My Land",
    option2: "Hyper Text Markup Language",
    option3: "Hyper Text Makup Language",
    option4: "Hello To My theme",
    ans: "ans2",
  },
  {
    question: "What is the full form of CSS?",
    option1: "Cascading Style Sheets",
    option2: "Cascading Style Show",
    option3: "Counter Strike ",
    option4: "None of the above",
    ans: "ans1",
  },
  {
    question: "What is Backend ?",
    option1: "Part os Software Development",
    option2: "Belongs to machine parts",
    option3: "It is back of the car",
    option4: "None of the above",
    ans: "ans1",
  },
];

// variable for selecting h2 question heading using DOM
// took a reference of h2
let questionText = document.getElementById("questionId");

// option or input reference using DOM
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

//next button reference

let nextBtn = document.getElementById("next");

//reference for scoreDiv

const scoreDiv = document.getElementById("scoreDiv");

// reference for replay

const replayBtn = document.getElementById("replay");

// reference for score Text

let scoreText = document.getElementById("scoreText");

let countQuestion = 0;

let score = 0;

let loadQuestion = () => {
  questionText.innerText = questionsList[countQuestion].question;
  option1.innerText = questionsList[countQuestion].option1;
  option2.innerText = questionsList[countQuestion].option2;
  option3.innerText = questionsList[countQuestion].option3;
  option4.innerText = questionsList[countQuestion].option4;
};

loadQuestion();

//anynomous function

nextBtn.addEventListener("click", () => {
  //increment tha value of countQuestion variable to switch question
  countQuestion++;
  console.log(countQuestion);
  if (countQuestion < questionsList.length) {
    loadQuestion();
  } else {
    scoreDiv.classList.remove("hide");
    nextBtn.classList.add("hide");
    scoreText.innerHTML = `
      Your Score is ${score}
    `;
  }
});
