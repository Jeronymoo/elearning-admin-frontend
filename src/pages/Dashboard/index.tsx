import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, CardArea, CardContent, Info, Card } from "./styles";
import { FiPlus, FiTrash, FiLogIn } from 'react-icons/fi'

import api from "../../services/api";
import mathImg from "../../assets/math.svg";
import CourseModal from '../../components/CourseModal';

interface Course {
  id: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  useEffect(() => {
    api.get("/courses").then((response) => {
      setCourses(response.data);
    }); 
  }, []);

  console.log(courses);

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
              <img src={mathImg} alt=""/>
              <h2>{course.name}</h2>
              <p>15 aulas</p>
            </CardContent>
          </Card>
        ))}
      </CardArea>
    </Container>
  </>
  );
}

export default Dashboard;