import express from 'express'
import validate from 'express-validation'

import Search from '../controllers/search'
import SearchValidator from '../services/param_validations/search'

const router = express.Router()

/**
 * @swagger
 * /api/v1/searches:
 *   get:
 *     tags:
 *       - Searches
 *     description: Find the marks and types of clothes and returns this in bold and in cursive respectively
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: search
 *         description: Search field
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        description: Output
 *        schema:
 *          type: object
 *          properties:
 *            output:
 *              type: string
 */
router.route('/v1/searches').get(validate(SearchValidator), Search.search)

export default router
