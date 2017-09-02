import Brand from '../models/brand'
import ClothingType from '../models/clothing-type'

function moreRelevance (input, results) {
  if (!results || results.length === 0) {
    return
  }
  const result = results.find(result => input.includes(result.name))
  return result.name
}

async function getSearchBrands (input) {
  const brands = await Brand.find({ $text: { $search: input } })
  return moreRelevance(input, brands)
}

async function getSearchClothingType (input) {
  const clothingType = await ClothingType.find({ $text: { $search: input } })
  return moreRelevance(input, clothingType)
}

export async function search (inputReq) {
  const input = inputReq.toLowerCase()
  const brand = await getSearchBrands(input)
  const clothingType = await getSearchClothingType(input)
  let result = input.replace(brand, `<b>${brand}</b>`)
  result = result.replace(clothingType, `<i>${clothingType}</i>`)
  return result
}
