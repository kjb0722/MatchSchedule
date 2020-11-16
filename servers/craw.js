const axios = require('axios');
const cheerio = require('cheerio');

let html = '';

async function getHtml() {
  try {
    return await axios.get(
      'https://sports.news.naver.com/wfootball/schedule/index.nhn',
    );
  } catch (error) {
    console.error(error);
  }
}

async function getSchedule() {
  html = await getHtml();
  console.log(html);
  return html;
}

module.exports = getSchedule;
