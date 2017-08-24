import objectId from 'joi-objectid'
import Joi from 'joi'

Joi.objectId = objectId(Joi)

export default {
  create: {
    body: {
      name: Joi.string().required(),
      lastname: Joi.string().required(),
      email: Joi.string().email().required(),
      gender: Joi.string(),
      birthdate: Joi.date(),
      password: Joi.string().required()
    }
  }
}
