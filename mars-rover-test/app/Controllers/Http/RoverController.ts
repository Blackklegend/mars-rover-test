import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rover from "App/Models/Rover";

export default class RoverController {

    async index() {
        const rovers = await Rover.all();

        return rovers
    }

    async store({ request, response }: HttpContextContract) {
        const data = request.all()

        const rover = await Rover.create({id: data.id, x_position: data.x_position, y_position: data.y_position})

        response.status(201)

        return rover;
    }

    async show({params}: HttpContextContract) { 
        const rover = await Rover.findOrFail(params.id)
        
        return rover;
    }

    async update({params, request}: HttpContextContract) {
        const data = request.only(['x_position', 'y_position', 'facing'])
        const id = params.id

        const rover = await Rover.updateOrCreate({id: id} , {x_position: data.x_position, y_position: data.y_position, facing: data.facing})

        return rover;
    }

    async destroy({ params, response }: HttpContextContract) { 
        const rover = await Rover.findOrFail(params.id)

        rover.delete()

        response.status(204)
    }
}