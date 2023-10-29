const cron = require('node-cron');
const animals = require('../data/mappingAnimals')
const { v4 } = require('uuid')
const { add } = require('../repositories/drawRepository')
const {
  startRabbitmqServer,
  publishInExchange,
} = require('../services/rabbitMQ');

async function betJob(){
  const hundredDrawer = () => Math.floor(Math.random() * 99);
  const { channel } = await startRabbitmqServer(process.env.RABBITMQ_URL);
  
  const findAnimalByTen = (ten) =>{
    for (const animal in animals) {
      if (animals[animal].includes(ten)) {
        return animal;
      }
    }
  }
  
  cron.schedule('* * * * *', async () => {
    const hundredDrawn = hundredDrawer()
    const animalDrawn = findAnimalByTen(hundredDrawn)
    
    const drawn = {
      id: v4(),
      hundredDrawn,
      animalDrawn,
      drawnAt: new Date()
    }
    try {
      await publishInExchange(channel, "draws", '', JSON.stringify(drawn))
    } catch (error) {
      console.log(`Falha ao enviar mensagem a fila: `, error)
    }
    await add(drawn)
  });
}

module.exports = betJob;