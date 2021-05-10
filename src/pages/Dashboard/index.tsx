import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, CardArea, CardContent, Info, Card } from "./styles";
import { FiPlus, FiTrash, FiLogIn, FiEdit } from 'react-icons/fi'

import api from "../../services/api";
import CourseModal from '../../components/CourseModal';
import EditCourseModal from '../../components/EditCourseModal'

interface Course {
  id: string;
  name: string;
  image_path: string;
  lessons: ILessons[];
}

interface ILessons {
  id: string;
  name: string;
  duration: string;
  description: string;
  video_id: string;
}

const Dashboard: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [courseId, setCourseId] = useState('');

  async function handleDelete(id: string): Promise<void> {
    await api.delete(`courses/${id}`)
    setCourses(courses.filter(course => course.id !== id));
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

  function handleUpdate(id: string) {
    setCourseId(id);
    setEditModal(true);
  }

  useEffect(() => {
    api.get("/courses").then((response) => {
      setCourses(response.data);
    }); 
  }, []);

  return (
    <>
    <Header />
    <Container>
      <Info>
        <div>
          <h1>Categorias</h1>
          <p>{courses.length} cursos</p>
        </div>
        <div>
          <button onClick={openModal}>
            <FiPlus size={24} color="#fff" />
          </button>
        </div>
      </Info>

      <CourseModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        setData={(data) => setCourses([...courses, data])}
      ></CourseModal>
      <EditCourseModal 
        isOpen={editModal}
        onRequestClose={closeEditModal}
        setData={(data) => setCourses(courses.map(course => 
          course.id === data.id ? {...data} : course))}
        courseId={courseId}
      />
      <CardArea>
        {courses.map(course => (
          <Card key={course.id}>
            <CardContent>
              <button type="button" onClick={() => handleDelete(course.id)}>
                <FiTrash size={20} />
              </button>
              <Link to={`lessons/${course.id}`}>
                <FiLogIn size={20} />
              </Link>
              <button className="editing">
                <FiEdit size={20} onClick={() => handleUpdate(course.id)} />
              </button>
              <img src={`http://localhost:3333/files/${course.image_path}`} alt=""/>
              <h2>{course.name}</h2>
              {course.lessons.length === 1 || undefined ? (
                <p>{String(course.lessons.length).padStart(2, '0')} aula</p>
              ) : (
                <p>{String(course.lessons.length).padStart(2, '0')} aulas</p>
              )}
            </CardContent>
          </Card>
        ))}
      </CardArea>
    </Container>
  </>
  );
}

export default Dashboard;