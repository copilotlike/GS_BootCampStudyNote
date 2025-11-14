/*
exam.js를 생성하고
이름, 국어, 영어, 수학, 총점 ,평균, 등급을 출력하세요.

*/
function ddd() {
    const name = '강동원';
    const korean = 100;
    const english = 100;
    const math = 100;
    let sum, avg, grade = 0;

    sum = korean + english + math;
    avg = Math.round(sum / 3 ,2);

    switch(avg/30) {
        case 9 : 
            grade = '수' 
            break ;
        case 8 : 
            grade ='우' 
            break ; 
        case 7 : 
            grade = '미' 
            break ;
        case 6 : 
            grade = '양' 
            break ;
        default : 
            grade = '가';
    }




    return (
        <div>
            <table>
            <tr>
                <td>이름</td> 
                <td>합계</td>
                <td>평균</td>
                <td>등급</td>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{sum}</td>
                <td>{avg}</td>
                <td>{grade}</td>
            </tr>
            </table>
        </div>
    )
    
    

}

export default ddd;