let answer = document.getElementById('display').innerHTML;
let c = document.getElementById('c').onclick=
function() {
    document.getElementById('display').textContent = 'Hello There!'}


 let percent = document.getElementById('percent').onclick=
    function(){
        if(document.getElementById('display').textContent == 'Hello There!'){
            document.getElementById('display').textContent = '%'
        }
         else{
            let answer = document.getElementById('display').textContent;
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
        let eight = document.getElementById('8').onclick=
            function(){
                    if(document.getElementById('display').textContent == 'Hello There!' || document.getElementById('display').textContent == 0){
                        document.getElementById('display').textContent = 8
                    } else{
                            let answer = document.getElementById('display').textContent;
                            document.getElementById('display').textContent = answer + 8;
                    }
            }
        let nine = document.getElementById('9').onclick=
            function(){
                if(document.getElementById('display').textContent == 'Hello There!' || document.getElementById('display').textContent == 0){
                    document.getElementById('display').textContent = 9;
                }else{
                    let answer = document.getElementById('display').textContent;
                    document.getElementById('display').textContent = answer + 9;
                }
            }
        let multiply = document.getElementById('multiply').onclick=
            function(){
                if(document.getElementById('display').textContent == 'Hello There!'|| document.getElementById('display').textContent == 0){
                    document.getElementById('display').textContent = '*'
                } else{
                    let answer = document.getElementById('display').textContent;
                    document.getElementById('display').textContent = answer + '*'
                }
            }
        let four = document.getElementById('4').onclick=
            function(){
                if(document.getElementById('display').textContent == 'Hello There!' || document.getElementById('display').textContent == 0)
            {
                document.getElementById('display').textContent = 4;
            }else{
                let answer = document.getElementById('display').textContent;
                document.getElementById('display').textContent = answer + 4;
            }}
        let five = document.getElementById('5').onclick =
        function(){
            if(document.getElementById('display').textContent == 'Hello There!' || document.getElementById('display').textContent == 0){
                document.getElementById('display').textContent = 5;
            } else{
               let answer = document.getElementById('display').textContent;
               document.getElementById('display').textContent = answer + 5;
            }
        }
        let six = document.getElementById('6').onclick=
            function(){
                if(document.getElementById('display').textContent == 'Hello There!'|| document.getElementById('display').textContent == 0){
                    document.getElementById('display').textContent = 6;
                } else{
                  let answer = document.getElementById('display').textContent;
                  document.getElementById('display').textContent = answer + 6;
                }
            }
        let minus = document.getElementById('minus').onclick=function(){
            if(document.getElementById('display').textContent == 'Hello There!' || document.getElementById('display').textContent == 0){
                document.getElementById('display').textContent = '-';
            } else{
                let answer = document.getElementById('display').textContent;
                document.getElementById('display').textContent = answer + '-';
            }
        }
        let one = document.getElementById('1').onclick = function(){
            if(document.getElementById('display').textContent == 'Hello There!'|| document.getElementById('display').textContent == 0){
                document.getElementById('display').textContent = 1
            } else{
                let answer = document.getElementById('display').textContent;
                document.getElementById('display').textContent = answer + 1;
            }
        }
        let two = document.getElementById('2').onclick = function(){
            if(document.getElementById('display').textContent == 'Hello There!'||document.getElementById('display').textContent == 0){
                document.getElementById('display').textContent = 2;
            } else{
                let answer =document.getElementById('display').textContent;
                document.getElementById('display').textContent = answer + 2;
            }}
        let three = document.getElementById('3').onclick = function(){
            if(document.getElementById('display').textContent == 'Hello There!' || document.getElementById('display').textContent== 0)
            {document.getElementById('display').textContent = 3;}
            else{
                let answer = document.getElementById('display').textContent;
                document.getElementById('display').textContent = answer + 3;
            }
        }