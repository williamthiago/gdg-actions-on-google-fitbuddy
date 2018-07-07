const functions = require("firebase-functions");
const { dialogflow } = require("actions-on-google");
const fetchGif = require("./components/gif");
const intents = require("./intents");

const INTENT_WELCOME = "Default Welcome Intent";
const INTENT_FALLBACK = "Default Fallback Intent";

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

const app = dialogflow();

app.intent(INTENT_WELCOME, intents.welcomeHandler);
app.intent(INTENT_FALLBACK, intents.fallbackHandler);

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
