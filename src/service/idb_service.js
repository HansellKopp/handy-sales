/* eslint import/no-webpack-loader-syntax: off */
import * as JsStore from 'jsstore'
import { tblProducts } from '../model/product'
import { tblParameters } from '../model/parameter'

const getWorkerPath = () => {
  if (process.env.NODE_ENV === 'development') {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js')
  } else {
    return require('file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js')
  }
}

// This will ensure that we are using only one instance.
// Otherwise due to multiple instance multiple worker will be created.
const workerPath = getWorkerPath()
export const idbCon = new JsStore.Connection(new Worker(workerPath))
export const dbname = 'Pedidos'

const getDatabase = () => {
  
  const dataBase = {
    name: dbname,
    tables: [tblProducts, tblParameters]
  }
  return dataBase
}

export const initJsStore = () => {
  try {
    const dataBase = getDatabase()
    idbCon.initDb(dataBase)
  } catch (ex) {
    console.error(ex)
  }
}
