const express = require ('express');
const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

const users = [
    {id: 1, name: 'Tam' },
    {id: 2, name: 'Tuong' }
];

app.get('/', function(req, res) {
    res.render('index', {
        name: 'CMT'
    });
});

app.get('/users', function(req, res) {
    res.render('users/index', {
        users: users
    });
});

app.get('/users/search', function(req, res) {
    const q = req.query.q;
    const matchedUsers = users.filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });
});

app.listen(port, function() {
    console.log('Sever listening on port ' + port);
});