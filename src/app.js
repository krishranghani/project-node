require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT

app.use(express.json());

async function main(){
 await mongoose.connect(process.env.MONGO_DB_URL)
}
main()
.then(()=>console.log('DB is connected'))
.catch(err => console.log(err.message));

const adminsroutes = require('./routes/admin/index.routes');
app.use('/api/admin',adminsroutes);

const usersRoutes = require('./routes/user/index.routes');
app.use('/api/user',usersRoutes)

app.listen(port, async ()=>
{
    console.log(`server is start at http://localhost:${port}`);
})