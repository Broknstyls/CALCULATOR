let answer = document.getElementById('display').textContent;
let c = document.getElementById('c').onclick=
function() {
    document.getElementById('display').textContent = 'Hello There!'}
    let percent = document.getElementById('percent').onclick=
    function(){
        if(document.getElementById('display').textContent == 'Hello There!'){
            document.getElementById('display').textContent = '%'
        }
        else if(
            document.getElementById('display').textContent == '%'
        ){
            let repeat = '%'
            document.getElementById('display').textContent = repeat + '%'
        } else{
        document.getElementById('display').textContent =  answer + '%';}
    } 