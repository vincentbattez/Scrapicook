import {
  IConvertibleAbstract,
  IModelWith,
} from "@models/interfaces/modelAbstract.interface";
import { INumberOfPerson } from "@models/numberOfPerson/numberOfPerson.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

export class NumberOfPersonModel
  implements IModelWith<INumberOfPerson, IConvertibleAbstract>
{
  private readonly numberOfPerson: INumberOfPerson;

  constructor(numberOfPerson: string | number | null) {
    if (!numberOfPerson) {
      throw new Error(`Number of person is not defined: ${numberOfPerson}`);
    }

    this.numberOfPerson = Number(numberOfPerson);
  }

  public get(): INumberOfPerson {
    return this.numberOfPerson;
  }

  convert(availableConverter: DestinationRecipeAvailableEnum) {
    return recipeConverterFactory
      .convert(availableConverter)
      .toNumberOfPerson(this);
  }
}
