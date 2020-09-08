// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const Parser = require('rss-parser');

// The Firebase Admin SDK to access Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

exports.noteRss = functions.https.onRequest(async (req, res) => {
  // var allowedOrigins = ['https://project-fes.web.app', 'http://localhost:3000'];
  // var Origin = req.headers.Origin;
  // if (allowedOrigins.indexOf(Origin) > -1) {
  //   res.set('Access-Control-Allow-Origin', Origin);
  // }

  res.set('Access-Control-Allow-Origin', 'https://project-fes.web.app');
  // res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type, authorization');

  const query = req.query.text;
  const parser = new Parser({
    customFields: {
      item: [
        ['media:thumbnail', 'thumbnail'],
        ['note:creatorImage', 'creatorImage'],
        ['note:creatorName', 'creatorName'],
      ]
    }
  });
  const feed = await parser.parseURL("https://note.com/" + query + "/rss");
  for (let i in feed.items) {
    let item = feed.items[i];
    // item.content; 長さ調整？
    delete item.contentSnippet;
    delete item.guid;
    delete item.isoDate;
  }

  //const writeResult = await admin.firestore().collection('note-rss').add(feed);
  res.json(feed);
});
