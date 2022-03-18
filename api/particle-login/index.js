module.exports = async function (context, req) {
    var Particle = require('particle-api-js');
    var particle = new Particle();

    particle.login({ username: 'me@jeffwilliams.dev', password: '' }).then(
        function (data) {
            const token = data.body.access_token
            context.res.json({
                token: token,
                text: "Hello from the particle login API"
            })
        },
        function (err) {
            console.log('Could not log in.', err);
            context.res.json({
                token: null,
                text: err
            })
        }
    );
};