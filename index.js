function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var res=document.getElementById('res');
    var quiz=document.getElementById("quiz");
    if (q1=="Sagittarius A") {c++}
    if (q2=="Atom") {c++}
    if (q3=="Galileo") {c++}
    if (q4=="Thermometer") {c++}
    if (q5=="Right Angle Triangle") {c++}
    quiz.style.display="none";

    if (c<=1) {
      res.textContent=`Your Result is ${c}. No`
    } else if (c==2 || c==3) {
      res.textContent=`Your Result is ${c}. Maybe`
    } else {
      res.textContent=`Your Result is ${c}. Yes`
    }
}