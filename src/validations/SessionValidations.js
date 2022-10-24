const yup = require('yup')

class SessionValidations {
  async index(req, res, next) {
    const shema = yup.object().shape({
      tipo: yup.string().required()
    })

    if (!(await shema.isValid(req.body))) {
      return res.status(401).json({ error: 'type not found' })
    }

    return next()
  }
}

module.exports = new SessionValidations()
