# unfollow-bot
Bot to unfollow everyone you follow on roblox

See [https://github.com/Raccoonyz/unfriend-bot](https://github.com/Raccoonyz/unfriend-bot) for a similar bot that unfriends everyone you have friended
## Instructions 
First thing you'll have to is create a new Glitch account.
Go to [https://glitch.com](https://glitch.com/) and click `Join Glitch, it's free!`.

Click `Create an Account` and make your account.
When done, at the top, click `New Project`
You'll see a dropdown list. Select **hello-express**. Wait a little bit and you should be in your project.

Now you're in the project, but **it is public so anyone can see it.** To fix this, click the button at the top left then click the lock.
Go to `server.js` in your project and delete everything in it.
Copy the contents of the `server.js` file on **this** GitHub project and paste it into the `server.js` file in the Glitch project.
At the bottom, click Tools then Console. Enter `npm install noblox.js`.

While that's downloading you'll need to get a cookie viewer extension. This depends on your browser.
* Chrome: [EditThisCookie](https://chrome.google.com/webstore/detail/editthiscookie/fngmhnnpilhplaeedifhccceomclgfbg?hl=en)
* Edge: [Cookie Editor](https://microsoftedge.microsoft.com/addons/detail/cookie-editor/ajfboaconbpkglpfanbmlfgojgndmhmc?hl=en-US%3Fhl%3Den-US)

Download the appropriate extension, then go to the Roblox website. 
Go to your Profile page. Look up at the URL. You should see a string of numbers between users/ and /profile. Copy those numbers.
Now go back to the `server.js` Glitch file. Go to the very top and paste the string of numbers between the first two ".
Then go back to the Roblox website.
Click on the extension and search for the .ROBLOSECURITY cookie.
Copy the value of the cookie.

Go back to the `server.js` file and paste the cookie's value between the second pair of "s. 
Wait a little bit, and if you did it correctly, it should start unfollowing everyone you have followed.
