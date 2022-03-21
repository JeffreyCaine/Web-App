module.exports = async function (context, req) {
    const accessToken = ''
    // const arg = req.body
    // context.log(arg)
    try {
      const res = await (
        await fetch(
          'https://api.particle.io/v1/devices/430050000351353530373132/myStatus',
          {
            method: 'POST',
            headers: {
              Authorization: accessToken,
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:4280',
            },
            body: JSON.stringify('reset'),
          }
        )
      ).json()
      context.log(res)
    } catch (err) {
      context.log(err)
    }
    context.res.json({
      text: "Hello from the myStatus API"
    })
  }