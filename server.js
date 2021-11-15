const app = require('express')()
const cors = require('cors')

const restaurantRoutes = require('./api/restaurant/restaurantRoutes')
 

app.use(cors())

app.use('/restaurant', restaurantRoutes)


const server = app.listen(4000, () => console.info(`Example app listening on port 4000!`))
 
 // Require Route
 const api = require('./routes/routes');
 // Configure app to use route
 app.use('/api/v1/', api);