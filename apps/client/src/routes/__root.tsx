import { createTheme, MantineProvider } from '@mantine/core';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { Header } from '@/components/header';

const theme = createTheme({});

export const Route = createRootRoute({
  component: () => (
    <>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Header />
        <Outlet />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      </MantineProvider>
    </>
  ),
});
