import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';

interface CourseModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function CourseModal({ isOpen, onRequestClose }: CourseModalProps) {
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
        <Container>
          <h2>Cadastrar curso</h2>
          <input placeholder="Nome" type="text"/>
          <label htmlFor="inputfile">Selecionar imagem</label>
          <input type="file" name="" id="inputfile"/>
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  );
}

