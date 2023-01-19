import { Assert } from "@japa/assert";
import { test } from "@japa/runner";
import RoverFactory from 'Database/factories/RoverFactory'

test.group("CRUD rovers", (group) => {
    const assert = new Assert()

    test('registering data to the database', async () => { 
    
        const rovers = await RoverFactory.createMany(5)
    
        assert.isArray(rovers, "not able to register data do the database -> " + rovers.toString())
        assert.isNotEmpty(rovers, "not able to register data do the database -> " + rovers.toString())

    })

    test('get all rovers', async ({ client }) => {
        const response = await client.get('/api/v1/rover')
      
        response.assertStatus(200)
        response.assertBodyContains([{}])
      })
      
    test('store a rover', async ({ client }) => {
        const response = await client.post('/api/v1/rover')
        
        response.assertStatus(201)
    })
})