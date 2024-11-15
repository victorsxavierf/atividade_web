import express from 'express'
import router from './infra/http'

const port =  3000

const app = express()

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Listenning to port ${port}`)
})