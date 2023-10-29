const amqp = require("amqplib");

async function startRabbitmqServer(uri) {
  const connection = await amqp.connect(uri, );
  const channel = await connection.createChannel();
  return { connection, channel };
}
async function publishInExchange(channel, exchange, routingKey, message) {
  return channel.publish(exchange, routingKey, Buffer.from(message));
}

module.exports = {
  startRabbitmqServer,
  publishInExchange,
};
