import AdminLayout from '@/components/AdminLayout'
import Order from '@/components/Order'
import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

export default function Admin() {

  const fetcher = () => axios('/api/orders').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {refreshInterval:500})
  console.log(data)

  return (
    <>
      <AdminLayout pagina={'Ordenes'}>
        <h1 className=" text-4xl font-black">Panel de Administracion</h1>
        <p className="text-2xl my-10">Administra las Ordenes</p>

        {data && data.length 
        ? data.map( (orderItem) => (
          <Order key={orderItem.id} orderItem={orderItem}/>
        ))
        : <p>No Hay Ordenes Pendientes</p>}

      </AdminLayout>
    </>
  )
}
