// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rover from "App/Models/Rover";

export default class RoversController {

    async index() {
        const rovers = await Rover.all();

        return rovers
    }

    async store({ request }) {
        const data = request.only(['x_position', 'y_position', 'facing'])

        const rover = await Rover.create({id: data.id, x_position: data.x_position, y_position: data.y_position})

        return rover;
    }

    async show({params}) { 
        const rover = await Rover.findOrFail({id: params.id })
        
        return rover;
    }

    async update({params, request}) {
        const data = request.only(['x_position', 'y_position', 'facing'])
        const id = params.id

        const rover = await Rover.updateOrCreate({id: id} , {x_position: data.x_position, y_position: data.y_position, facing: data.facing})

        return rover;
    }

    async destroy({ params }) { 
        const rover = await Rover.findOrFail({id: params.id})

        rover.delete()
    }
}
