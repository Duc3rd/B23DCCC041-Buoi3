import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'C:/Users/Admin/qlhh/src/store';
import { deleteProduct } from 'C:/Users/Admin/qlhh/src/store/productsSlice';
import EditProductModal from 'C:/Users/Admin/qlhh/src/components/EditProductModal';

const ProductTable: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<{ id: number; name: string; price: number } | null>(null);

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  const openEditModal = (product: { id: number; name: string; price: number }) => {
    setCurrentProduct(product);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setCurrentProduct(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => openEditModal(product)}>Chỉnh sửa</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentProduct && (
        <EditProductModal
          isOpen={editModalIsOpen}
          onRequestClose={closeEditModal}
          product={currentProduct}
        />
      )}
    </div>
  );
};

export default ProductTable;
