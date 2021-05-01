import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface LessonContextData {
  getCourses: () => void;
}

interface LessonState {
  id: string;
  amount: number;
}

export const LessonContext = createContext<LessonContextData>({} as LessonContextData);

export const LessonProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<LessonState>({} as LessonState);

  const getCourses = useCallback(async () => {
    const coursesData = await api.get('courses')
    const coursesResponseData = coursesData.data;
    console.log(coursesResponseData);
    // coursesResponseData.map(async (e: any) => {
    //   const lessonsData = await api.get(`lessons/${e.id}/lessons`);
    //   const lessonsResponseData = lessonsData.data;
    //   console.log(lessonsResponseData);
    // });
    // const lessonsData = await api.get(`lessons/${coursesResponseData.id}/lessons`)


  }, []);

  return (
    <LessonContext.Provider value={{ getCourses }}>
      {children}
    </LessonContext.Provider>
  );
}