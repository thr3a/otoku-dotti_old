import { Title } from '@mantine/core';

export const Header = (): JSX.Element => {
  return (
    <>
      <Title order={1} sx={(theme) => ({
        marginTop: theme.spacing.md
      })}
      >どっちお得くん</Title>
      <Title
        color="dimmed"
        order={5}
        sx={(theme) => ({
          marginBottom: theme.spacing.sm
        })}
      >物価上昇を耐え抜け</Title>
    </>
  );
};
