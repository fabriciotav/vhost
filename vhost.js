var app,
    bhjs,
    celula,
    apiDP,
    loadApiDP,
    express,
    sitio,
    um;

// ..........................................................
// NODE MODULES
//
express    = require('express');

// ..........................................................
// APP :: bhjs.in
bhjs = express();
appBhjs = require('../bhjs/server').boot(bhjs);

// ..........................................................
// APP :: celula.in
//
celula = express();

// ..........................................................
// APP :: api.celula.in
//
apiCelula = express();
routesCelula = require('../celula-rest-api/routes').routes(apiCelula);

// ..........................................................
// APP :: dev.celula.in
//
devCelula = express();

// ..........................................................
// APP :: um-a-um.com
//
um = express();

// ..........................................................
// APP :: dadospublicos.org
apiDP = express();
loadApiDP = require('../rest-api/settings').routes(apiDP);

// ..........................................................
// APP :: sitiodochicao.com.br
sitio = express();
routesSitio = require('../Sitio/settings').routes(sitio);

// ..........................................................
// APP :: valeriatavares.com
valeria = express();
routesValeria = require('../artesanato/settings').routes(valeria);

// ..........................................................
// MAIN APP
app = express();

app.use(express.vhost('bhjs.in', bhjs));
app.use(express.vhost('celula.in', celula));
app.use(express.vhost('api.celula.in', apiCelula));
app.use(express.vhost('dev.celula.in', devCelula));
app.use(express.vhost('api.dadospublicos.org', apiDP));
app.use(express.vhost('sitiodochicao.com.br', sitio));
app.use(express.vhost('um-a-um.com', um));
app.use(express.vhost('valeriatavares.com', valeria));

app.listen(80);
console.log( "Server started at port 80" );