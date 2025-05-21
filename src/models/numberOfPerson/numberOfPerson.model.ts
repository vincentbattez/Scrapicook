import {IJowCreateRecipeBody} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";
import {INumberOfPerson} from "@models/numberOfPerson/numberOfPerson.interface";
import {IModelAbstract} from "@models/interfaces/modelAbstract.interface";

export class NumberOfPersonModel implements IModelAbstract<INumberOfPerson> {
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

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "userCoversCount"> {
    return {
      userCoversCount: this.numberOfPerson,
    };
  }
}
