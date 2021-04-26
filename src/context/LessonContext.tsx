import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface LessonContextData {
  lesson: string;
}

interface LessonState {
  id: string;
  amount: number;
}

const LessonContext = createContext<LessonContextData[]>([]);

export const LessonProver: React.FC = ({ children }) => {
  const [data, setData] = useState<LessonState>({} as LessonState);

  // const getLessons = useCallback(() => {
  //   const response = await api.get('')
  // }, []);

  return (
    <LessonContext.Provider value={[]}>
      {children}
    </LessonContext.Provider>
  );
}