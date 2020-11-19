create database if not exists matchSchedule;

use matchschedule;

create table if not exists matchKind(
	name varchar(100) not null,
    addr varchar(200) not null
);

insert into matchKind values('PREMIER LEAGUE','https://sports.news.naver.com/wfootball/schedule/index.nhn?category=epl');
insert into matchKind values('LALIGA','https://sports.news.naver.com/wfootball/schedule/index.nhn?category=primera');
insert into matchKind values('LCK','https://sports.news.naver.com/esports/schedule/index.nhn?category=lol');
