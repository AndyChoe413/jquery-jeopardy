//heading
const mainContainer = $('.main-container')
const heading = $('<div class="heading"></div')
mainContainer.append(heading)


//score content
let score = 0;
const scoreDiv = $(`<div class="score-ctn">YOUR SCORE: 
<span class = "score">$${score}</span>
</div>`);
mainContainer.append(scoreDiv);

let storedScore = localStorage.getItem('scoreText')
if (storedScore !== null) {  
    score = Number(storedScore)
}

localStorage.setItem('score', score)
$('.score').text(`$${score}`)

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
`<div class="answer-container">Your Answer:
<input class="input" type="text">
<input class="submit-btn" type="submit" value="Submit">
</div>`)
mainContainer.append(answer)

//global variables to compare answers with when submit button is clicked
let correctAnswer = '';
let chosenValue = ''

//submit button click action
$('.submit-btn').click(() => {
    const userAnswer = $('.input').val()
    let get = localStorage.getItem('scoreText')
    let convertedValue = chosenValue.split('$').join('')

    if (correctAnswer.toLocaleLowerCase() == userAnswer.toLocaleLowerCase()) {
        
        $('.questions').text('CORRECT! YOU SCORED ' + chosenValue)
        let total = Number(convertedValue) + Number(get)
        console.log(total)
        localStorage.setItem('scoreText', total)

        score = Number(total)

        setTimeout(() => {
            location.reload()
        }, 3000)
        
    } else {
        $('.questions').text('Wrong Answer!!!')

        setTimeout(() => {
            location.reload()
        }, 3000)
    }
})
    
