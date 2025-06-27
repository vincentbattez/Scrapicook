import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export interface IModelAbstract<T> {
  get(): T;
}

export interface IConvertibleAbstract<TEnum = AvailableCreatorRecipeEnum> {
  // @todo: how to type this?
  convert(availableConverter: TEnum): any;
}

export type IModelWith<T, Capabilities = {}> = IModelAbstract<T> & Capabilities;
