/* eslint-disable */

import Mongoose from 'mongoose'
import assert from 'assert'

import { search } from '../services/search'
import config from '../config'

Mongoose.Promise = Promise

describe('Search Service', () => {
  before(done => {
    /*** database connection ***/
    const { mongo } = config.db
    Mongoose.connect(mongo, { useMongoClient: true })
    done()
  })

  after((done) => {
    /*** database closed ***/
    Mongoose.connection.db.dropDatabase((err) => {
      Mongoose.connection.close()
      done(err)
    })
  })

  describe('Search logic', () => {
    it('should exist', () => {
      assert.ok(search)
    })

    it('Should be a function to search', () => {
      assert.equal('function', typeof search)
    })

    it('Result search', (done) => {
      search("Gap Floral Pants").then(search => {
        assert.equal('<b>gap</b> floral <i>pants</i>', search)
        done()
      }).catch(error => {
        done(error)
      })
    })
  })
})
