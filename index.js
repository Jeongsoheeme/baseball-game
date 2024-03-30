document.addEventListener('DOMContentLoaded', function(){
    let enterCount = 0;

    document.getElementById('enterButton').addEventListener('click', function(event){
        let randomNum = Math.floor((Math.random()+1) * 100);
        let randomArray = [];
        let inputArray = [];
        let strike = 0;
        let ball = 0;
        event.preventDefault();
        let inputNum = Number(document.getElementById('inputNum').value);

        if(inputNum > 999 || inputNum === 0 || inputNum < 0){
            alert('숫자를 세자리로 입력해주세요.')
        } else if(enterCount > 10){
            alert('총 10회까지만 시도 가능합니다.')
        } else {
            inputArray = String(inputNum).split('');
            randomArray = String(randomNum).split('');

            for(let i=0; i < randomArray.length; i++){
                for(let k=0; k < inputArray.length; k++){
                    if(randomArray[i] === inputArray[k]){
                        if(i === k){
                            strike += 1;
                        } else {
                            ball += 1;
                        }
                    }
                }
            }

            alert('Strike:'+ strike +', Ball:'+ ball);
            enterCount += 1;
        }

        console.log(randomArray);
        console.log(inputArray);
    });

    document.getElementById('replayButton').addEventListener('click', function(){
        enterCount = 0;
    });

});


