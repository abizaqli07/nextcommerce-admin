import prisma from "@/lib/prismadb";
import { FC } from "react";

interface DashboardPageProps {
  params: { storeId: string; }
}

const DashboardPage: FC<DashboardPageProps> = async ({
  params
}) => {
  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId
    }
  })

  return (
    <div>
      <div>DashboardPage</div>
      <div>Active store : {store?.name}</div>
    </div>
  )
}

export default DashboardPage