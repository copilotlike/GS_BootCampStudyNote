var tot = 0;
for(let i = 0; i <3 ; i++){  
            // i = 0                                    -- 1
            //          0<3                             -- 2

            //                0++(i:1)                  -- 7
            //          1<3                             -- 8

            //                1++(i:2)                  -- 13
            //          2<3                             -- 14

            //                2++(i:3)                  -- 19
            //          3<3                             -- 20 (for 문 탈출)

            // 구간 지역변수 - 반복이 끝날때마다 소멸
            let a = 7                                   //-- 3,9,15
            tot += i                                    //-- 4,10,16
            a ++                                        //-- 5,11,17
            console.log(`${i} : ${tot} , ${a} <br/>`)//-- 6,12,18
        }
        console.log(`합계 : ${tot} <br/>`);           // -- 21
        //document.write(`합계 : ${i} <br/>`)   에러발생

        // 101 -> 200 짝수들의 합 출력하세요


         const result = ((a,b) => {
            function init(){
                return doSum(a,b)
            }
            function doSum(a,b){
                return a+b;
            }
            return init();
        })(10,20)
        console.log(result)