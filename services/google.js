const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();

//Google Client ID = "606891675195-pp4g8kh5ajh34fqfr5a10r35hkuku8d6.apps.googleusercontent.com"

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload.name;

  return userid;
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}

// verify().catch(console.error);
module.exports.verify = verify;
