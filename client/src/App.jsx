import { useState } from 'react';
import './app.css';
import Form from './Form';

const App = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  });
  const [file, setFile] = useState();

  return (
    <div>
      <Form user={user} setUser={setUser} file={file} setFile={setFile} />
    </div>
  );
};
export default App;
