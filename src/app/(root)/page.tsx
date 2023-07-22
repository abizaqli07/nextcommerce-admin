"use client"
import { Modal } from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  return (
    <main className=' w-screen min-h-screen'>
      <section className=' container'>
        
        <Modal isOpen onClose={() => {}} title='Test' description='desc'>
          Children
        </Modal>

      </section>
    </main>
  )
}

export default SetupPage;
