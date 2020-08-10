function check(){
    var score = 0
    var right = document.getElementById('right-1');
    var wrong = document.getElementById('q1-1');
    var wrong = document.getElementById('q1-2');
    var wrong = document.getElementById('q1-3');
    if (right.checked == true){
        score ++
        alert('Q # 1: Good! You Select Right.')
    }
    else{
        alert('Q # 1: Owhh! You Select Wrong!')
    }

    var right = document.getElementById('right-2');
    var wrong = document.getElementById('q2-1');
    var wrong = document.getElementById('q2-2');
    var wrong = document.getElementById('q2-3');
    if (right.checked == true){
        score ++
        alert('Q # 2: Good! You Select Right.')
    }
    else{
        alert('Q # 2: Owhh! You Select Wrong!')
    }

    var right = document.getElementById('right-3');
    var wrong = document.getElementById('q3-1');
    var wrong = document.getElementById('q3-2');
    var wrong = document.getElementById('q3-3');
    if (right.checked == true){
        score ++
        alert('Q # 3: Good! You Select Right.')
    }
    else{
        alert('Q # 3: Owhh! You Select Wrong!')
    }

    var right = document.getElementById('right-4');
    var wrong = document.getElementById('q4-1');
    var wrong = document.getElementById('q4-2');
    var wrong = document.getElementById('q4-3');
    if (right.checked == true){
        score ++
        alert('Q # 4: Good! You Select Right.')
    }
    else{
        alert('Q # 4: Owhh! You Select Wrong!')
    }

    var right = document.getElementById('right-5');
    var wrong = document.getElementById('q5-1');
    var wrong = document.getElementById('q5-2');
    var wrong = document.getElementById('q5-3');
    if (right.checked == true){
        score ++
        alert('Q # 5: Good! You Select Right.')
    }
    else{
        alert('Q # 5: Owhh! You Select Wrong!')
    }


    alert('Your score is' +' '+ score +' '+ 'Out of 5.')
if(score >=3){
    alert('You are Genius')
}
else{
    alert('You have to be improve your General knowledge!')
}
}