import { Group, Button, Box, Grid } from '@mantine/core';
import { ItemFormProvider, useItemForm } from '@/features/item/ItemContext';
import { Item } from '@/features/item/Item';
import { isNotEmpty } from '@mantine/form';
import { ceilDecimal } from '@/features/common/utils';
import { WinResult, LoseResult } from '@/features/item/Result';

export const Form = (): JSX.Element => {
  const form = useItemForm({
    initialValues: {
      priceA: 388,
      priceB: 1763,
      capacityA: 1,
      capacityB: 5,
      // priceA: undefined,
      // priceB: undefined,
      // capacityA: undefined,
      // capacityB: undefined,
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
    form.setValues({
      tankaA: ceilDecimal((form.values.priceA ?? 0) / (form.values.capacityA ?? 1), 1),
      tankaB: ceilDecimal((form.values.priceB ?? 0) / (form.values.capacityB ?? 1), 1)
    });
  };

  const diff = (): number => {
    const count = Math.max((form.values.capacityA ?? 0), (form.values.capacityB ?? 0));
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
        <Group position="center">
          <Button type="submit">計算!</Button>
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