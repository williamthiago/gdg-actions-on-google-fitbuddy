const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');
const fetchGif = require('./components/gif');
const intents = require('./intents');

const INTENT_WELCOME = 'Default Welcome Intent';
const INTENT_FALLBACK = 'Default Fallback Intent';
const INTENT_USERBODYINFO = 'user.bodyinfo';
const INTENT_USERCONSUME = 'user.consume';

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

const app = dialogflow();

app.intent(INTENT_WELCOME, intents.welcomeHandler);
app.intent(INTENT_FALLBACK, intents.fallbackHandler);
app.intent(INTENT_USERBODYINFO, intents.userBodyInfoHandler);
app.intent(INTENT_USERCONSUME, intents.userConsumeHandler);

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
