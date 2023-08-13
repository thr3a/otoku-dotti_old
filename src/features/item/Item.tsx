import { TextInput, Title, NumberInput, Group, Button, Box, Center, createStyles, getStylesRef, rem } from '@mantine/core';
import { useItemFormContext } from '@/features/item/ItemContext';

type ItemProps = {
  index: string
};

export const Item: React.FC<ItemProps> = ({ index }) => {
  const form = useItemFormContext();

  return (
    <Box>
      <TextInput label={`商品${index}の価格`} withAsterisk {...form.getInputProps(`price${index}`)}
        rightSection="円"
      />
      <TextInput label="容量(g,m,個,枚)" withAsterisk {...form.getInputProps(`capacity${index}`)} />
      <TextInput label="パック数(任意)" {...form.getInputProps(`count${index}`)}
        styles={(theme) => ({
          label: {
            fontWeight: 'normal'
          }
        })
        }
      />
    </Box>
  );
};
