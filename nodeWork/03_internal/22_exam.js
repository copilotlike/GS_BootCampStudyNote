/*
fff/exam.txt
정우성,77,78,79
정좌성,97,98,99
정남성,67,68,69
정중성,87,88,89

파일내용을 가져와
fff/examRes.txt 를 생성하세요
이름,국어,영어,수학,총점,평균
정우성,77,78,79,?,?
정좌성,97,98,99,?,?
정남성,67,68,69,?,?
정중성,87,88,89,?,?
*/

const fs = require('fs');

fs.readFile('./fff/exam.txt', (err, data) => {
    if (err) {
        console.log('파일 에러:', err);
    }

    let lines = data.trim().split('\n');
    console.log(lines);
    let result = [];

    for (let line of lines) {
        let [name, kor, eng, math] = line.split(',');
        let total = Number(kor+eng+math);
        let avg = (total / 3).toFixed(2);
        result.push(`${name},${kor},${eng},${math},${total},${avg}`);
    }





    fs.writeFile('./fff/examRes.txt', result.join('\n'), 'utf8', (err) => {
        if (err) {
            console.log('writeFile 에러발생:', err);
        } else {
            console.log('txt 생성 완료');
        }
    });
});