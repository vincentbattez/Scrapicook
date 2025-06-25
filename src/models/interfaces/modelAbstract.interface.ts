import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

export interface IModelAbstract<T> {
  get(): T;
}

// TEnum can be "DestinationRecipeAvailableEnum"
export interface IConvertibleAbstract<TEnum = DestinationRecipeAvailableEnum> {
  // @todo: how to type this?
  convert(availableConverter: TEnum): any;
}

export type IModelWith<T, Capabilities = {}> = IModelAbstract<T> & Capabilities;
