//heading
const mainContainer = $('.main-container')
const heading = $('<div class="heading"><h1>Welcome to Double Jeopardy</h1></div')
mainContainer.append(heading) 

//check local storage
const storedScore = localStorage.getItem('scoreText')
//scores
let score = 0;
let convertedScore = '$' + score
const scoreDiv = $(`<div class="score">YOUR SCORE: ${convertedScore}</</div>`);
mainContainer.append(scoreDiv);

if (storedScore !== null) {
    score = Number(storedScore) 
    console.log(storedScore)
    localStorage.setItem('scoreText', score)
    $('.score').text(score)
}


//boxes
const boxes = $('<div class="boxes"></div>')
const dollars = ['$100', '$200', '$400', '$600', '$800']

for (let dollar of dollars) {
    for (let i = 0; i < 5; i++){
        const items = $(`<div class="items">${dollar}</div>`)
        boxes.append(items)
        mainContainer.append(boxes)
}
}

//if item is clicked check which one and grab innerText
$('.items').click((e)=> {
    const dollarClicked = e.target.innerText

    //check if $100 is clicked
    if (dollarClicked == '$100') {    
        //create empty array to hold results with objects with value of $100
        let result = [];
        
        //loop through the object and push into the empty array
        for(let item of QUESTIONS){
            if(item.value == '$100'){
                result.push(item)
            } 
        }

        //random results generator
        const randomResult = result[Math.floor(Math.random() * result.length)]
        const randomAnswer = randomResult.answer
        const randomQuestion = randomResult.question
        const randomValue = randomResult.value

        //assigning the random answer to global answers variable
        correctAnswer = randomAnswer
        chosenValue = randomValue
        console.log(randomResult)

        //adding random questions to the DOM
        const questions = $(`<div class="questions">${randomQuestion}</div>`)       
        $('.answer-container').before(questions)
    }

    //check if $200 is clicked
    if (dollarClicked == '$200') {      
        let result = [];

        for(let item of QUESTIONS){
            if(item.value == '$200'){
                result.push(item)
            } 
        }
        //random results generator
        const randomResult = result[Math.floor(Math.random() * result.length)]
        const randomAnswer = randomResult.answer
        const randomQuestion = randomResult.question
        const randomValue = randomResult.value

        //assigning the random answer to global variables
        correctAnswer = randomAnswer
        chosenValue = randomValue
        console.log(randomResult)

        //adding random questions to the DOM
        const questions = $(`<div class="questions">${randomQuestion}</div>`)       
        $('.answer-container').before(questions)     
    }
    //check if $400 is clicked
    if (dollarClicked == '$400') {
        let result = [];

        for(let item of QUESTIONS){
            if(item.value == '$400'){
                result.push(item)
            } 
        }
        //random results generator
        const randomResult = result[Math.floor(Math.random() * result.length)]
        const randomAnswer = randomResult.answer
        const randomQuestion = randomResult.question
        const randomValue = randomResult.value

        //assigning the random answer to global variable
        correctAnswer = randomAnswer
        chosenValue = randomValue
        console.log(randomResult)

        //adding random questions to the DOM
        const questions = $(`<div class="questions">${randomQuestion}</div>`)       
        $('.answer-container').before(questions)
      
    }
    //check if $600 is clicked
    if (dollarClicked == '$600') {     
        let result = [];

        for(let item of QUESTIONS){
            if(item.value == '$600'){
                result.push(item)
            } 
        }
        //random results generator
        const randomResult = result[Math.floor(Math.random() * result.length)]
        const randomAnswer = randomResult.answer
        const randomQuestion = randomResult.question
        const randomValue = randomResult.value

        //assigning the random answer to global variable
        correctAnswer = randomAnswer
        chosenValue = randomValue
        console.log(randomResult)

        //adding random questions to the DOM
        const questions = $(`<div class="questions">${randomQuestion}</div>`)       
        $('.answer-container').before(questions)
     
    }
    //check if $800 is clicked
    if (dollarClicked == '$800') {      
        let result = [];

        for(let item of QUESTIONS){
            if(item.value == '$800'){
                result.push(item)
            } 
        }
        //random results generator
        const randomResult = result[Math.floor(Math.random() * result.length)]
        const randomAnswer = randomResult.answer
        const randomQuestion = randomResult.question
        const randomValue = randomResult.value

        //assigning the random answer to global variable
        correctAnswer = randomAnswer
        chosenValue = randomValue
        console.log(randomResult)

        //adding random questions to the DOM
        const questions = $(`<div class="questions">${randomQuestion}</div>`)       
        $('.answer-container').before(questions)   
    }
})

//Answer div
const answer = $(
`<fieldset class="answer-container">Your Answer:
<input class="input" type="text">
<input class="submit-btn" type="submit" value="Submit">
</fieldset>`)
mainContainer.append(answer)

//global variables to compare answers with when submit button is clicked
let correctAnswer = '';
let chosenValue = ''
let convertedValue = chosenValue.split('$').join('')

//submit button click action
$('.submit-btn').click(() => {
    const userAnswer = $('.input').val()
    const prevScore = localStorage.getItem('scoreText')
    console.log(userAnswer)

    if (correctAnswer.toLocaleLowerCase() == userAnswer.toLocaleLowerCase()) {
        
        $('.questions').text('CORRECT! YOU SCORED ' + chosenValue)
        // $('.answer-container').text()
        localStorage.setItem('scoreText', convertedValue)
        score += convertedValue
    } else {
         $('.questions').text('Wrong Answer!!!')
    }
})
    
