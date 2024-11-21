import React, { useState } from 'react';
import AddProductModal from './AddProductModal';

const ProductForm: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Thêm Hàng Hóa</button>
      <AddProductModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default ProductForm;
