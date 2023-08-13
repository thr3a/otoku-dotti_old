import { TextInput, Box } from '@mantine/core';
import { useItemFormContext } from '@/features/item/ItemContext';

type ItemProps = {
  index: string
};

const allowBlankInputProps = (form: any, target: string): any => {
  const inputProps = form.getInputProps(target);
  inputProps.value = inputProps.value === 0 ? '' : inputProps.value;
  return inputProps;
};

export const Item: React.FC<ItemProps> = ({ index }) => {
  const form = useItemFormContext();
  return (
    <Box>
      <TextInput label={`商品${index}の価格`} withAsterisk rightSection="円" {...allowBlankInputProps(form, `price${index}`)}/>
      <TextInput label="容量(g,m,個,枚)" withAsterisk {...allowBlankInputProps(form, `capacity${index}`)} />
      <TextInput label="パック数(任意)" {...allowBlankInputProps(form, `count${index}`)}
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
