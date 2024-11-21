import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateProduct } from 'C:/Users/Admin/qlhh/src/store/productsSlice';

Modal.setAppElement('#root');

interface EditProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  product: { id: number; name: string; price: number };
}

const EditProductModal: React.FC<EditProductModalProps> = ({ isOpen, onRequestClose, product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price.toString());
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = {
      id: product.id,
      name,
      price: parseFloat(price),
    };
    dispatch(updateProduct(updatedProduct));
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Edit Product">
      <h2>Chỉnh Sửa Hàng Hóa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên hàng hóa"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Giá hàng hóa"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Lưu Thay Đổi</button>
        <button onClick={onRequestClose}>Đóng</button>
      </form>
    </Modal>
  );
};

export default EditProductModal;
