const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const mysql = require('mysql');
const dbconfig = require('./database.js');
const connection = mysql.createConnection(dbconfig);
connection.connect();

app.use(cors());
app.use(bodyParser.json());
app.post('/craw', (req, res) => {
  let kind = req.body.kind;
  let addr;
  let craw = [];
  connection.query(
    `select addr from matchKind where name = '${kind}'`,
    (error, rows, fields) => {
      if (error) throw error;
      addr = rows[0]['addr'];

      (async () => {
        // 브라우저를 실행한다.
        const browser = await puppeteer.launch();

        // 새로운 페이지를 연다.
        const page = await browser.newPage();

        await page.goto(addr);

        // 페이지의 HTML을 가져온다.
        const content = await page.content();
        // $에 cheerio를 로드한다.
        const $ = cheerio.load(content);
        // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
        const lists = $('#_monthlyScheduleList tr');
        // 모든 리스트를 순환한다.
        lists.each((index, list) => {
          const i = index;
          const date = $(list).find('th > div em').text();
          // const time = $(list).find('td.time_place > div > span.time').text();
          const time = $(list).find('td.time > span').text();
          console.log(time);
          const place = $(list).find('td.time_place > div > span.place').text();
          const teamLeft = $(list)
            .find('td > div > span.team_left > span.name')
            .text();
          const teamLeftScore =
            $(list).find('td > div > span.team_left > span.score').text() === ''
              ? '0'
              : $(list).find('td > div > span.team_left > span.score').text();
          const teamRight = $(list)
            .find('td > div > span.team_right > span.name')
            .text();
          const teamRightScore =
            $(list).find('td > div > span.team_rigth > span.score').text() ===
            ''
              ? '0'
              : $(list).find('td > div > span.team_left > span.score').text();

          craw.push({
            i: i,
            date: date,
            time: time,
            place: place,
            teamLeft: teamLeft,
            teamLeftScore: teamLeftScore,
            teamRight: teamRight,
            teamRightScore: teamRightScore,
          });
        });
        // 브라우저를 종료한다.
        browser.close();
        res.json({ data: craw });
      })();
    },
  );
});

app.use('/matchKind', (req, res) => {
  connection.query('select * from matchKind', (error, rows, fields) => {
    if (error) throw error;
    res.json({ data: rows });
  });
});

app.listen(port, () => console.log(`express is running on ${port}`));
