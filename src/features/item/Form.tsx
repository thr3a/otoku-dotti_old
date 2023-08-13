import { Title, NumberInput, Group, Button, Box, Grid } from '@mantine/core';
import { ItemFormProvider, useItemForm, useItemFormContext } from '@/features/item/ItemContext';
import { Item } from '@/features/item/Item';

export const Form = (): JSX.Element => {
  const form = useItemForm({
    initialValues: {
      priceA: 388,
      priceB: 1763,
      capacityA: 1,
      capacityB: 5,
      countA: undefined,
      countB: undefined,
      // priceA: undefined,
      // priceB: undefined,
      // capacityA: undefined,
      // capacityB: undefined,
      // countA: undefined,
      // countB: undefined,
      answer: -1
    },

    validate: {
      // name: isNotEmpty('名前は必須項目です'),
      // age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register')
    }
  });

  const handleSubmit = (): void => {
    console.log(form.values);
  };

  return (
    <ItemFormProvider form={form}>
      <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => { handleSubmit(); })}>
        <Grid>
          <Grid.Col span={6}>
            <Item index='A'></Item>
          </Grid.Col>
          <Grid.Col span={6}>
            <Item index='B'></Item>
          </Grid.Col>
        </Grid>
        <Group position="center" mt="md">
          <Button type="submit">計算!</Button>
        </Group>
      </Box>
    </ItemFormProvider>
  );
};
