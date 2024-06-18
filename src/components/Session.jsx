import { useIdleTimer } from 'react-idle-timer';

const useIdleTimeout = (idleTime) => {
  const [isIdle, setIsIdle] = useState(false);

  useIdleTimer({
    idleTime,
    onIdle: () => setIsIdle(true),
  });

  return isIdle;
};