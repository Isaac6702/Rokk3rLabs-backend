import Mongoose from 'mongoose'
import Promise from 'bluebird'

import config from '../config'

import Brand from '../models/brand'
import brandsData from './data/brand'
import ClothingType from '../models/clothing-type'
import clothingTypesData from './data/clothing-type'

Mongoose.Promise = Promise

async function loadData () {
  try {
    console.log(`Running seeds`)
    await Brand.remove({})
    await Brand.create(brandsData)

    await ClothingType.remove({})
    await ClothingType.create(clothingTypesData)
    Mongoose.connection.close()
    console.log(`The process finished`)
    process.exit()
  } catch (err) {
    console.log(`error: `, err)
  }
}

Mongoose.connect(config.db.mongo, { useMongoClient: true })
const mongo = Mongoose.connection

mongo
  .on('error', console.log)
  .once('open', loadData)
