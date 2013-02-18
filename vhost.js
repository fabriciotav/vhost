var app,
    bhjs,
    celula,
    dp,
    express,
    sitio,
    um;

// ..........................................................
// NODE MODULES
//
express    = require('express');

// ..........................................................
// APP :: api.celula.in
//
celula = express();
routesCelula = require('../celula-rest-api/routes').routes(celula);

// ..........................................................
// APP :: um-a-um.com
//
um = express();

// ..........................................................
// APP :: dadospublicos.org
dp = express();

// ..........................................................
// APP :: sitiodochicao.com.br
sitio = express();

sitio.get('/', function(req, res) {
    res.send('sitiodochicao.com.br');
});

// ..........................................................
// APP :: bhjs.in
bhjs = express();

// ..........................................................
// MAIN APP
app = express();

app.use(express.vhost('bhjs.in', bhjs));
app.use(express.vhost('api.celula.in', celula));
app.use(express.vhost('dadospublicos.org', dp));
app.use(express.vhost('sitiodochicao.com.br', sitio));
app.use(express.vhost('um-a-um.com', um));

app.listen(80);
console.log( "Server started at port 80" );