const { connect } = require("amqplib");

async function startRabbitmqServer(uri) {
  const conn = await connect(uri);
  const channel = await conn.createChannel();
  return { conn, channel };
}

async function publishInQueue(channel, queue, message) {
  return channel.sendToQueue(queue, Buffer.from(message));
}

async function publishInExchange(channel, exchange, routingKey, message) {
  return channel.publish(exchange, routingKey, Buffer.from(message));
}

module.exports = {
  startRabbitmqServer,
  publishInQueue,
  publishInExchange,
};
