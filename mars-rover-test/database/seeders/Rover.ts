import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RoverFactory from 'Database/factories/RoverFactory'

export default class extends BaseSeeder {
  public async run () {
    await RoverFactory.createMany(10)
  }
}
