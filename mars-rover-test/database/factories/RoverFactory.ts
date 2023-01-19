import rover from 'App/Models/rover'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(rover, ({ faker }) => {
  return {
    id: faker.seed(),
    x_position: faker.seed(),
    y_position: faker.seed(),
    facing: faker.random.alpha({ count: 1, casing: 'upper', bannedChars: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']})
  }
}).build()
