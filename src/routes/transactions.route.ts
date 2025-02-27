import { Router } from 'express';

import { TransactionsController } from '../controllers/transactions.controller';
import {
  createTransactionSchema,
  getDashboardSchema,
  getFinancialEvolutionSchema,
  indexTransactionSchema,
} from '../dtos/transactions.dto';
import { TransactionsFactory } from '../factories/transactions.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const transactionsRoutes = Router();

const controller = new TransactionsController(
  TransactionsFactory.getServiceInstance(),
);

transactionsRoutes.post(
  '/',
  validator({
    schema: createTransactionSchema,
    type: ParamsType.BODY,
  }), // @ts-ignore
  controller.create,
);

transactionsRoutes.get(
  '/',
  validator({
    schema: indexTransactionSchema,
    type: ParamsType.QUERY,
  }),
  // @ts-ignore
  controller.index,
);

transactionsRoutes.get(
  '/dashboard',
  validator({
    schema: getDashboardSchema,
    type: ParamsType.QUERY,
  }),
  // @ts-ignore
  controller.getDashboard,
);

transactionsRoutes.get(
  '/financial-evolution',
  validator({
    schema: getFinancialEvolutionSchema,
    type: ParamsType.QUERY,
  }),
  // @ts-ignore
  controller.getFinancialEvolution,
);
