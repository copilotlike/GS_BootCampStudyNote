
create table menu_1(

    title VARCHAR(100),
    price int,
    cnt int
);

create table menu_2(

    title VARCHAR(100),
    price int
);

create table menu_3(

    title VARCHAR(100),
    price int,
    opt VARCHAR(100)
);

INSERT into menu_1 (title, price, cnt) VALUES
('아메리카노',1900, 2),
('아프리카노',2100, 1),
('아시아노',2400, 3);

INSERT into menu_2 (title, price) VALUES
('김치찌개',5000),
('된장찌개',6000),
('부대찌개',7500),
('순두부찌개',8000);



INSERT into menu_2 (title, price) VALUES
('아프리카노',2100),
('아시아노',9000);



INSERT into menu_3 (title, price, opt) VALUES
('신라면',3000,'계란'),
('안성탕면',3500,'치즈'),
('짜파게티',3700,'트러플');

INSERT into menu_3 (title, price, opt) VALUES
('아프리카노',2100,'시럽'),
('아메리카노',1900, '더시럽'),
('부대찌개',7500,'6사단'),
('순두부찌개',1234,'할께없음');


select * from menu_1;
select * from menu_2;
select * from menu_3;

-- 중복데이터는 1개만 가져옴
select title, price from menu_1
UNION
select * from menu_2
UNION
select title, price from menu_3;

-- 중복 허용 all 키
select title, price from menu_1
UNION all
select * from menu_2
UNION all
select title, price from menu_3;


-- table
select *,kor+eng+mat as tot , (kor+eng+mat)/3  from exam;

select pid, avg(average) 
from
    (select * , tot/3 as average from
        (select *,kor+eng+mat as tot from exam)
    t1) t2
group by pid;


select t1.* , tot/3 as average 
from
(select *,kor+eng+mat as tot from exam)
t1;

-- summary : 괄호 안의 조건식 테이블을 불러서 이중적 조건을 취할 수 있음.





-- 조건절

select avg(kor) from exam;

select * from exam where kor >= 73.1429;

select * from exam 
where kor >= (select avg(kor) from exam);

select avg(kor) from exam; -- console.log
-- 출력값이 하나만 나올 경우 조건식의 상수로 사용할 수 있는 것을 보임.






-- 값
--  맥도날드 교수님으로 나도 신청하고 싶어
-- 나 : hhh, 너 : bbb

select pid from professor where name = '맥도날드';
update per2 set pfid = 'pf2' where pid = 'fff';


update per2 set pfid = (select pid from professor where name = '맥도날드') where pid = 'hhh';
-- 여기도 똑같이 괄호 안의 값이 정확히 하나만 나와야 함. 2개 이상의 값이 나온다면 오류
-- limit를 사용해 제한을 걸어야할 것으로 보임.
-- 혹은 다른 유사 기능들을  통해서 하나의 값으로 제한해야함.






-- 검색내용이 다중일 경우 

-- = 대신 in 사용
-- 스네이프 교수님 학생들의 영어점수를 5점 추가해줘

select pid from professor where name = '스네이프';

select pid from per2 where pfid='pf2';

update exam set eng = eng+5 where pid in('bbb','fff');

-- 덤블도어 교수님 학생들의 수학점수를 5점 감점해줘

update exam set mat = mat-5 
where pid in(select pid from per2 where pfid=
(select pid from professor where name = '더블도어'));
select pid from professor where name = '더블도어';
-- 삼중문 


-- aaa 보다 영어점수 높은 사람
select eng from exam where pid = 'aaa';
-- 79,82,92

-- any  데이터중 1개라도 충족시 선택 (79,82,92) 중 한개만이라도 충족 - 79초과
select * from exam where eng > any (select eng from exam where pid = 'aaa');

-- all  모든 데이터가 충족시 선택 (79,82,92) 모두 충족 - 92 초과
select * from exam where eng > all (select eng from exam where pid = 'aaa');


-- 나이가 40세 미만인 학생중 국어점수가 80점 이하인 학생의 수학점수를 3점 추가하세요

-- 나이가 40세 이상인 학생중 국어점수가 80점 이하인 학생의 수학점수를 3점 추가하세요

-- 나이가 40세 이상인 학생 /  국어점수가 80점 이하인 학생의 수학점수를 3점 추가하세요

update exam set mat = mat +3 where kor <=80;

select pid from per2 where age >= 40;
-- bbb, eee, fff, ggg


update exam set mat = mat +3 where pid in ('bbb','eee', 'fff', 'ggg');

update exam set mat = mat +3 where kor <=80 and pid in ('bbb','eee', 'fff', 'ggg');

update exam set mat = mat +3 
where kor <=80 and 
pid in (select pid from per2 where age >= 40);


/*
professor
pid   name    tel
---------------------------------------
pf1	더블도어	1111
pf2	스네이프	2222
pf3	맥도날드	3333


pid pname age height friend pfid
---------------------------------------
aaa	황진이	    36		bbb	   pf1
bbb	이효리	    45	175	ccc	   pf2
ccc	장남건	    14	168	bbb	   pf1
dd	경남진돗개			 bbb	pf3
eee	코예진	    57	168	eee	   pf1
fff	예진	   45	174		   pf2
ggg	진	       62   156	aaa	   pf3
hhh	진눈개비	27	 181		pf3

exam
id hakgi name   pid  reg_date  kor eng mat
---------------------------------------------
1	1	semi	aaa	2025-05-04	77	79	69
2	1	semi	bbb	2025-05-04	88	104	94
3	1	semi	ccc	2025-05-04	57	59	59
4	1	semi	ddd	2025-05-04		49	71
5	1	final	aaa	2025-07-11	97	92	90
6	1	final	bbb	2025-07-11	70	83	25
7	1	final	ccc	2025-07-11	79	97	11
8	1	final	ddd	2025-07-11	70	41	21
9	2	semi	aaa	2025-10-15	74	92	13
10	2	semi	bbb	2025-10-15	70	64	73
11	2	semi	ccc	2025-10-15	80	93	79
12	2	semi	ddd	2025-10-15	80	69	74
13	2	final	aaa	2025-12-19		82	86
14	2	final	bbb	2025-12-19		104	64
15	2	final	ccc	2025-12-19	97	59	29
16	2	final	fff	2025-12-19	85	99	78
17	1	final	aaa	2025-07-17	78	92	52
18	1	final	bbb	2025-07-17	58	67	96
*/