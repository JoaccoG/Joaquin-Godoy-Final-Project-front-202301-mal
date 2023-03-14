import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const App = () => {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <FontAwesomeIcon icon={solid('gamepad')} />
    </div>
  );
};

export default App;
