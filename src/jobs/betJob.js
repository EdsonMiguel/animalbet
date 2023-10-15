const cron = require('node-cron');
const animals = require('../data/mappingAnimals')
const { v4 } = require('uuid')
const {
  startRabbitmqServer,
  publishInExchange,
} = require('../services/rabbitMQ');

async function betJob(){
  const hundredDrawer = () => Math.floor(Math.random() * 99);
  
  const encontrarAnimalPorDezena = (ten) =>{
    for (const animal in animals) {
      if (animals[animal].includes(ten)) {
        return animal;
      }
    }
  }
  
  cron.schedule('* * * * *', async () => {
    const hundredDrawn = hundredDrawer()
    const animalDrawn = encontrarAnimalPorDezena(hundredDrawn)
    const { channel } = await startRabbitmqServer('sua_uri_do_rabbitmq');

    const drawn = {
      id: v4(),
      hundredDrawn,
      animalDrawn,
      drawnAt: new Date()
    }

    await publishInExchange(channel, "root", "*", JSON.stringify(drawn))


    
  });
}

module.exports = betJob;