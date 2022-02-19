var myQuestions=[
    {
    question:"What sport is best known as the 'king of sports'?",
    a:"Soccer",
    b:"Basketball",
    c:"American football",
    answers:"Soccer"
},
{
   question:"Who has won more tennis grand slam titles ?",
   a:"Maria Sharapova",
   b:"Serena Williams",
   c:"Martina Navratilova",
   answers:"Serena Williams"
},
{
    question:"Which boxer fought against Muhammad Ali and won ?",
    a:"Mike Tyson",
    b:"Floyd Mayweather",
    c:"Joe Frazier",
    answers:"Joe Frazier"
},
{
   question:"what team won most titles of uefa champions league ?",
   a:"AC Milan", 
   b:"Real Madrid ", 
   c:"Bayern Munich",
   answers:"Real Madrid "
},
{
    question:"Who was the youngest player to score 10,000 points in the NBA ?",
    a:"Stephan Curry",
    b:"Lebron James",
    c:"Michael Jordan ",
    answers:"Lebron James"
},
{
    question:"Who has won the most ballons d'or ?",
    a:"Lionel Messi",  
    b:"Cristiano Ronaldo ",
    c:"Marco van Basten",
    answers:"Lionel Messi"
},
{
    question:"What was the first city to host the Olympics twice ?",
    a:"Tokyo", 
    b:"Berlin", 
    c:"Paris",
    answers:"Paris"
},
{
    question:"What team has the most NBA titles ?",
    a:"Chicago bulls",
    b:"Golden State Warriors",
    c:"Boston Celtics",
    answers:"Boston Celtics"
},
{
    question:"Where did the first ancient Olympic games take place ?",
    a:"Poland", 
    b:"Greece",
    c:"Japan",
    answers:"Greece"
},
{
    question:"When an Olympic athlete wins first place, what color medal do they get ?",
    a:"Gold",
    b:"Bronze ", 
    c:"Silver ",
    answers:"Gold"
}
];

var answers=["a","b","c","b","b","a","c","c","b","a"];

var questIndex=0;
var correctAnswer=0;

var test,statuse,questions,choA,choB,choC


questions=myQuestions[questIndex].question

choA=myQuestions[questIndex].a
choB=myQuestions[questIndex].b
choC=myQuestions[questIndex].c


function getQuestion(){
    test=document.getElementById("test1")
    statuse=document.getElementById("ques1")
    if(questIndex>=myQuestions.length){
        test.innerHTML="<h1>Your result "+correctAnswer+" from "+myQuestions.length+"</h1>"
        statuse.innerHTML="Quiz game is over"

        questIndex=0;
        correctAnswer=0;
        return false
        return
    }
}


function runder(){
    test=document.getElementById("test1")
    statuse=document.getElementById("ques1")
    if(questIndex>myQuestions.length-1){
        test.innerHTML="<h1>Your result "+correctAnswer+" from "+myQuestions.length+"</h1>"
        statuse.innerHTML="Quiz game is over"

        questIndex=0;
        correctAnswer=0;
        return false
        return
    } 

    statuse=document.getElementById("test1")
    statuse.innerHTML="<h2 id='nb_question'>Question"+" "+(questIndex+1)+" "+"of "+ myQuestions.length +'</h2>'
    questions=myQuestions[questIndex].question

choA=myQuestions[questIndex].a
choB=myQuestions[questIndex].b
choC=myQuestions[questIndex].c


statuse.innerHTML+="<h2>"+questions+"</h2>"
statuse.innerHTML+="<label><input id='choice1"+questIndex+"' type='checkbox' name='choices' value='a'><span>"+choA+"</span><label><br>"
statuse.innerHTML+="<label><input id='choice2"+questIndex+"' type='checkbox' name='choices' value='b'><span>"+choB+"</span><label><br>"
statuse.innerHTML+="<label><input id='choice3"+questIndex+"' type='checkbox' name='choices' value='c'><span>"+choC+"</span><label><br>"
statuse.innerHTML+="<button onclick='nextAnswer()' id='btn1'>Next</button>"
}
getQuestion()
runder()


function nextAnswer(){
var checkValue=$("input:checked").val()

if(answers[questIndex]===checkValue){
 correctAnswer=correctAnswer+1
}

questIndex++
runder()
}





























window.addEventListener("load",getQuestion)