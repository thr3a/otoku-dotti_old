import { TextInput, Title, NumberInput, Group, Button, Box } from '@mantine/core';
import { useItemFormContext } from '@/features/item/ItemContext';

type ItemProps = {
  index: string
};

export const Item: React.FC<ItemProps> = ({ index }) => {
  const form = useItemFormContext();

  return (
    <Box>
      <TextInput label="価格" withAsterisk {...form.getInputProps(`price${index}`)}
        rightSection="円"
      />
      <NumberInput label="容量(g,m,個,枚)" withAsterisk {...form.getInputProps(`capacity${index}`)} />
      <NumberInput label="パック数" description="任意" {...form.getInputProps(`count${index}`)} />
    </Box>
  );
};
