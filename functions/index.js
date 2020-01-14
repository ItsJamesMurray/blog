const functions = require('firebase-functions')

const puppeteer = require('puppeteer')
const renderer = require('./renderer')
const fetch = require('node-fetch')
const express = require('express')
// const axios = require('axios')

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

  const options = {timeout: 0}

  if (isBot) {
    const html = await fetch(`${renderURL}?requestURL=${requestURL}`, options);
    const body = await html.text();
    response.send(body.toString());
  } else {
    const html = await fetch(blogURL);
    const body = await html.text();
    response.send(body.toString());
  }
});

// function getPosts () {
//   const baseKey = functions.config().airtable.base
//   const apiKey = functions.config().airtable.apikey
//   const urls = [
//     'https://www.itsjamesmurray.com',
//     'https://www.itsjamesmurray.com/blog',
//     'https://www.itsjamesmurray.com/contact'
//   ]

//   axios.get(`https://api.airtable.com/v0/${baseKey}/Blog%20Posts`, {
//     headers: {
//       'Authorization': `Bearer ${apiKey}`
//     },
//     params: {
//       view: 'Published Posts'
//     }
//   })
//   .then(r => r.data.records)
//   .then(blogPosts => {
//     for ( let i=0; i<blogPosts.length; i++ ) {
//         urls.push(`https://www.itsjamesmurray.com/blog/${blogPosts[i].fields['URL Slug']}`)
//     }
//     return urls
//   })
// }


const app = express()
app.get('/sitemap', (request, response) => {
  let urls = [
    'https://www.itsjamesmurray.com',
    'https://www.itsjamesmurray.com/blog',
    'https://www.itsjamesmurray.com/contact'
  ]
  let sitemap = []

  // getPost somewhere here
  for (let i = 0; i < urls.length; i++) {
    sitemap.push(`
    <url>
      <loc>${urls[i]}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    `)
  }

  response.set('Content-Type', 'application/xml')
  response.send(`
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${sitemap.join('')}
  </urlset>
  `)
})

exports.sitemap = functions.https.onRequest(app)
