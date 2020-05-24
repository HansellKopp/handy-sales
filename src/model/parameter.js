import { DATA_TYPE } from 'jsstore' // IDataBase, /, ITable
import { DbService } from '../service/dbService'

import items from './parameters.js'

export const tblParameters = {
  name: 'Parameters',
  columns: {
    id: {
      primaryKey: true,
      autoIncrement: true
    },
    rif: {
      notNull: true,
      dataType: DATA_TYPE.String
    },
    name: {
      dataType: DATA_TYPE.String
    }
  }
}

export async function seedParameters () {
  const service = new DbService('Parameters')
  const parameterCount = await service.getCount() 
  if(parameterCount > 0) return
  items.forEach(element => {
    service.addItem({ ...element })
  })
}
