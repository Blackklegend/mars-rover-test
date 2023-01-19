import rover from 'App/Models/rover'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(rover, ({ faker }) => {
  faker.seed()
  return {
    id: faker.datatype.number(),
    x_position: faker.datatype.number({ min: 0, max: 100}),
    y_position: faker.datatype.number({ min: 0, max: 100}),
    facing: faker.random.alpha({ count: 1, casing: 'upper', bannedChars: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']})
  }
}).build()
