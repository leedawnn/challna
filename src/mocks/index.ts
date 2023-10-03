import { worker } from './browser';

const initializeMockupWorker = async () => {
  await Promise.all([worker.start({ onUnhandledRequest: 'bypass' })]);
};

export default initializeMockupWorker;