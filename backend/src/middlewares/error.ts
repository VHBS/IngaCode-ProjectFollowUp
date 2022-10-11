/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { ResponseError } from '../@types/responseError';

const errorMiddleware = async (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<Response<ResponseError>> => {
  console.log(err);
  return res.status(500).json({ menssage: 'Erro inesperado' });
};

export default errorMiddleware;
