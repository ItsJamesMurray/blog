const functions = require('firebase-functions')

const puppeteer = require('puppeteer')
const renderer = require('./renderer')
const fetch = require('node-fetch')

const blogURL = 'https://itsjamesmurray-blog.firebaseapp.com';
const renderURL = 'https://us-central1-itsjamesmurray-blog.cloudfunctions.net/render';

exports.render = functions.runWith({ memory: '1GB' }).https.onRequest(async (request, response) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const requestURL = request.query.requestURL;

  const page =  await browser.newPage();
  const { status, content } = await renderer.serialize(page, requestURL, false);

  response.status(status).send(content);
})

exports.ssr = functions.https.onRequest( async (request, response) => {
  const bots = [
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot',
    'pinterest',
    'slackbot',
    'googlebot'
  ];

  const userAgent = String(request.headers['user-agent']);

  const isBot = bots.filter(bot => userAgent.toLowerCase().includes(bot)).length;

  const requestURL = blogURL + request.url;
  console.log(`Request URL is: ${requestURL}`)

  const options = {timeout: 0}

  if (isBot) {
    console.log('Bot recognized')
    const html = await fetch(`${renderURL}?requestURL=${requestURL}`, options);
    const body = await html.text();
    response.send(body.toString());
    console.log(`BOT BODY: ${body.toString()}`)
  } else {
    console.log('User recognized')
    const html = await fetch(blogURL);
    const body = await html.text();
    response.send(body.toString());
    console.log(`USER BODY: ${body.toString()}`)
  }
});
