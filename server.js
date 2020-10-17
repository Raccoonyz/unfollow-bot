const yourUserId = ""; // put your user id here
const robloSecurity = ""; // put roblosecurity token here

const noblox = require("noblox.js");
function loop(f, number) {
  setTimeout(function() {
    console.log(number);
    noblox.unfollow(f[number].id);
    yes(f, number + 1);
  }, 500);
}

async function run() {
  await noblox.setCookie(robloSecurity);
  console.log("Bot is up");
  var friends = noblox.getFollowings(yourUserId, undefined, 100).then(friends => {
    loop(friends.data, 0);
  })
}

run();
