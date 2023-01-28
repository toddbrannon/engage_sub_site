const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

require('dotenv').config();
// require('./src/connect/mongodb');

const port = 3000;

var MemoryStore = require('memorystore')(session)
const UserService = require('./src/user')
const Stripe = require('./src/connect/stripe')
const setCurrentUser = require('./src/middleware/setCurrentUser')
const hasPlan = require('./src/middleware/hasPlan')
const plans = require('./src/js/plans')

const app = express()
app.use(session({
    saveUninitialized:false,
    cookie:{maxAge:86400000},
    store: new MemoryStore({
        checkPeriod:8640000 //prune expired entries every 24h
    }),
    resave: false,
    secret: 'keyboard cat'
}))

app.use('/webhook', bodyParser.raw({ type:'application/json' }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))
app.engine('html', require('ejs').renderFile)

app.get('/', (req,res)=>{
    // render method takes two parameters
    // first parameter should be the .ejs file
    // second parameter should be an object
    // which is accessible in the .ejs file  
    // this .ejs file should be in views folder 
    // in the root directory.
    res.render('index.ejs', {plans});
})

app.get('/free', (req,res)=>{
    res.render('free.ejs', {plans});
})

app.get('/pro', (req,res)=>{
    res.render('pro.ejs', {plans});
})

app.get('/premium', (req,res)=>{
    res.render('premium.ejs', {plans});
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Listen on port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

