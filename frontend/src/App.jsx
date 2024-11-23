import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/organisms/loginForm'
import TodoPage from './components/page/todoPage'

function App() {
  return (
    <Routes><Route element={<LoginForm />} path='/login' />
      <Route element={<TodoPage />} path='/tasks' />
    </Routes>

  )
}

export default App
