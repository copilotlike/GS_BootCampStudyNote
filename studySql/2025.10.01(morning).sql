select abs(123.456), abs(-123.456);
-- 정수값
select ceiling(123.456), ceiling(-123.456), ceiling(123.987), ceiling(-123.987);
-- mysql에서만 사용되는 비표준 함수 올림
select ceil(123.456), ceil(-123.456), ceil(123.987), ceil(-123.987);
-- 올림
select floor(123.456), floor(-123.456), floor(123.987), floor(-123.987);
-- 버림
select round(123.456), round(-123.456), round(123.987), round(-123.987);
-- 반올림
select round(123.431, 2), round(-123.431, 2), round(123.987, 2), round(-123.987, 2);
-- 소수점 2자리에서 반올림.
select
truncate (123.431, 2),
truncate (-123.431, 2),
truncate (123.987, 2),
truncate (-123.987, 2);
-- 소수점 2자리에서 잘라내기
select pow(2, 4), mod(15, 7);
-- 거듭제곱과 나머지
select greatest(43, 78, 12, 43, 56), least(43, 78, 32, 43, 56);
-- 큰수와 작은수
select pi();

select interval(78, 0, 60, 70, 80, 90);
-- 찾을 값 : 78      1 2  3  4  5 (찾는 값은 오름차순으로 정렬해야함.)
-- 값 : 70 <= 찾을 값 < 80;
-- 찾는 위치;

select interval(78, 100, 90, 80, 70);
-- 0값나옴
select interval(78, 0, 60, 70, 80, 90);

select interval(120, 0, 60, 70, 80, 90);

-- 시험평균을 이용하여 수우미양가를 출력하세요.
select ELT(
        interval(
            truncate (
                (ifnull(kor, 0) + eng + mat) / 3
            ), 0, 60, 70, 80, 90
        ), '가', '양', '미', '우', '수'
    );

select interval(
        truncate (
            (ifnull(kor, 0) + eng + mat) / 3
        ), 0, 60, 70, 80, 90
    );

select truncate ( (ifnull(kor, 0) + eng + mat) / 3 );

select ( (ifnull(kor, 0) + eng + mat) / 3 );
-- 내가 짠거 안됨 .
select *, mid(
        '가양미우수', interval(
            ifnull(kor, 0) + eng + mat / 3, 0, 60, 70, 80, 90
        ), 1
    )
from exam;

select if(true, '참이지롱', '거짓부렁');

select *, if(age >= 40, 'true', 'false') from per2;
-- sql 제어문은 삼항연산자 condition ? true : false ; 형식으로 작성함

select
    *,
    case
        when kor >= 90 then '수'
        when kor >= 80 then '우'
        when kor >= 70 then '미'
        when kor >= 80 then '양'
        else '가'
    end as average
from exam;
-- sql select문은 case('(') when 조건 then print else('defaul') end(')') 조건으로 정리됨 

select database();

-- select '1234', password('1234');

-- 암호화
--  hex() : 16진수로 변형
-- aes_encrypt() : 암호기법
-- 내용 : '아기상어'
-- 암호키 : 'qwer'
select aes_encrypt('아기상어', 'qwer'), hex(aes_encrypt('아기상어', 'qwer'));

-- 복호화
-- 0FF20D06BF89F59B00C108764513159C
select unhex('0FF20D06BF89F59B00C108764513159C'), aes_decrypt(unhex('0FF20D06BF89F59B00C108764513159C'), 'qwer'),
 convert(aes_decrypt(unhex('0FF20D06BF89F59B00C108764513159C'), 'qwer') using utf8);
-- 뭐 이런 것도 있구나 정도




/*
per2 를 이용하여

20 미만 미성년자
40 미만 청년
60 미만 중년
이상    노년

으로 분류하여 ???님 ?? 회원입니다. 출력하세요
*/

select *, concat(
        pname, '님 ', case
            when age < 20 then '미성년자'
            when age < 40 then '쳥년'
            when age < 60 then '중년'
            else '노년'
        end, ' 회원입니다.'
    ) as hello
from per2;

select * from per2;

-- 2개의 테이블 사용 : 레코드 * 레코드
select * from per2, exam;

/*
select * from per2, exam
where
pid = pid;
*/

/* 
이퀄조인
두개의 테이블이 연결된 레코드만 리턴 */
select per2.*, id, hakgi, name, exam.reg_date, kor, eng, mat
from per2, exam
where
    per2.pid = exam.pid;

-- 내부 조인 (inner join) : 이퀄조인과 같다
select * from per2 inner join exam on per2.pid = exam.pid;

-- 외부조인 (outer join) :
-- 왼쪽 외부조인 :  왼쪽 테이블의 모든 행 리턴 , 오른쪽 테이블 조건에 맞는 행 리턴
select * from per2 left outer join exam on per2.pid = exam.pid;

select * from per2 right outer join exam on per2.pid = exam.pid;

-- cross 조인 : select * from per2, exam; 와 같다
select * from per2 cross join exam;

-- inner join 과 같다
select * from per2 cross join exam on per2.pid = exam.pid;

-- 한개 테이블에서 작업
select * from per2 where friend = pid;

-- self 조인
-- 테이블에 별칭 : me, fr
-- 이퀄조인
select me.*, fr.pname
from per2 me, per2 fr
where
    me.friend = fr.pid;

-- 왼쪽 외부 조인
select me.*, fr.pname
from per2 me
    left outer join per2 fr on me.friend = fr.pid;


-- summary : inner join : 교집합, outer join: 부분 합집합.

/*
professor
교수테이블을 생성하세요
"pid" "NAME", "TEL"

학생테이블에 교수를 추가하시고 각 학생마다 교수를 지정하세요 (pid)
1. 
학생별 교수 이름을 출력하세요
*/


create table professor (
    pid varchar(50),
    name varchar(100),
    tel varchar(30)
);

insert into
    professor (pid, name, tel)
values ('pf1', '더블도어', '1111'),
    ('pf2', '스네이프', '2222'),
    ('pf3', '맥도날드', '3333');

select * from professor;

alter table per2 add pfid varchar(50);

select per2.*, professor.name from per2
    left outer join professor on per2.pfid = professor.pid;


/*
2.
교수별 학생중 가장 높은 평균점수를  출력하세요 (group by)
*/
select name, max(average)
from (
        select professor.name, (kor + eng + mat) / 3 as average
        from professor
            left outer join (
                select exam.*, per2.pfid
                from per2
                    right outer join exam on per2.pid = exam.pid
            ) t1 on professor.pid = pfid
    ) t2
group by
    name;

-- summary : join문의 조건식은 on이다. 그리고 괄호를 통해 이중 조건을 삽입할 수 있다.