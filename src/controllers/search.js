import {search} from '../services/search'

const SearchController = {
  search (req, res, next) {
    search(req.query.search)
    .then(req => res.json({output: req}))
    .catch(err => next(err))
  }
}

export default SearchController
