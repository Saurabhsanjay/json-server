const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('db.json')
const filePath = path.join("/tmp", "db.json");
fs.writeFileSync(filePath, JSON.stringify(data));
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('/api', router)
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})

