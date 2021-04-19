//heading
const heading = $('<div class="heading"><h1>Welcome to Double Jeopardy</h1></div')
$('.main-container').append(heading) 

//scores 
let score = 0;
const scoreDiv = $(`<div class="score">YOUR SCORE: $${score}</</div>`)
$('.main-container').append(scoreDiv)

//boxes
const boxes = $('<div class="boxes"></div>')
const dollars = ['$100', '$200', '$400', '$600', '$800']

for (let dollar of dollars) {
    for (let i = 0; i < 5; i++){
        const items = $(`<div class="items">${dollar}</div>`)
        boxes.append(items)
        $('.main-container').append(boxes)
}
}

//if item is clicked check grab innerText
$('.items').click((e)=> {
    const dollarClicked = e.target.innerText

    //check if $100 is clicked then grab all 
    if(dollarClicked == '$100'){
        let result = [];
        for(let item of QUESTIONS){
            if(item.value == '$100'){
                result.push(item.question)
            }
            console.log(result)
        }
    }

})