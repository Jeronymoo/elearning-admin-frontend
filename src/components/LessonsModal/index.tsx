import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';

import api from './../../services/api';
import Form from '../Form';
import Input from '../Input';
import { useCallback } from 'react';

interface LessonModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  courseId: string;
  setData: (data: FormInput) => void;
}

interface FormProps {
  name: string;
  description: string;
  video_id: string;
  duration: string;
}

interface FormInput {
  id: string;
  name: string;
  duration: string;
  description: string;
  video_id: string;
}

export default function LessonModal({ isOpen, onRequestClose, courseId, setData }: LessonModalProps) {
 
  const onSubmit = useCallback(async ({ name, description, video_id, duration }: FormProps) => {
    const response = await api.post('lessons', {
      name,
      description,
      video_id,
      duration,
      course_id: courseId
    });
    setData(response.data);
    
  }, [courseId, setData]);

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
            <h2>Cadastrar aula</h2>
            <Input name="name" placeholder="Nome" type="text"/>
            <Input name="description" placeholder="Descrição" type="text"/>
            <Input name="video_id" placeholder="ID do Vídeo" type="text"/>
            <Input name="duration" placeholder="Duração do Vídeo" type="text"/>
            <button type="submit">Cadastrar</button>
          </Form>
        </Container>
      </Modal>
  );
}

