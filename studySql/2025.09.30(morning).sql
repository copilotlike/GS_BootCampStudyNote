 -- between~and
 -- 70 이상 90 이하
 select * from exam where kor between 70 and 90;
 
 -- 결과물 없음 : between 작은수 and 큰수 이어야 한다.
 select * from exam where kor between 80 and 70;
 
 -- pid in ('aaa','bbb') ==> pid='aaa' || 'bbb';
 select * from exam where pid in('aaa','bbb');
 
-- like
select * from per2 where pname = '진';
select * from per2 where pname like '진';

select * from per2 where pname = '%진%';
-- '진' 을 포함한 모든 row
/*
% : 글자수 0~ 모든글자
_ : 글자수1개 모든글자 
*/
select * from per2 where pname like '%진%';
select * from per2 where pname like '진%';
select * from per2 where pname like '%진';
select * from per2 where pname like '_진_';
select * from per2 where pname like '_진';
select * from per2 where pname like '진_';
select * from per2 where pname like '__진';

-- 이름이 진으로 끝나고 나이가 40,50대인 데이터를 출력하세요
select * from per2 where pname like '%진' and age between 40 and 59;



 -- order by : 정렬
 -- order by 컬럼1, 컬럼 2 ;; 정렬순서
 -- desc : 내림차순, asc or 생략 : 오름차순;
 select * from exam order by kor desc;
 
 select * from exam order by pid desc, reg_date desc;
 
 -- limit, 시작번호, 갯수 : 갯수 제한
 -- 시작번호 : 0;
select * from exam 
order by id
limit 3,5; 
-- 4,5,6,7,8(intialize : 3+1,  end :5.length); 

-- 순서가 맞아야 실행이 됨.
-- select , update ...
-- where 
-- orderby
-- limit
-- 값을 사용하는 순서


select * from exam 
where hakgi = 1
order by id
limit 3,4;

-- 이름에 '진'이 들어간 사람들을 키 큰 순서대로 위에서 2,3 번째를 출력하세요.
select * from per2
where pname like "%진%"
order by height desc
limit 1,2;

select * from per2;
select * from per2 where height >100;

-- 집계함수
-- null 은 제외
select count(*), count(kor), sum(kor), avg(kor), max(kor), min(kor), group_concat(kor) from exam;

select *, count(*) from exam; -- 집계함수와 일반 조회 동시 사용 불가 정확한 값이 나오지 않음.


-- group by 컬럼1, 컬럼2 ... : 컬럼의 데이터를 기준으로 그룹화
select hakgi,name, count(*), count(kor) from exam
group by hakgi, name;
-- group by -> no priority

-- having : group의 조건식(filtering)
select hakgi,name, count(*), count(kor) from exam
group by hakgi, name
having count(kor)> 2;


select hakgi,name, sum(eng) from exam
group by hakgi, name;


-- where : 그룹화 하기전 전체를 대상으로 필터링
select hakgi,name, sum(eng) from exam
where eng >= 60
group by hakgi, name;

-- having : 그룹화 후 그룹단위로 필터링
select hakgi,name, sum(eng) from exam
group by hakgi, name
having sum(eng) > 260;


select hakgi,name, sum(eng) from exam
where eng >= 60
group by hakgi, name
having sum(eng) > 200
order by name;

select pid from exam;





-- distinct 중복데이터 제거
select distinct pid from exam;

-- 학생별로 국어, 영어, 수학의 최대점수를 출력하세요
-- 단 학생 의  4번의 시험 합계(국어+영어+수학) 평균이 170 점이상만 할것
-- null은 0점으로 환산
-- 학생은 내림 차순 할 것

SELECT
    pid,
    MAX(kor) AS max_korean,
    MAX(eng) AS max_english,
    MAX(mat) AS max_math
FROM exam
GROUP BY pid
HAVING AVG(kor + eng + mat) >= 200
ORDER BY pid ASC;

select * from exam;




-- 함수
select left('아기상어',2);
select right('아기상어',2);
select mid('아기상어 뚜루루 뚜 루',3,5); -- index[1] 시작 ~ 공백 포함 5개
select substring('아기상어 뚜루루 뚜 루',3,5);
select substring('아기상어 뚜루루 뚜 루',3);
select substr('아기상어 뚜루루 뚜 루',3,5);
select substr('아기상어 뚜루루 뚜 루',3);
-- substring === substr;

select substring_index('aaaa,bb,cccc,dd,eeee,ff,g,h',',',3);
select substring_index('aaaa,bb,cccc,dd,eeee,ff,g,h',',',-3);
-- left(3), right(3);

select length('aBCd 아기상어 eFg'), char_length('aBCd 아기상어 eFg');
-- byte(한글 3byte) = 9(영문자 공백)+12(한글 4개); 글자수공백포함 13

select instr('창원 Onop onoP','on');
-- 몇번째 (대소문자 구분 안함) collection 설정이 기본 대소문자 구분안하도록 설정되어 있음 default;

-- select instr('창원 Onop onoP','on',6); 없음

select instr('창원 Onop onoP','qwer'); -- 없으면 0

select position('on' in '창원 Onop onoP');
-- 이것 또한 대소문자 구분없이 찾음. db 설정값이 따름. instr 참고

-- 변환
select ascii('A'), char(65);

select upper('AbcD eFg'), lower('AbcD eFg');

select replace('창원 Onop onoP','o','오'); -- 대소문자 구분함

select repeat('창원',5);

select insert('asd ghj kl',3,4,'공룡이지롱');

        -- 5  글자  3
select '     on op   ', char_length('     on op   ');
select ltrim('     on op   '), char_length(ltrim('     on op   '));
select rtrim('     on op   '), char_length(rtrim('     on op   '));
select trim('     on op   '), char_length(trim('     on op   '));

select lpad('on op',10,'@'),rpad('on op',10,'@');
select lpad('on op123456789',10,'@'),rpad('on op123456789',10,'@');

select reverse('qwer tyu');


-- 1 ==> A학기, 2 ==> B학기 로 바꾸어 출력하세요

select * , concat(char(hakgi+64),'학기') from exam;
-- 학기가 1,2이렇게 있어서 char(65)=='A'를 만들기 위해서 임.
-- 2하기라면 hakgi의 값은 2이고 char(66) == 'B'를 불러옴.

select * , replace(replace(hakgi,2,'B학기'),1,'A학기') from exam;

select replace(hakgi,2,'B학기') and replace(hakgi, 1 ,'A학기') from exam;