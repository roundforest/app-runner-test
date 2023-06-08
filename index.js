// ESM
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Run the server!
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  
  /**
   * Run the server!
   */
  const start = async () => {
    try {
      await fastify.listen({ port: 8080 })
      console.log('server is running!')
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()  
