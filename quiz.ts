import inquirer  from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("-------Test Your Knowledge Of Computer Science --------"));

let csQuiz = await inquirer.prompt([
    {
        name:"q1", 
        type:"list",
        message:chalk.green.bold("Q1:What is the brain of the computer?"),
        choices:["CPU","RAM","ROM"]
    }
]);if (csQuiz.q1==="CPU"){
    console.log(`${csQuiz.q1} is correct answer`);
} else if (csQuiz.q1==="RAM","ROM") {
    console.log(  chalk.red `${csQuiz.q1} (Wrong Answer)`);
} ;
let csQuiz2 = await inquirer.prompt([
    {
        name:"q2",
        type:"list",
        message:chalk.green.bold("Q2:What is most popular operating system?"),
        choices:["macOS","Linux","Windows"]
    }
]);if (csQuiz2.q2==="Windows"){
    console.log(`${csQuiz2.q2} is correct answer`);
} else if (csQuiz2.q2==="macOP"," Linux") {
    console.log(chalk.red `${csQuiz.q2} Wrong Answer `);
} ;
let csQuiz3 = await inquirer.prompt([
    {
        name:"q3",
        type:"list",
        message:chalk.green.bold("Q3:What is the term for a website's address?"),
        choices:["URL","IP Address","Domain Name"]
    }
]);if (csQuiz3.q3==="URL"){
    console.log(`${csQuiz3.q3} is correct answer`);
} else if (csQuiz.q3==="IP Address","Domain Name") {
    console.log(chalk.red `${csQuiz3.q3} Wrong Answer `);
} ;

let csQuiz4 = await inquirer.prompt([
    {
        name:"q4",
        type:"list",
        message:chalk.green.bold("Q4:Which software is used for word processing "),
        choices:["Microsoft Excel" ,"Microsoft PowerPoint","Microsoft Word"]
    }
]);if (csQuiz4.q4==="Microsoft Word"){
    console.log(`${csQuiz4.q4} is correct answer`);
} else if (csQuiz4.q4=="Microsoft Excel" ,"Microsoft PowerPoint") {
    console.log(chalk.red `${csQuiz4.q4} Wrong Answer `);
} ;
let csQuiz5 = await inquirer.prompt([
    {
        name:"q5",
        type:"list",
        message:chalk.green.bold("Q5:Which component is responsible for storing data permanently?"),
        choices:["RAM","Hard Drive","SSD"]
    }
]);if (csQuiz5.q5==="Hard Drive"){
    console.log(`${csQuiz5.q5} is correct answer`);
} else if (csQuiz5.q5==="SSD","RAM") {
    console.log(chalk.red `${csQuiz5.q5} Wrong Answer `);
} ;
let csQuiz6 = await inquirer.prompt([
    {
        name:"q6",
        type:"list",
        message:chalk.green.bold("Q6:Which computer input device is used for cursor movement?"),
        choices:["Scanner","Mouse","Keyboard"]
    }
]);if (csQuiz6.q6==="Mouse"){
    console.log(`${csQuiz6.q6} is correct answer`);
} else if (csQuiz6.q==="Scanner","Keyboard") {
    console.log(chalk.red `${csQuiz6.q6} Wrong Answer `);
} ;
let csQuiz7 = await inquirer.prompt([
    {
        name:"q7",
        type:"list",
        message:chalk.green.bold("Q7:Which computer output device is used for printing?"),
        choices:["Monitor","Scanner","Printer"]
    }
]);if (csQuiz7.q7==="Printer"){
    console.log(`${csQuiz7.q7} is correct answer`);
} else if (csQuiz7.q7==="Scanner","Monitor") {
    console.log(chalk.red `${csQuiz7.q7} Wrong Answer `);
} ;
let csQuiz8 = await inquirer.prompt([
    {
        name:"q8",
        type:"list",
        message:chalk.green.bold("Q8:What is the term for a computer's main memory?"),
        choices:["RAM","ROM","SSD"]
}
]);if (csQuiz8.q8==="RAM"){
    console.log(`${csQuiz8.q8} is correct answer`);
} else if (csQuiz8.q8==="ROM","SSD") {
    console.log(chalk.red `${csQuiz8.q8} Wrong Answer `);
} ;
let csQuiz9 = await inquirer.prompt([
    {
        name:"q9",
        type:"list",
        message:chalk.green.bold("Q9:What is term of computer's processing unit?"),
        choices:["GPU","CPU","ROM"]
    }
]);if (csQuiz9.q9==="CPU"){
    console.log(`${csQuiz9.q9} is correct answer`);
} else if (csQuiz9.q9==="ROM","GPU") {
    console.log(chalk.red `${csQuiz9.q9} Wrong Answer `);
} ;
let csQuiz10 = await inquirer.prompt([
    {
        name:"q10",
        type:"list",
        message:chalk.green.bold("Q10: Which computer output device is used for dispalying images ?"),
        choices:["Monitor","Printer","Speakers"]
    }
]);if (csQuiz10.q10==="Monitor"){
    console.log(`${csQuiz10.q10} is correct answer`);
} else if (csQuiz10.q10==="Printer","Speakers") {
    console.log(chalk.red `${csQuiz10.q10} Wrong Answer `);
} ;

