import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { NotesRoutes } from '../notes/routes/NotesRoutes';

export const AppRouter = () => {

  const { status } = useCheckAuth();

  return (
    <Routes>
        {
          status === 'authenticated'
          ? <Route path='/*' element={<NotesRoutes />} />
          : <Route path='/auth/*' element={<AuthRoutes />} />
        } 

        <Route path='/*' element={<Navigate to='/auth/login' />} />      

    </Routes>        
  )
}