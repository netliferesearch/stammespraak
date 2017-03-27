This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## TL;DR

Get the website up and running

* `npm i -g yarn && yarn`
* `npm start`
* `heroku git:remote -a stammespraak`
* `heroku config -s > .env`

Enable the Slack Outgoing Webhook

* `npm i -g wt-cli` Innstall webtasks-cli
* Fetch the authentication token from graph.cool
* `wt create wt-stammespraak wt-stammespraak.js`
* Use the wt-URL in a Slack outgoing webhook
* The slash command is set to take `word;definition`
