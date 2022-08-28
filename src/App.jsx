import Hint from './components/Hint/Hint';
import Title from './components/Title/Title';
import InputCard from './components/InputCard/InputCard';
import PreviewCard from './components/PreviewCard/PreviewCard';

import './App.css';
import 'bootstrap';

function App() {
  return (
    <>
      <Hint />
      <Title />
      <div className="container d-flex justify-content-center align-items-center">
        <InputCard />
        <PreviewCard />
      </div>
      <div className="text-center">
        Made by <a href="https://github.com/bgebes">bgebes</a>
      </div>
    </>
  );
}

export default App;
