document.getElementById('spin-btn-20').addEventListener('click', function() {
    startSpinning(20);
});

document.getElementById('spin-btn-21').addEventListener('click', function() {
    startSpinning(21);
});

function startSpinning(maxNumber) {
    var spinningElement = document.getElementById('spinning');
    var resultElement = document.getElementById('result');
    
    // 애니메이션 시작
    spinningElement.style.display = 'block';
    spinningElement.classList.add('spinning');
    resultElement.textContent = '';

    // 약간의 지연 후 결과 표시
    setTimeout(function() {
        spinningElement.style.display = 'none';
        spinningElement.classList.remove('spinning');
        
        var result = generateResult(maxNumber);
        resultElement.textContent = '결과는 ' + result + '입니다! 이 룰렛은 ' + maxNumber + '등분 되었습니다.';
    }, 2000); // 2초 후에 애니메이션 종료
}

function generateResult(maxNumber) {
    var result;
    do {
        result = Math.floor(Math.random() * maxNumber) + 1;
    } while (result === 16); // 16번이 나오면 다시 뽑기
    return result;
}
