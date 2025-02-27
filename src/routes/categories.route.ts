import { Router } from 'express';
import { CategoriesController } from '../controllers/categories.controller';
import { createCategorySchema } from '../dtos/categories.dto';
import { CategoriesFactory } from '../factories/categories.factory';
import { ParamsType, validator } from '../middlewares/validator.middleware';

export const categoriesRoutes = Router();

const controller = new CategoriesController(
  CategoriesFactory.getServiceInstance(),
);
// @ts-ignore
categoriesRoutes.get('/', controller.index);

categoriesRoutes.post(
  '/',
  validator({
    schema: createCategorySchema,
    type: ParamsType.BODY,
  }), // @ts-ignore
  controller.create,
);
