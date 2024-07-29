import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../store/enum';

function Page404() {
  const navigate = useNavigate();

  function handleReload() {
    navigate(PATHS.MAIN);
  }

  return (
    <div>
      <p> 404 not Found </p>
      <button onClick={handleReload}>Reload Page</button>
    </div>
  );
}

export default Page404;
