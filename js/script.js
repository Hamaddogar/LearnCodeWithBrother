

function quizHundler(event) {
    event.preventDefault()
    var marks = 0
    var question1 = document.querySelector('input[name="question1"]:checked').value;
    var question2 = document.querySelector('input[name="question2"]:checked').value;



    console.log("question", question2)

    if (question1 == "23") {

        marks = marks + 5;
    }
    if (question2 == "pakistan") {
        marks = marks + 5;


    }
    // else {
    //     alert("your both Answer Wrong")

    // }
    document.getElementById("totalmarks").innerHTML = marks
  localStorage.setItem("Totel Marks",JSON.stringify(marks))





}