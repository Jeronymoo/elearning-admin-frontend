import Modal from 'react-modal';
import { Container, ShowFile } from './styles';
import { FiX } from 'react-icons/fi';
import Input from '../Input';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from './../../services/api';

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
  const { handleSubmit, register, setValue } = useForm();
  const [image, setImage] = useState<IFile>();

  useEffect(() => {
    api.get('courses').then(response => {
      const fullResponse = response.data;
      const courseResponse = fullResponse.find((course: any) => course.id === courseId);
      if (courseResponse) {
        setValue("name", courseResponse.name);
      }
    })
  }, [ courseId, setValue ]);

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
        ariaHideApp={false}
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <FiX size={24} color="#C4C4D1"/>
        </button>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Cadastrar curso</h2>
            <Input name="name" placeholder="Nome" type="text" ref={register}/>
            <label htmlFor="inputfile">Selecionar imagem</label>
            <Input type="file" name="image" id="inputfile" onChange={handleChange} ref={register}/>
            { image ? (
              <ShowFile>
                <p>{image?.name}</p>
                <p>{handleImageSize}</p>
              </ShowFile>
            ) : null }
            <button type="submit" onClick={handleReset}>Cadastrar</button>
          </form>
        </Container>
      </Modal>
  );
}

