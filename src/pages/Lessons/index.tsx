import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Info, LessonsList, LessonArea, LessonCard, LessonInfo } from "./styles";
import { FiPlus, FiTrash, FiEdit, FiClock } from 'react-icons/fi';

import LessonsModal from '../../components/LessonsModal'
import EditLessonsModal from '../../components/EditLessonsModal';

import api from "../../services/api";

interface LessonsL {
  id: string;
  name: string;
  duration: string;
  description: string;
  video_id: string;
}

interface IObject {
  name: string;
  description: string;
  video_id: string;
}

const Lessons: React.FC = () => {
  const { id } = useParams<{id: string}>();

  const [lessons, setLessons] = useState<LessonsL[]>([]);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [object, setObject] = useState<IObject>({} as IObject);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [lessonId, setLessonId] = useState('');

  async function handleDelete(id: string): Promise<void> {
    await api.delete(`lessons/${id}`)
    setLessons(lessons.filter(lesson => lesson.id !== id));
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  useEffect(() => {
    api.get(`courses/${id}/lessons`).then((response) => {
      setLessons(response.data);
    }); 
  }, [id]);

  function handleShowModal(id: IObject) {
    setObject(id);
    setModal(true);
  }

  function handleUpdate(id: string) {
    setLessonId(id);
    setEditModal(true);
  }

  return (
    <>
    <Header />
    <Info>
    <div>
      <h1>Categorias</h1>
      <p>{lessons.length} cursos</p>
    </div>
    <div>
      <button onClick={openModal}>
        <FiPlus size={24} color="#fff" />
      </button>
    </div>
    </Info>

    <LessonsModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        courseId={id}
        setData={data => setLessons([...lessons, data])}
    />
    <EditLessonsModal 
      isOpen={editModal}
      onRequestClose={closeEditModal}
      lessonId={lessonId}
      courseId={id}
      setData={(data) => setLessons(lessons.map(lesson => 
        lesson.id === data.id ? {...data} : lesson))}
    />
    <Container>
      <LessonsList>
        {lessons.map((lesson, index) => (
          <LessonCard key={lesson.id}>
            <button onClick={() => handleShowModal(lesson)}>
              <h1>{lesson.name}</h1>
              <LessonInfo>
                <small>Aula {String(index + 1).padStart(2, '0')}</small>
                <FiClock />
                <small>{lesson.duration}</small>
              </LessonInfo>
            </button>
            <div>
              <button>
                <FiEdit onClick={() => handleUpdate(lesson.id)} />
              </button>
              <button onClick={() => handleDelete(lesson.id)}>
                <FiTrash />
              </button>
            </div>
          </LessonCard>
        ))}
      </LessonsList>
      {modal === true ? (
        <LessonArea>
          <h1>{object.name}</h1>
          <div>
            <iframe title={object.name} width="800" height="450" src={`https://www.youtube.com/embed/${object.video_id}`} ></iframe>
          </div>
          <p>{object.description}</p>
        </LessonArea>
      ) : <div></div> }
    </Container>
  </>
  );
}

export default Lessons;