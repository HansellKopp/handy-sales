import { seedProducts } from './product'
import { seedParameters } from './parameter'

function seed() {
    seedProducts()
    seedParameters()
}

export default seed