import type { NextPage } from 'next';
import Head from 'next/head';
import { IconDownload } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { UserForm } from '@/features/form2/Form';

const Page2: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page 2</title>
      </Head>
      <IconDownload></IconDownload>
      <Button component={Link} href="https://www.google.com/">Google</Button>
      <UserForm></UserForm>
    </>
  );
};

export default Page2;
