const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const HTML = require("./src/htmlGenetator")




let team = [];

const commonQuestions = [
     {
         type: "input",
         name: "id",
         message: "Enter the employee ID: "
     },
     {
          type: "input",
          name: "name",
          message: "What is the employee name?: ",
          validate: validateInput
     },
     {
         type: "input",
         name: "email",
         message: "Enter the employee email address: ",
         validate: validateEmail
     },
     {
          type: "list",
          name: "role",
          message: "What what is the employee role:",
          choices: [
               "Engineer",
               "Intern",
               "Manager"
          ]
     }
];

const engineerQuestion = [{
     type: "input",
     name: "github",
     message: "What is the employee's github account?",
     validate: validateInput
}];

const internQuestion = [{
     type: "input",
     name: "school",
     message: "What school is the employee attending?",
     validate: validateInput
}];

const managerQauestion = [{
     type: "input",
     name: "officeNumber",
     message: "What is the employee's office number?:",
     validate: validateInput
}];

const continueAdding = [{
     type: "list",
     name: "finish",
     message: "Would you like to continue?",
     choices: [
         "Yes",
         "No"
     ]
 }]

function validateInput(inputValue){
     if(inputValue == ""){
          return "Input cannot be empty.";
     }else{
          return true
     }
}

function validateEmail(value){
     let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
     if(email){
         return true;
     }else{
         return "Invalid Email."
     }
}

async function askQuestions(){
     let answersCommonQuestions = await inquirer.prompt(commonQuestions)

     if(answersCommonQuestions.role === "Manager"){
          let answerManagerQuestions = await inquirer.prompt(managerQauestion)
          team.push(new Manager(answersCommonQuestions.id, answersCommonQuestions.name, answersCommonQuestions.email, answerManagerQuestions.officeNumber))
     }else if(answersCommonQuestions.role === "Engineer"){
          let engineerAnswer = await inquirer.prompt(engineerQuestion)
          team.push(new Engineer(answersCommonQuestions.id, answersCommonQuestions.name, answersCommonQuestions.email, engineerAnswer.github))
     }else if(answersCommonQuestions.role === "Intern"){
          let internAnswers = await inquirer.prompt(internQuestion)
          team.push(new Intern(answersCommonQuestions.id, answersCommonQuestions.name, answersCommonQuestions.email, internAnswers.school))
     }

     let continueQuestions = await inquirer.prompt(continueAdding);
     if(continueQuestions.finish === "Yes"){
          askQuestions();
     }else{
          HTML(team)
          console.log("BUILD HTML complete")
     }
}

askQuestions();