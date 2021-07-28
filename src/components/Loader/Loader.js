import './Loader.scss';
import Loader from 'react-loader-spinner';
import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#loader-root');

const ReactLoader = () => {
  return createPortal(
    <div className="backdrop">
      <div className="Loader">
        <Loader
          type="MutatingDots"
          color="#44bec7"
          secondaryColor="#4e777a"
          height={100}
          width={100}
        />
      </div>
    </div>,
    loaderRoot,
  );
};

export default ReactLoader;
