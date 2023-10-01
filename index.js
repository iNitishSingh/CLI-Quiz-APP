const readlineSync = require('readline-sync')
let score=0
const database={
    data:[
        {
            question:`let a={},b={}
            console.log(a==b)
            console.log(a===b)`,
            Option:{
                a:"false false",
                b:"false true",
                c:"true false",
                d:"true false"
            },
            correctAnswer:"a"
        },
        {
            question:"method chaning is possible with for each",
            Option:{
                a:"yes",
                b:"No",

            },
            correctAnswer:"b"
        },
        {
            question:"obbject.assign(targer,source)created which type of copy",
            Option:{
                a:"Deep Copy",
                b:"Shallow Copy",
                c:"Nested Copy",
                d:"Creates a new reference"
            },
            correctAnswer:"b"
        }
    ]
}

const leaderbord={
    data:[
        { name: 'Nitish', score: 3},
        { name: 'Ritik', score: 4},
        { name: 'Khusboo', score: 5 },
        { name: 'vanshika', score: 1 }
    ]
}

function login(){
    let userName=readlineSync.question('Please enter your name')
    return userName
}

function playGames(userAnswer,correctAnswer){
    let score=0
    if(userAnswer===correctAnswer){
        console.log("!!correctAnswer!!")
        score++
       
    }
    else{
        console.log("!!wrong!!")
        console.log(`correct answer is ${correctAnswer}:\t`)
    }
}

function showQuestionAndOption(){
    
    for(let i=0;i<database.data.length;i++){
        console.log(`\nQ${i+1}.${database.data[i]?.question}\n`)
        for(let key in database.data[i].Option){
            console.log(`${key}-${database.data[i].Option[key]}\n`)
        }
        let userAnswer=readlineSync.question('\nPlease enter the answer\n')
        playGames(userAnswer,database.data[i].correctAnswer)

    }
}

function highScorer(userName,score){
    leaderbord.data.push({name:userName,score:score})
    let scorebordList=leaderbord.data.sort((a,b)=> b.score-a.score )
    console.log("\n *******Leader Bord*******\n")
    for(let leader of scorebordList){
        console.log(`${leader.name} - ${leader.score}`)
    }

}

let userName=login();
showQuestionAndOption();
highScorer(userName,score)
