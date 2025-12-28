import { createFileRoute } from '@tanstack/react-router';

const App = () => {
  return <div>App Route</div>;
};

export const Route = createFileRoute('/')({
  component: App,
});
