const express = require('express');
const bodyParser = require ('body-parser'); // Importa bodyParser antes de usarlo
const taskroutes = require('./routes/taskRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const authUtils = require('./middleware/authUtilities');

const app = express();
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(username === 'admin' && password === 'admin'){
        const token = authUtils.generateToken({id: 1, username: username});
        res.json({token});
    } else {
        res.status(401).json({error: "Unauthorized"})
    }
});

app.use('/task',taskroutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor inicializado en el puerto${port}`);
});
