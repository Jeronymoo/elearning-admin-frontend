import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import api from './../../services/api';
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

const schema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  description: Yup.string().required("Descrição obrigatória"),
  video_id: Yup.string().required("ID do vídeo obrigatório"),
  duration: Yup.string().required("Duração obrigatória"),
});

export default function LessonModal({ isOpen, onRequestClose, courseId, setData }: LessonModalProps) {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
 
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
        ariaHideApp={false}
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <FiX size={24} color="#C4C4D1"/>
        </button>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Cadastrar aula</h2>
            <Input name="name" placeholder="Nome" type="text" error={errors.name?.message} ref={register}/>
            <Input name="description" placeholder="Descrição" type="text" error={errors.description?.message} ref={register}/>
            <Input name="video_id" placeholder="ID do Vídeo" type="text" error={errors.video_id?.message} ref={register}/>
            <Input name="duration" placeholder="Duração do Vídeo" type="text" error={errors.duration?.message} ref={register}/>
            <button type="submit">Cadastrar</button>
          </form>
        </Container>
      </Modal>
  );
}

