-- Active: 1759295783082@@127.0.0.1@3306@mysql
-- view 생성
/*
create view 뷰이름
AS
select 구문
*/
create view ex_view 
AS
select t1.* , tot/3 as average from
(select *,kor+eng+mat as tot from exam) t1;


select * from ex_view;

-- view 삭제
drop view ex_view;

-- view 수정
alter view ex_view 
AS
select t1.* , tot/3 as qwer from
(select *,kor+eng+mat as tot from exam) t1;







create table member(
    pid varchar(50) PRIMARY key,  -- not null + unique
    pname varchar(50) not null,  -- null 허용 안함
    tel varchar(50) UNIQUE,      -- 중복 허용 안함
    hobby varchar(50)
);

-- 제약 조건 확인
select * from information_schema.TABLE_CONSTRAINTS;
select * from information_schema.TABLE_CONSTRAINTS where TABLE_NAME = 'member2';


create table member2(
    pid varchar(50), 
    pname varchar(50),  
    tel varchar(50),  
    hobby varchar(50)
);

-- 추가
-- 기본키
alter table member2 add constraint PRIMARY key(pid);

-- unique
alter table member2 add constraint UNIQUE(tel);

-- not null
alter table member2 modify pname VARCHAR(50) not null;


-- 제거
alter table member2 drop PRIMARY key;
alter table member2 drop constraint tel;

alter table member2 modify pname VARCHAR(50) null;
alter table member2 modify pid VARCHAR(50) null;


create table product(
    id int AUTO_INCREMENT PRIMARY key,
    title VARCHAR(100)
);

-- AUTO_INCREMENT 삭제
alter table product modify id int;

-- PK 삭제
alter table product drop PRIMARY key;
-- not null 삭제
alter table product modify id int null;

-- PK + AUTO_INCREMENT 추가
alter table product  modify id int AUTO_INCREMENT PRIMARY key;


create table exam2(
    exid int AUTO_INCREMENT PRIMARY key,
    title VARCHAR(100),
    pid VARCHAR(50),
    kor int,
    constraint exam2_fk FOREIGN key(pid) REFERENCES per2(pid)
);
--  외래키 설정
-- constraint exam2_fk FOREIGN key(pid)   REFERENCES per2(pid)
--            제약조건이름      외래키 설정컬럼         참조테이블 : per2  컬럼:pid(PK)


-- 외래키 제거
alter table exam2 drop FOREIGN key exam2_fk;

-- 외래키 추가
alter table exam2 add constraint ex_fk FOREIGN key(pid) REFERENCES per2(pid);

alter table exam2 drop FOREIGN key ex_fk;

alter table exam2 add constraint ex_fk FOREIGN key(pid) REFERENCES per2(pid)
on update CASCADE on delete CASCADE;
-- update CASCADE :  참조키가 변경되면 외래키값도 변경 
-- delete CASCADE :  참조키가 삭제되면 외래키관련 레코드도 삭제



/*
 학과테이블 : id(PK), 학과명, 학과실
 
 교수 테이블 : pid(PK), 이름, tel, 전공(FK)--> 학과테이블
 
 * */

 create table lesson(
    id varchar(100) PRIMARY key,
    title varchar(100),
    room  varchar(100)
 );

 alter table professor add constraint PRIMARY key(pid);

 alter table professor add lesson_id varchar(100);
 alter table professor add constraint le_fk FOREIGN key(lesson_id) REFERENCES lesson(id);






-- autocommit : 자동저장
SET autocommit = 0; -- autocommit 해제
SET autocommit = 1; -- autocommit 적용

select @@autocommit; --autocommit 확인

insert into per2 (pid, pname) values ('mmm','현빈');

insert into per2 (pid, pname) values ('ppp','장희빈');

commit;  -- 변경 내용 저장


insert into per2 (pid, pname) values ('rrr','미스터빈');
insert into per2 (pid, pname) values ('sss','김우빈');
insert into per2 (pid, pname) values ('uuu','원빈');

ROLLBACK;  -- 이전 commit 상태로 되돌리기

insert into per2 (pid, pname) values ('qwqw','젤리빈');
insert into per2 (pid, pname) values ('asas','자바빈');

SAVEPOINT A;

insert into per2 (pid, pname) values ('zxzx','속이빈');
insert into per2 (pid, pname) values ('erer','증기터빈');

SAVEPOINT B;

insert into per2 (pid, pname) values ('dfdf','유즈빈');
insert into per2 (pid, pname) values ('cvcv','명세빈');

ROLLBACK to SAVEPOINT B;
ROLLBACK to SAVEPOINT A;
ROLLBACK;

-- root 권한 혹은 권한을 받은 계정에서 가능
-- 계정생성
-- create user 계정명@접근허용위치 IDENTIFIED by '암호'
create user uu1@localhost IDENTIFIED by '1234';