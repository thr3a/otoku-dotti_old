import { Title, NumberInput, Group, Button, Box, Grid, Center } from '@mantine/core';
import { ItemFormProvider, useItemForm, useItemFormContext } from '@/features/item/ItemContext';
import { Item } from '@/features/item/Item';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { ceilDecimal } from '@/features/common/utils';
import { WinResult, LoseResult } from '@/features/item/Result';

export const Form = (): JSX.Element => {
  const form = useItemForm({
    initialValues: {
      priceA: 388,
      priceB: 1763,
      capacityA: 1,
      capacityB: 5,
      countA: 0,
      countB: 0,
      tankaA: 0,
      tankaB: 0
      // priceA: undefined,
      // priceB: undefined,
      // capacityA: undefined,
      // capacityB: undefined,
      // countA: undefined,
      // countB: undefined,
    },

    validate: {
      // priceA: isNotEmpty('価格は必須項目です')
      // age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register')
    }
  });

  const handleSubmit = (): void => {
    console.log(form.values);
    form.setValues({
      tankaA: ceilDecimal(form.values.priceA / form.values.capacityA, 1),
      tankaB: ceilDecimal(form.values.priceB / form.values.capacityB, 1)
    });
  };

  const diff = (): number => {
    if (betterItem() === 'A') {
      return ceilDecimal(form.values.tankaA - form.values.tankaB, 1);
    } else {
      return ceilDecimal(form.values.tankaB - form.values.tankaA, 1);
    }
  };

  const betterItem = (): string => {
    if (form.values.tankaA > form.values.tankaB) {
      return 'A';
    } else {
      return 'B';
    }
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
        <Grid mt={'md'}>
          <Grid.Col span={6}>
            {betterItem() === 'A' &&
              <WinResult diff={diff()} tanka={form.values.tankaA}></WinResult>
            }
            {betterItem() === 'B' &&
              <LoseResult diff={diff()} tanka={form.values.tankaA}></LoseResult>
            }
          </Grid.Col>
          <Grid.Col span={6}>
            {betterItem() === 'B' &&
              <WinResult diff={diff()} tanka={form.values.tankaB}></WinResult>
            }
            {betterItem() === 'A' &&
              <LoseResult diff={diff()} tanka={form.values.tankaB}></LoseResult>
            }
          </Grid.Col>
        </Grid>

      </Box>
    </ItemFormProvider>
  );
};
