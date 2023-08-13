import { type AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, Container } from '@mantine/core';
import { Header } from '../features/common/components/Header';

export default function App (props: AppProps): JSX.Element {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>どっちお得くん</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <meta name="description" content="どっちお得くん" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          defaultRadius: 'xs',
          fontFamily: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
          components: {
            TextInput: {
              styles: (theme) => ({
                label: {
                  fontWeight: 'bold'
                },
                root: {
                  marginBottom: theme.spacing.xs
                }
              })
            },
            NumberInput: {
              styles: (theme) => ({
                label: {
                  fontWeight: 'bold'
                },
                root: {
                  marginBottom: theme.spacing.xs
                }
              })
            },
            RadioGroup: {
              styles: (theme) => ({
                label: {
                  fontWeight: 'bold'
                },
                root: {
                  marginBottom: theme.spacing.xs
                }
              })
            },
            Checkbox: {
              styles: (theme) => ({
                root: {
                  marginBottom: theme.spacing.sm
                }
              })
            },
            DatePicker: {
              styles: (theme) => ({
                label: {
                  fontWeight: 'bold'
                },
                day: {
                  height: 30
                }
              })
            }
          }
        }}
      >
        <Container
          sx={(theme) => ({
            paddingBottom: theme.spacing.xl
          })}
        >
          <Header></Header>
          <Component {...pageProps} />
        </Container>
      </MantineProvider>
    </>
  );
}
