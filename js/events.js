console.log('external files');
//option2
    function makeYellow(){
            document.body.style.backgroundColor = 'yellow';
        }
        // option3 getElementById diye
            const btnMakeBlue = document.getElementById('btn-make-blue');
    // console.log(btnMakeBlue);
    btnMakeBlue.onclick = function makeBlue(){
        document.body.style.backgroundColor = 'blue';
    }