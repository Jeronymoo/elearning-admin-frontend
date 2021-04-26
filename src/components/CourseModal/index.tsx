import Modal from 'react-modal';
import { Container, ShowFile } from './styles';
import { FiX } from 'react-icons/fi';
import Input from '../Input';
import { useCallback, useMemo, useState } from 'react';
import api from './../../services/api';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

interface CourseModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  setData: (data: any) => void;
}

interface IFile {
  name: string;
  size: number;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
});

export default function CourseModal({ isOpen, onRequestClose, setData }: CourseModalProps) {
  const [image, setImage] = useState<IFile>();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
  }, [setData]);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Cadastrar curso</h2>
            <Input name="name" placeholder="Nome" type="text" error={errors.name?.message} ref={register}/>
            <label htmlFor="inputfile">Selecionar imagem</label>
            <Input type="file" name="image" id="inputfile" onChange={handleChange} ref={register}/>
            <ShowFile>
              <p>{image?.name}</p>
              <p>{handleImageSize}</p>
            </ShowFile>
            <button type="submit" onClick={handleReset}>Cadastrar</button>
          </form>
        </Container>
      </Modal>
  );
}

