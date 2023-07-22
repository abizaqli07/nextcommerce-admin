import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { ReactNode } from "react"


const SetupLayout = async ({
  children
}: {
  children: ReactNode
}) => {
  const {userId} = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prisma.store.findFirst({
    where: {
      userId
    }
  });

  if (store) {
    redirect(`/${store.id}`)
  }

  return (
    <div>
      <div>
        This is Navbar
        {/* TODO : Navbar */}
      </div>

      {children}
    </div>
  )
}

export default SetupLayout