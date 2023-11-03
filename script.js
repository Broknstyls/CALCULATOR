let answer = document.getElementById('display').innerHTML;
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
let divide = document.getElementById('divide').onclick=
    function(){
        if(document.getElementById('display').textContent == 'Hello There!'){
            document.getElementById('display').textContent = '/';
        } 
        else if(document.getElementById('display').textContent == '/'){
            let repeat = '/'
            document.getElementById('display').textContent = repeat + '/'
        }
        else{
            let answer = document.getElementById('display').textContent;
            document.getElementById('display').textContent = answer + '/'
        }
    }
    let seven = document.getElementById('7').onclick=
        function(){
            if(document.getElementById('display').textContent == 'Hello There!'){
                document.getElementById('display').textContent = '7'
            } else if(document.getElementById('display').textContent == 0 ||document.getElementById('display').textContent == '0' )
            {document.getElementById('display').textContent = 7 } else{
                let answer = document.getElementById('display').textContent
                document.getElementById('display').textContent = answer + 7 }
        }