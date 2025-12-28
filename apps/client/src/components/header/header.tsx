import { ActionIcon, Box, Group, Popover, Title } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import type { JSX } from 'react';
import { AuthForm } from './components/auth-form';

export const Header = (): JSX.Element => {
  return (
    <Box h="60px" pr="md" pl="md">
      <Group justify="space-between" h="100%">
        <Title size="lg">Blomsterkanten</Title>

        <Group>
          <Popover width={400} position="bottom" shadow="sm" withArrow>
            <Popover.Target>
              <ActionIcon variant="default" size="lg" aria-label="Profile">
                <IconUser />
              </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
              <AuthForm />
            </Popover.Dropdown>
          </Popover>
        </Group>
      </Group>
    </Box>
  );
};
