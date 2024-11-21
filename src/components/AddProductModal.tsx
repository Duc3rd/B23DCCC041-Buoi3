import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addProduct } from 'C:/Users/Admin/qlhh/src/store/productsSlice';

Modal.setAppElement('#root');

interface AddProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
    };
    dispatch(addProduct(newProduct));
    setName('');
    setPrice('');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Add Product">
      <h2>Thêm Hàng Hóa</h2>
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
        <button type="submit">Thêm Hàng Hóa</button>
        <button onClick={onRequestClose}>Đóng</button>
      </form>
    </Modal>
  );
};

export default AddProductModal;
