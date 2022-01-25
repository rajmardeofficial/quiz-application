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
    question: " What is the theme for Independence Day celebrations 2021?",
    option1: "Self-reliant India",
    option2: "Promote India's culture",
    option3: "Nation First, Always First",
    option4: "None of the above",
    ans: "ans3",
  },
  {
    question: " What is the theme for Independence Day celebrations 2021?",
    option1: "Self-reliant India",
    option2: "Promote India's culture",
    option3: "Nation First, Always First",
    option4: "None of the above",
    ans: "ans3",
  },
  {
    question: " What is the theme for Independence Day celebrations 2021?",
    option1: "Self-reliant India",
    option2: "Promote India's culture",
    option3: "Nation First, Always First",
    option4: "None of the above",
    ans: "ans3",
  },
  {
    question: " What is the theme for Independence Day celebrations 2021?",
    option1: "Self-reliant India",
    option2: "Promote India's culture",
    option3: "Nation First, Always First",
    option4: "None of the above",
    ans: "ans3",
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

let countQuestion = 0;


let loadQuestion = () => {
  questionText.innerText = questionsList[countQuestion].question;
  option1.innerText = questionsList[countQuestion].option1;
  option2.innerText = questionsList[countQuestion].option2;
  option3.innerText = questionsList[countQuestion].option3;
  option4.innerText = questionsList[countQuestion].option4;
  console.log(countQuestion);
};

loadQuestion();

//anynomous function

nextBtn.addEventListener("click", () => {
  //increment tha value of countQuestion variable to switch question
  countQuestion++;
  console.log(countQuestion);
});
