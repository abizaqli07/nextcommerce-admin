"use client"

import { useStoreModal } from "@/hooks/use_store_modal"
import { Modal } from "@/components/ui/modal"

const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  )
} 