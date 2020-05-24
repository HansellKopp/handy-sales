import React, { useState, useEffect } from 'react'
import useReactRouter from 'use-react-router'
import { hasPermission } from '../../utils'
import Presenter from './presenter'
import { DbService } from '../../service/dbService'
const service = new DbService('Suppliers')

const options = {
  url: '/suppliers',
  title: 'Proveedor',
  titleNew: 'Nuevo proveedor',
  actionList: 'Proveedores',
  actionDelete: 'Eliminar',
  actionCancel: 'Cancelar',
  actionCreate: 'Crear',
  actionUpdate: 'Actualizar',
  addNew: 'Crear proveedor',
  deleted: 'Proveedor eliminado',
  saved: 'Proveedor guardado correctamente',
  continue: 'Continuar',
  canCreate: hasPermission('supplier_create'),
  canUpdate: hasPermission('supplier_update'),
  canDelete: hasPermission('supplier_delete'),
  fields: [
    {field: 'rif', label: 'Cedula Rif', type: 'text', edit: true, className: 'md-cell md-cell--6'},
    {field: 'name', label: 'Razon Social', type: 'text', edit: true,  className: 'md-cell md-cell--6'},
    {field: 'address', label: 'Direccion', type: 'text', edit: true, className: 'md-cell md-cell--12'},
    {field: 'phone', label: 'Telefono', type: 'text', edit: true, className: 'md-cell md-cell--6'}
  ],
  defaultState: { data:{}, toasts:[], loading: true, isNew: true },
  errors: []
}

function Container () {
  const [state, setState] = useState(options.defaultState)
  const { history, match } = useReactRouter()
  const id = match.params.id

  useEffect(() => {
    async function fetchData () {
      try {
        if(id !== 'new') {
          const data = await service.getItemById(id)
          setState({ ...options.defaultState, data ,loading: false, isNew: false})
        } else {
          setState({ ...options.defaultState, loading: false})
        }
      } catch (ex) {
        console.error(ex)
      }
    }
    fetchData()
  }, [id])

  const setToast = toasts => {
    setState({ ...state, toasts })
  }

  const eventHandler = {
    handleDelete: async () => {
      await service.removeItem(id)
      setToast([{
        text: options.deleted,
        action: options.continue,
        onDismiss: () => history.push(`${options.url}`)}
      ])
    },
    handleSubmit: async e => {
      e.preventDefault()
      if (state.isNew) {
        const newItem = await service.addItem(state.data)
        if(newItem.length) {
          const newId = newItem[0].id
          setToast([{text: props.saved,
            action: options.continue,
            onDismiss: () => history.push(`${options.url}/${newId}`)
          }])
        }
      } else {
        const item = await service.updateItemById(id, state.data)
        if(item) {
          setToast([{text: props.saved,
            action: options.continue,
            onDismiss: () => history.push(`${options.url}`)}])
          return
        }
      }
    },
    setData: data => {
      setState({ ...state, data })
    },
    handleDismiss: () => {}
  }

  const props = { ...options, ...state, ...eventHandler }

  return (
    <Presenter {...props} />
  )
}

export default Container
