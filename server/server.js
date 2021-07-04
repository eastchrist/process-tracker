// Imports
const express     = require('express');
const bodyParser  = require('body-parser');
const cookieParser = require('cookie-parser');

const userRoutes   = require('./routes/user.routes');
const factoryRoutes   = require('./routes/factory.routes');
const computerRoutes   = require('./routes/computer.routes');
const areaRoutes   = require('./routes/area.routes');
const tankAreaRoutes   = require('./routes/tankArea.routes');
const tankAreaDefEmptyingRoutes   = require('./routes/tankAreaDefEmptying.routes');
const tankAreaDefFillingRoutes   = require('./routes/tankAreaDefFilling.routes');
const serverRoutes   = require('./routes/server.routes');
const plcRoutes   = require('./routes/plc.routes');
const tankRoutes   = require('./routes/tank.routes');
const equipRoutes   = require('./routes/equip.routes');
const digitalRoutes   = require('./routes/digital.routes');
const analogRoutes   = require('./routes/analog.routes');
const productRoutes   = require('./routes/product.routes');
const fonctionRoutes   = require('./routes/fonction.routes');
const measureRoutes   = require('./routes/measure.routes');
const projectRoutes   = require('./routes/project.routes');
const projectActionRoutes   = require('./routes/projectAction.routes');
const measureTypeRoutes   = require('./routes/measureType.routes');
const projectTypeRoutes   = require('./routes/projectType.routes');
const projectStatusRoutes   = require('./routes/projectStatus.routes');
const traceabilityRoutes   = require('./routes/traceability.routes');

require("dotenv").config( { path: ".env"})

const {checkUser, requireAuth} = require('./middleware/auth.middleware');

const cors = require('cors');

// Instantiate app
var app = express();

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }

app.use(cors(corsOptions));

// Body Parser configuration
app.use(bodyParser.json( {limit: '50mb'} ));
app.use(bodyParser.urlencoded( {limit: '50mb', extended: true} ));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});

// routes
app.use('/users', userRoutes);
app.use('/factorys', factoryRoutes);
app.use('/computers', computerRoutes);
app.use('/areas', areaRoutes);
app.use('/tankAreas', tankAreaRoutes);
app.use('/tankAreaDefEmptyings', tankAreaDefEmptyingRoutes);
app.use('/tankAreaDefFillings', tankAreaDefFillingRoutes);
app.use('/servers', serverRoutes);
app.use('/plcs', plcRoutes);
app.use('/tanks', tankRoutes);
app.use('/equips', equipRoutes);
app.use('/digitals', digitalRoutes);
app.use('/analogs', analogRoutes);
app.use('/products', productRoutes);
app.use('/fonctions', fonctionRoutes);
app.use('/measures', measureRoutes);
app.use('/projects', projectRoutes);
app.use('/projectActions', projectActionRoutes);

app.use('/measureTypes', measureTypeRoutes);
app.use('/projectTypes', projectTypeRoutes);
app.use('/projectStatus', projectStatusRoutes);

app.use('/traceabilitys', traceabilityRoutes);

//CCA Deploy
// Handle production
if (process.env.NODE_ENV === 'production') {
    //Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle simple page application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}
// Launch app
app.listen(process.env.PORT, function() {
    console.log(`Listening on Port http://localhost:${process.env.PORT}`);
});
