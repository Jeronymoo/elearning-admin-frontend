import Modal from 'react-modal';
// import { Container } from './styles';
import { FiX } from 'react-icons/fi';
import Input from '../Input';
import { useCallback } from 'react';
import api from './../../services/api';
import Form from '../Form';

interface CourseModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  setData: (data: any) => void;
}

export default function CourseModal({ isOpen, onRequestClose, setData }: CourseModalProps) {

  const onSubmit = useCallback(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]);

    const response = await api.post('courses', formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      }
    })
    setData(response.data);
    // console.log(response.data);
  }, [setData]);

  return(
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <FiX size={24} color="#C4C4D1"/>
        </button>
        <Form onSubmit={onSubmit}>
          <h2>Cadastrar curso</h2>
          <Input name="name" placeholder="Nome" type="text"/>
          <label htmlFor="inputfile">Selecionar imagem</label>
          <Input type="file" name="image" id="inputfile"/>
          <button type="submit">Cadastrar</button>
        </Form>
      </Modal>
  );
}

