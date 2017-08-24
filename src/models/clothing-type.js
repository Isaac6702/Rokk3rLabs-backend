import mongoose from 'mongoose'
import paginate from 'mongoose-paginate'
import uniqueValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema

/**
 * @swagger
 * definitions:
 *   ClothingType:
 *     type: object
 *     required:
 *       - name
 *     properties:
 *       name:
 *         type: string
 */
const ClothingTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true
  }
},
  {
    collection: 'clothingType',
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  })

ClothingTypeSchema.plugin(uniqueValidator)
ClothingTypeSchema.plugin(paginate)
ClothingTypeSchema.index({name: 'text'})

export default mongoose.model('ClothingType', ClothingTypeSchema)
