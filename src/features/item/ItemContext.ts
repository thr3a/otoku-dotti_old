import { createFormContext } from '@mantine/form';

type ItemFormProps = {
  priceA: number | undefined
  priceB: number | undefined
  capacityA: number | undefined
  capacityB: number | undefined
  countA: number | undefined
  countB: number | undefined
  tankaA: number
  tankaB: number
};

// You can give context variables any name
export const [ItemFormProvider, useItemFormContext, useItemForm] = createFormContext<ItemFormProps>();
