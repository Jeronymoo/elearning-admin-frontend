import Modal from 'react-modal';
import { Container, ShowFile } from './styles';
import { FiX } from 'react-icons/fi';
import Input from '../Input';
import { useCallback, useMemo, useState } from 'react';
import api from './../../services/api';
import Form from '../Form';

interface CourseModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  setData: (data: any) => void;
  courseId: string;
}

interface IFile {
  name: string;
  size: number;
}

export default function CourseModal({ isOpen, onRequestClose, setData, courseId }: CourseModalProps) {
  const [image, setImage] = useState<IFile>();

  const onSubmit = useCallback(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]);

    const response = await api.put(`courses/${courseId}`, formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      }
    })
    setData(response.data);
  }, [setData, courseId]);

  const handleChange = (event: any) => {
    setImage(event.target.files[0]);
  }

  const handleReset = () => {
    setImage(undefined);
  }

  const handleImageSize = useMemo(() => {
    if (image) {
      const sizeInkB = image.size / 1024;
      return `${(Math.round(sizeInkB * 100) / 100).toFixed(1)} kB`;
    }
  }, [image]);

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
          <Form onSubmit={onSubmit}>
            <h2>Cadastrar curso</h2>
            <Input name="name" placeholder="Nome" type="text"/>
            <label htmlFor="inputfile">Selecionar imagem</label>
            <Input type="file" name="image" id="inputfile" onChange={handleChange} />
            <ShowFile>
              <p>{image?.name}</p>
              <p>{handleImageSize}</p>
            </ShowFile>
            <button type="submit" onClick={handleReset}>Cadastrar</button>
          </Form>
        </Container>
      </Modal>
  );
}

