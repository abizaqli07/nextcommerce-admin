"use client"

import ApiList from "@/components/ui/api_list"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data_table"
import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { FC } from "react"
import { CategoryColumn, columns } from "./columns"

interface CategoryClientprops {
  data: CategoryColumn[]
}

const CategoryClient: FC<CategoryClientprops> = ({
  data,
}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage category for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
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
        description="API calls for categories"
      />
      <Separator />
      <ApiList
        entityName="categories"
        entityIdName="categoryId"
      />
    </>
  )
}

export default CategoryClient