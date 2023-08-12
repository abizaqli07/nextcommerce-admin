"use client"

import { DataTable } from "@/components/ui/data_table"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { FC } from "react"
import { OrderColumn, columns } from "./columns"

interface OrderClientprops {
  data: OrderColumn[]
}

const OrderClient: FC<OrderClientprops> = ({
  data,
}) => {

  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage order for your store"
      />
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="products"
      />
    </>
  )
}

export default OrderClient