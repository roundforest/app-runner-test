// ESM
import Fastify from 'fastify'
const fastify = Fastify({
  logger: true
})

// Run the server!
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

// Run the server!
fastify.get('/health', async (request, reply) => {
  return {statusCode: 200, message: 'Healthy!'}
})
  
/**
 * Run the server!
 */
const start = async () => {
  try {
    const runPort = +process.env.PORT || 3030
    const app = await fastify.listen({ port: runPort })
    console.log(`server is running!, app: ${app} on port: ${runPort}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()  
