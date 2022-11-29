import { useContext } from 'react';
import { BabylonJSContext } from '../contexts/BabylonJSContext';

const useBabylonJS = () => {
  const context = useContext(BabylonJSContext);
  if (!context)
    throw new Error('BabylonJSContext must be placed within BabylonJSProvider');
  return context;
};

export default useBabylonJS;
