const router = require('express').Router();
var jsonwebtoken = require('jsonwebtoken');
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCnFCRgmxD4ay1o
jWCQ2c2K/nCTFaHEc1tL99gHTEMviBwYkbYaA8h1oBhVbvIQsgmmPBy5iMnmE9Tv
8+aenZ1AEdFNE/OIwyw5tuEAzZXRKkXhBIDkRuuRfvKuCM7i1E78lAyP6+7rx8kv
WbYUJ0Rhm3A9ifHYh4x9kazEAxAN7vKrBHHdgpAgA6aNan8IUNn0tZh49+OWxxo3
bG9qoPRNoIZtCBG5qkHvS4WbGhSBXRpC6WJJKbDkhPAe5WOtDM0LTVGxYGNBckcj
SUY7r56fKWtKrL0GmGNOEHoffq4pFiRsXP6EYD+GQ3MLZfX9/N4+BOtHAi017eFO
0+FeBu+5AgMBAAECggEAMT8Rndv2+5Hzt258eRWJrR9kJSZqIRJzZYfvB++lmfv/
dAp252IYEvuWUJA8D0m66GGtgc5c3FEaIYP9hOEmOX1G+PYZgUUt4vERjwAJ2bYh
FLsUFrUEuET32O5FtLwpb+9faIh9Ssf/d9J0haoxUKfVRH5FZ7JEabqndrsEX2aE
T96AM93abYKLZN3cHkb/dkajyVhPI91bxDVs0yXVRyHX3HTVDM3LBddY+eof4eOh
AVuI4Ehu65PHPAFQVViuZ8EnkcEw1WzjfrLaMoe8gI4KvDIStAg1yZUeJuAdZx64
lWAglQC6kKiK7/QfRcIIIrhaK9hFBjVT9ZC0rT12kQKBgQDz/c1Jh1SdPX8RDHOK
jSS7sxLZ6dD8ZQLq8Ilng5MiDX1MtFxaSv3uD3rA6l7xgoxdSgDl1KLnWZn4ezkq
6ruyXGGA66clhLYUrc1ynJVGWIwDh6gOp/xgmHWQleTjzZoZT8OQCN4pIFhkh1JD
6G0ccOqQ/gDMu7XEiqWt+SRA/QKBgQCvTUTwdXs4e4hSjz9hal3VAXqJBNwtvE1a
jWNUH6/QrIdgEgKsWEB7AC/HSM2PexP4Sn9B8o3tfyqzk7WZnQYcd3OjCfbbm2U1
UE49Oeg5IOCohiN0d7lk2PN0y7AT3cTbY05AEflJcSDheiL/1rNXc9qHmztVBVcO
DrDeMamUbQKBgQDxeJGe34xiQeZrnQMMcDuWd9eESt9Fq0KD+aJDC/iljuwe6bEs
u2MsI629Fzb3ldgMy5yv2Q2QISE8xdcCHmW8U6k7yf0WKI17UbcuYsFpaWDIbY1p
U992SeywN2jb+zMzMbm95sjXsudINpS4GGND7ox3CqsH9A4kgYMO9q9mkQKBgQCJ
krJPo2MYaJoLcK/k23zX9VkcvtusaOKr9dnF4zgvI7b6Bihi6L9xyCu20cPAnm6F
pLFKJ/iKMgpo87rI2xo4rOXrRZ6dqc47kNJV6mP8sXidyOd6N5sfMcOeHVwJuzkK
k1yNm41vvYB4c0mUTgJg12LgmUpu5snzFkRnm8Hh4QKBgQDvrGwrxPD39q4O95HC
lSjqhkUeWzXJUokiSLvkmJf4+tlMz8/zfG7ZzCR7B/nC9z+84d1Lyzb0nkxyylRq
IoJdZiQACwQSiErjuJ9zVUpI3k90B0SYFIU6WS0/4fQiNN4LDTI97PExeGzXks69
PLRIlLCKVuQYepPZnFjsPgRAhA==
-----END PRIVATE KEY-----`
/**
 * Function generates a JaaS JWT.
 */
const generate = (privateKey, { id, name, email, avatar, appId, kid }) => {
  const now = new Date()
  const jwt = jsonwebtoken.sign({
    aud: 'jitsi',
    context: {
      user: {
        id,
        name,
        avatar,
        email: email,
        moderator: 'true'
      },
      features: {
        livestreaming: 'true',
        recording: 'true',
        transcription: 'true',
        "outbound-call": 'true'
      }
    },
    iss: 'chat',
    room: '*',
    sub: appId,
    exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
    nbf: (Math.round((new Date).getTime() / 1000) - 10)
  }, privateKey, { algorithm: 'RS256', header: { kid } })
  return jwt;
}



router.route('/').post((req,res)=>{
    const token = generate(privateKey, {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        avatar: req.body.avatar,
        appId: req.body.appId, 
        kid: req.body.kid
    });
    
    res.send(token)

})

module.exports =router;