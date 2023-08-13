import { Box, Center, Text, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  circle: {
    width: '80px',
    height: '80px',
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
      <Center fz='24px'>
        @<Text component='span' fw='bold'>{tanka}</Text>
      </Center>
      <Center>
        <Box className={classes.circle}>
          <span className={classes.string}>得</span>
        </Box>
      </Center>
      <span>
      こっちのほうが<Text component='span' fw='bold'>{diff}円</Text>お得!
      </span>
    </Box>

  );
};

export const LoseResult: React.FC<ResultProps> = ({ diff, tanka }) => {
  return (
    <Center fz='24px'>
      @<Text component='span' fw='bold'>{tanka}</Text>
    </Center>
  );
};
