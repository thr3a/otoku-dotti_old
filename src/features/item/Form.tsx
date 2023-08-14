import { Group, Button, Box, Grid } from '@mantine/core';
import { ItemFormProvider, useItemForm } from '@/features/item/ItemContext';
import { Item } from '@/features/item/Item';
import { isNotEmpty } from '@mantine/form';
import { ceilDecimal } from 'decimal-utils';
import { WinResult, LoseResult } from '@/features/item/Result';

export const Form = (): JSX.Element => {
  const form = useItemForm({
    initialValues: {
      // priceA: 300,
      // priceB: 550,
      // capacityA: 300,
      // capacityB: 1000,
      priceA: 0,
      priceB: 0,
      capacityA: 0,
      capacityB: 0,
      countA: 0,
      countB: 0,
      tankaA: 0,
      tankaB: 0
    },

    validate: {
      priceA: isNotEmpty(),
      priceB: isNotEmpty(),
      capacityA: isNotEmpty(),
      capacityB: isNotEmpty()
    }

  });

  const handleSubmit = (): void => {
    console.log(form.values);
    const tankaA = form.values.priceA / form.values.capacityA / Math.max(form.values.countA, 1);
    const tankaB = form.values.priceB / form.values.capacityB / Math.max(form.values.countB, 1);

    form.setValues({
      tankaA: ceilDecimal(tankaA, 1),
      tankaB: ceilDecimal(tankaB, 1)
    });
  };

  const handleReset = (): void => {
    form.reset();
    form.clearErrors();
  };

  const diff = (): number => {
    const count = Math.max(form.values.capacityA * Math.max(form.values.countA, 1), form.values.capacityB * Math.max(form.values.countB, 1));
    if (betterItem() === 'A') {
      return ceilDecimal(form.values.tankaB - form.values.tankaA, 1) * count;
    } else {
      return ceilDecimal(form.values.tankaA - form.values.tankaB, 1) * count;
    }
  };

  const betterItem = (): string => {
    if (form.values.tankaA === 0 && form.values.tankaB === 0) {
      return '';
    }
    if (form.values.tankaA < form.values.tankaB) {
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
        <Group position="right">
          <Button type="submit">計算!</Button>
          <Button type="button" color='gray' onClick={handleReset} >クリア</Button>
        </Group>
        <Grid>
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
