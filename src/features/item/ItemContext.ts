import { createFormContext } from '@mantine/form';

type ItemFormProps = {
  priceA: number
  capacityA: number
  countA: number
  priceB: number
  capacityB: number
  countB: number
  tankaA: number
  tankaB: number
};

// You can give context variables any name
export const [ItemFormProvider, useItemFormContext, useItemForm] = createFormContext<ItemFormProps>();
