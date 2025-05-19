import {INumberOfPerson} from "@models/numberOfPerson/numberOfPerson.interface";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class NumberOfPersonModel {
  private numberOfPerson: INumberOfPerson = 0;

  public getNumberOfPerson(): INumberOfPerson {
    return this.numberOfPerson;
  }

  public fromExtractor(numberOfPerson: string | null): void {
    if (!numberOfPerson) {
      throw new Error(`Number of person is not defined: ${numberOfPerson}`);
    }

    this.numberOfPerson = Number(numberOfPerson);
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "userCoversCount"> {
    return {
      userCoversCount: this.numberOfPerson,
    };
  }
}
