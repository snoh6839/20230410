var answer = [];

function generateAnswer() {
	// 1부터 9까지의 숫자 중에서 서로 다른 3개의 숫자를 랜덤하게 선택하여 answer 배열에 저장
	while (answer.length < 3) {
		var number = Math.floor(Math.random() * 9) + 1;
		if (!answer.includes(number)) {
			answer.push(number);
		}
	}
	console.log(answer);
}

function check() {
	var input = document.getElementById("input").value;
	var inputArray = input.split("");

	if (inputArray.length != 3) {
		document.getElementById("output").innerHTML = "1부터 9까지의 숫자 3개를 입력하세요.";
		return;
	}

	var strike = 0;
	var ball = 0;

	for (var i = 0; i < inputArray.length; i++) {
		var number = parseInt(inputArray[i]);
		if (answer.includes(number)) {
			if (answer[i] === number) {
				strike++;
			} else {
				ball++;
			}
		}
	}

	if (strike === 3) {
		document.getElementById("output").innerHTML = "정답입니다!";
	} else if (strike === 0 && ball === 0) {
		document.getElementById("output").innerHTML = "3 아웃!";
	} else {
		document.getElementById("output").innerHTML = strike + " 스트라이크, " + ball + " 볼입니다.";
	}
}

generateAnswer();
