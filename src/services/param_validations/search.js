import Joi from 'joi'

export default {
  search: {
    query: {
      name: Joi.string().required()
    }
  }
}
