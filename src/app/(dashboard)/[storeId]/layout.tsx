import { auth } from "@clerk/nextjs"
import { ReactNode } from "react"
import { redirect } from "next/navigation"
import prisma from "@/lib/prismadb"
import Navbar from "@/components/navbar"


const Dashboardlayout = async ({
  children,
  params
}: {
  children: ReactNode,
  params: { storeId: string }
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prisma.store.findFirst({
    where: {
      id: params.storeId,
      userId
    }
  });

  if (!store) {
    redirect('/')
  }

  return (
    <div>
      <Navbar />

      {children}
    </div>
  )
}

export default Dashboardlayout