import { TextInput, Title, NumberInput, Group, Button, Box, Center, Text, createStyles, getStylesRef, rem } from '@mantine/core';
import { useItemFormContext } from '@/features/item/ItemContext';
import React from 'react';
import { IconWeight } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  circle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md
  },
  string: {
    fontSize: '50px',
    color: 'white',
    transform: 'rotate(-13deg)',
    fontWeight: 'bold'
  }
}));

type ResultProps = {
  diff: number
  tanka: number
};

export const WinResult: React.FC<ResultProps> = ({ diff, tanka }) => {
  const { classes } = useStyles();

  return (
    <Box>
      <Center>
        @<Text component='span' fw='bold'>{tanka}</Text>
      </Center>
      <span>
      こっちのほうが<Text component='span' fw='bold'>{diff}円</Text>お得!
      </span>
      <Center>
        <Box className={classes.circle}>
          <span className={classes.string}>得</span>
        </Box>
      </Center>
    </Box>

  );
};

export const LoseResult: React.FC<ResultProps> = ({ diff, tanka }) => {
  return (
    <Center>
      @<Text component='span' fw='bold'>{tanka}</Text>
    </Center>
  );
};
