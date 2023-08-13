// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// POSTの場合はreq.queryをreq.bodyにすること
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

type Data = {
  name: string;
}

export type SuccessResponseProps = {
  status: 'ok';
  result: Data;
};

export type ErrorResponseProps = {
  status: 'ng';
  errorMessage: string;
};

export type ResponseProps = SuccessResponseProps | ErrorResponseProps;

const requestSchema = z.object({
  name: z.string(),
  error: z.boolean().optional(),
});

type RequestProps = NextApiRequest & {
  query: z.infer<typeof requestSchema>;
}

export default function handler(req: RequestProps, res: NextApiResponse<ResponseProps>) {
  // if (req.method !== 'POST') {
  //   res.status(405).send({status: 'ng', errorMessage: 'Method Not Allowed'});
  //   res.end();
  //   return;
  // }
  if (req.query.error) {
    res.status(500).json({
      status: 'ng',
      errorMessage: 'Internal Server Error'
    });
    res.end();
    return;
  }
  const reqData = requestSchema.safeParse(req.query);
  if (!reqData.success) {
    console.log(reqData.error);
    res.status(400).send({status: 'ng', errorMessage: 'Invalid request'});
    res.end();
    return;
  }

  res.status(200).json({status: 'ok', result: {name: reqData.data.name}});
  res.end();
}
