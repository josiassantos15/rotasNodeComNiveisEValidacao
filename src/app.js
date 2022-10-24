import express from 'express'

class App {
  constructor() {
    this.server = express()
    console.log('Aqui tambem')
    this.middleware()
    this.routes()
  }

  middleware() {
    this.server.use(express.json())
  }

  routes() {}
}

module.exports = new App().server
