import mongoose from 'mongoose'
import paginate from 'mongoose-paginate'
import uniqueValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema

/**
 * @swagger
 * definitions:
 *   Brand:
 *     type: object
 *     required:
 *       - name
 *     properties:
 *       name:
 *         type: string
 */
const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true
  }
},
  {
    collection: 'brand',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })

BrandSchema.plugin(uniqueValidator)
BrandSchema.plugin(paginate)
BrandSchema.index({name: 'text'})

export default mongoose.model('Brand', BrandSchema)
