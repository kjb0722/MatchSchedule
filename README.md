# MatchSchedule<br>
## 개요
* 관심 있는 스포츠 경기 일정 목록을 표시

## 사용 기술
* HTML, CSS, JavaScript
* MySql 8.0.20
* React
* Node.js 12.18.1
* 라이브러리 & 프레임워크
  - express
  - puppeteer, cheerio
  - material-ui

## 설명
* 화면 구성은 React를 사용하고 서버 구성은 Node.js로 구성
* puppeteer를 사용하여 크롤링 후 cheerio로 파싱
* material-ui를 사용하여 로딩 Progress 구성

## 화면
![메인](https://user-images.githubusercontent.com/58472980/100016564-f76cd980-2e1c-11eb-8569-08e0be52f136.PNG)
* 현재 날짜를 기준으로 이후에 진행되는 경기들을 표시
* 동일한 날짜에 종료된 경기는 빨간색 테두리로 표시
* 현재 진행되는 경기는 녹색 테두리로 표시

![로딩](https://user-images.githubusercontent.com/58472980/100017045-a8737400-2e1d-11eb-9288-a643b202dce0.PNG)
* 로딩 화면
