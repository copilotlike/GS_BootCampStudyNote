-- 테이블 생성 : 대소문자 구분 안함. 그러므로 '_'로 처리할 것.

/*
create table 테이블명(
	컬럼1 타입,
    컬럼2 타입,
    ....
);
[(타입 : )]
점수는 : int;
실수 : double;
문자열 : varchar(n);
시간 : time
날짜 : date
날짜+시간 : datetime
*/

create table bike(
	title varchar(100),
    engine int,
    reg_date datetime,
    start_date date,
    run_time time
);

-- 컬럼 추가
alter table bike add size int;

-- 컬럼 자료형 변경 
alter table bike modify engine varchar(10);

-- 컬럼 이름,자료형 변경 
alter table bike change engine eg int;

-- 컬럼 삭제
alter table bike drop size;

-- 테이블 목록 보기
show tables;

-- 테이블 확인
desc bike;

-- 테이블명 변경
alter table bike rename autobike;

-- 테이블 복사
create table per2 as select * from person;

-- 테이블 삭제
drop table person;

/*
옷테이블을 구축하세요
숫자         문자 		실수 		날짜  	날짜시간		정수
옷번호 		제품명		가격(천단위)	출시일	판매일,		크기
*/

create table clothes(
	clothesNum int(100),
    productName varchar(45),
    price double,
    releaseDate date,
    sellingDate datetime,
    size int
);
alter table clothes change sellingDate sellDate datetime;

-- 데이터 추가
/*
insert into 테이블명
( 컬럼1, 컬럼2, ....)
values
(컬럼1값, 컬럼2값, ...);
*/

insert into per2 (pid, pname, age,height) values ('ddd','손예진',45,158);

-- 조회
/* 
select 컬럼1, 컬럼2, 컬럼 3 .... from 테이블명;
select * from 테이블명 : 모든 컬럼
 */

select * from per2; 
select pid, age from per2;

insert into per2 (pid, pname, age ,height) values ( 'ddd','손예진','42','158');

insert into per2 (pid, pname, height) values
('ddd','발예진','172'),
('eee','코예진','168'),
('fff','눈예진','174'),
('ggg','귀예진','175');

-- 변경
/* update 테이블명 set 컬럼명 = 값 
update 테이블명 set 컬럼명 = 값 where 조건
*/
update per2 set age = 45;
select * from per2;

update per2 set age = 36 where pid = 'ddd';
select * from per2;

-- 삭제
/* delete from 테이블 where 조건; */
delete from per2 where height <= 160;
select * from per2;

/*
EXAM 테이블을 생성 및 데이터를 입력하세요.

사번, 학기, 종류, 응시생, 응시일, 국어, 영어, 수학
id, hakgi, name,pid, reg_date,kor,eng,mat 
숫자, 숫자   문자   문자  날짜     숫자 숫자 숫자alter

입력내용
학생별
1학기 중간, 기말
2학기 중간, 기말
을 입력하세요.
학생 4명 * 시험종류4 = 16개
*/

create table exam(
	id int,
    hakgi int,
    name varchar(10),
    pid varchar(10),
    reg_date date,
    kor int,
    eng int,
    mat int
);

insert into exam (id, hakgi, name, pid, reg_date, kor, eng, mat) values
('1','1','중간','손예진','2025-01-01','90','80','70'),
('2','2','기말','손예진','2025-01-01','90','80','70'),
('3','1','중간','손예진','2025-01-01','90','80','70'),
('4','2','기말','손예진','2025-01-01','90','80','70'),
('5','1','중간','발예진','2025-01-01','90','80','70'),
('6','2','기말','발예진','2025-01-01','90','80','70'),
('7','1','중간','발예진','2025-01-01','90','80','70'),
('8','2','기말','발예진','2025-01-01','90','80','70'),
('9','1','중간','코예진','2025-01-01','90','80','70'),
('10','2','기말','코예진','2025-01-01','90','80','70'),
('11','1','중간','코예진','2025-01-01','90','80','70'),
('12','2','기말','코예진','2025-01-01','90','80','70'),
('13','1','중간','입예진','2025-01-01','90','80','70'),
('14','2','기말','입예진','2025-01-01','90','80','70'),
('15','1','중간','입예진','2025-01-01','90','80','70'),
('16','2','기말','입예진','2025-01-01','90','80','70');

select * from exam;



select 10 + 20;
select kor, kor +20 from exam;

-- 산술연산자 +-/* ;
-- 별칭 : as ;
select *, kor+10, eng-20, mat*2, eng/3, kor%5, kor+eng+mat as tot from exam;

-- 문자열 결합으로 + 사용 불가
select *, '이름'+pname from per2;

-- 문자열 결합 cancat()
select *, concat(hakgi, '학기') as he from exam;

-- 비고 : return 1 : true, 0:false;
select 
kor, 
kor>70,
kor >= 70,
kor <70,
kor <=70,
kor = 70, -- 같다
kor != 70,  -- 다르다
kor <> 70 -- 다르다
from exam;


select kor, kor= null, kor != null, kor <> null from exam;

select kor, kor is null, kor is not null from exam;

-- ifnull(컬럼, 대체값)
select kor, ifnull(kor, -5) from exam;

-- 논리연산자
-- and 
select *from exam where hakgi=1 and name='중간';
select *from exam where hakgi=1 && name='중간';

select *from exam where pid='손예진' or pid='발예진';
select * from exam where pid = '손예진' || pid='발예진';

select * from exam where !(hakgi =1  && pid='중간');

select * from exam;