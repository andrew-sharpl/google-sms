// Set these as your evnironment variables (run source env.sh)
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
if (!accountSid) throw new Error("No account sid provided");
if (!authToken) throw new Error("No auth token provided");

const express = require("express");
const Twilio = require("twilio");
const MessagingResponse = Twilio.twiml.MessagingResponse;
const app = express();
const client = Twilio(accountSid, authToken);

app.post("/sms", (req, res) => {
  // const twiml = new MessagingResponse();
  client.messages
  .list({ limit: 1, to: process.env.sendFrom })
  .then(messages => messages.forEach(m => console.log(m.body)));
  // twiml.message("Hello there");
  // res.writeHead(200, { "Content-Type": "text/xml" });
  // res.end(twiml.toString());
});

app.listen(1337, () => {
  console.log("Express server listening on port 1337");
});

async function getSids() {
  var sids = await client.messages.list();
  console.log(sids);
}
