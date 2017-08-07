
const passport = require('passport');

module.exports = app => {
    app.get('/auth/google', passport.authenticate ('google', {
            scope: ['profile', 'email']
        })
    )
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/', (req,res) => {
        res.send('ttttt');
    });

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user)
    })
}
// a convinient way of exporting routes -- refactoring project tructure