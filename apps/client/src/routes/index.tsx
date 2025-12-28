import { createFileRoute } from '@tanstack/react-router';

const App = () => {
  return <div style={{ background: 'blue' }}>App Route</div>;
};

export const Route = createFileRoute('/')({
  component: App,
});
