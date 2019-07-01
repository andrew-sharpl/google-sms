// Set these as your evnironment variables (run source env.sh)
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const sendTo = process.env.sendTo;
const sendFrom = process.env.sendTo;
if (!accountSid) throw new Error("No account sid provided");
if (!authToken) throw new Error("No auth token provided");

const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Howdy!!",
    from: process.env.sendFrom,
    to: process.env.sendTo
  })
  .then(message => console.log(message.sid));
