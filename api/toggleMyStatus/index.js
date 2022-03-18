module.exports = async function (context, req) {
    
    const accessToken = ''
    let res = fetch('https://api.particle.io/v1/devices/430050000351353530373132/myStatus', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Accept': 'application/json'
        },
        body: 'args="complete"'
    }).then(res => {
        context.log(res);
        context.res = {
            // status: 200, /* Defaults to 200 */
        };
    }).catch(error => {
        context.log(error);
        context.res = {
            status: 500, /* Defaults to 200 */
        };
    })

}