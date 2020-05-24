import { DATA_TYPE } from 'jsstore' // IDataBase, /, ITable
import { DbService } from '../service/dbService'

import items from './products.js'

export const tblProducts = {
  name: 'Products',
  columns: {
    id: {
      primaryKey: true,
      autoIncrement: true
    },
    idProducto: {
      notNull: true,
      dataType: DATA_TYPE.String
    },
    descripcion: {
      notNull: true,
      dataType: DATA_TYPE.String
    },
    unidadMedida: {
      // notNull: true,
      dataType: DATA_TYPE.String
    },
    peso: {
      // notNull: true,
      dataType: DATA_TYPE.Float
    },
    precio: {
      dataType: DATA_TYPE.Float
    },
    pvs: {
      dataType: DATA_TYPE.Float
    },
    existencia: {
      dataType: DATA_TYPE.Float
    },
    iva: {
      dataType: DATA_TYPE.Float
    },
    grupo: {
      dataType: DATA_TYPE.Float
    },
    codigo: {
      dataType: DATA_TYPE.Float
    },
    updated_at: {
      dataType: DATA_TYPE.DateTime
    },
    deleted_at: {
      dataType: DATA_TYPE.DateTime
    }
  }
}

export async function seedProducts () {
  const service = new DbService('Products')
  const productsCount = await service.getCount() 
  if(productsCount > 0) return
  items.forEach(element => {
    const newValues = {}
    Object.keys(element).forEach(key => {
      const newKey = key.charAt(0).toLowerCase() + key.slice(1)
      newValues[newKey] = element[key]
    })
    service.addItem({ ...newValues })
  })
}
