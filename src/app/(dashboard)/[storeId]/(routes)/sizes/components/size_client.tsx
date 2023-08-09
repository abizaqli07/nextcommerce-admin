"use client"

import ApiList from "@/components/ui/api_list"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data_table"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { FC } from "react"
import { SizeColumn, columns } from "./columns"

interface SizesClientProps {
  data: SizeColumn[]
}

const SizeClient: FC<SizesClientProps> = ({
  data,
}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage size for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className=" mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable
        columns={columns}
        data={data}
        searchKey="name"
      />
      <Heading
        title="API"
        description="API calls for sizes"
      />
      <Separator />
      <ApiList
        entityName="sizes"
        entityIdName="sizeId"
      />
    </>
  )
}

export default SizeClient