import Modal from 'react-modal';
import { Container } from './styles';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import api from './../../services/api';
import Input from '../Input';
import { useCallback, useEffect } from 'react';

interface LessonModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  setData: (data: FormInput) => void;
  lessonId: string;
  courseId: string;
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

export default function LessonModal({ isOpen, onRequestClose, setData, lessonId, courseId }: LessonModalProps) {
  const { handleSubmit, register, setValue } = useForm();

  useEffect(() => {
    api.get(`courses/${courseId}/lessons`).then((response) => {
      const fullResponse = response.data;
      const lessonResponse = fullResponse.find((lesson: FormInput) => lesson.id === lessonId);
      if (lessonResponse) {
        setValue("name", lessonResponse.name);
        setValue("description", lessonResponse.description);
        setValue("video_id", lessonResponse.video_id);
        setValue("duration", lessonResponse.duration);
      }
    });
  }, [ courseId, lessonId, setValue ]);

  const onSubmit = useCallback(async ({ name, description, video_id, duration }: FormProps) => {
    const response = await api.put(`lessons/${lessonId}`, {
      name,
      description,
      video_id,
      duration,
    });

    setData(response.data);
    
  }, [ setData, lessonId ]);

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
            <Input name="name" placeholder="Nome" type="text" ref={register}/>
            <Input name="description" placeholder="Descrição" type="text" ref={register}/>
            <Input name="video_id" placeholder="ID do Vídeo" type="text" ref={register}/>
            <Input name="duration" placeholder="Duração do Vídeo" type="text" ref={register}/>
            <button type="submit">Cadastrar</button>
          </form>
        </Container>
      </Modal>
  );
}

