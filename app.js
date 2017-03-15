const restify = require('restify');
const builder = require('botbuilder');

const server = restify.createServer();
server.listen(process.env.PORT || 3001, function() {
  console.log('%s listening to %s', server.name, server.url);
});

const connector = new builder.ChatConnector({
  appId: 'myAppId', appPassword: 'myAppPassword'
});

const bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/', function() {
  session.send("Hello World");
});

