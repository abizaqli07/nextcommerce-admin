"use client"

import ApiList from "@/components/ui/api_list"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data_table"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { FC } from "react"
import { BillboardColumn, columns } from "./columns"

interface BillboardClientprops {
  data: BillboardColumn[]
}

const BillboardClient: FC<BillboardClientprops> = ({
  data,
}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboard for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className=" mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="label"
      />
      <Heading
        title="API"
        description="API calls for billboard"
      />
      <Separator />
      <ApiList
        entityName="billboards"
        entityIdName="billboardId"
      />
    </>
  )
}

export default BillboardClient