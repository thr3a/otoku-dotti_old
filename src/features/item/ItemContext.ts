import { createFormContext } from '@mantine/form';

type ItemFormProps = {
  priceA: number | undefined
  capacityA: number | undefined
  countA: number | undefined
  priceB: number | undefined
  capacityB: number | undefined
  countB: number | undefined
  answer: number
};

// You can give context variables any name
export const [ItemFormProvider, useItemFormContext, useItemForm] = createFormContext<ItemFormProps>();
