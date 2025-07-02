import { logger } from "@src/server";

export const stringUtils = {
  normalizeString(stringList: string): string {
    return stringList
      .trim() // supprime les espaces en début et fin
      .toLowerCase() // met tout en minuscule
      .normalize("NFD") // décompose les caractères accentués
      .replace(/[\u0300-\u036f]/g, "") // supprime les accents
      .replace(/[^a-z0-9\s]/g, "") // supprime les caractères spéciaux
      .replace(/\s+/g, " "); // remplace les espaces multiples par un seul
  },
  mapNormalizeString(stringList: string[]): string[] {
    return stringList.map((item) => {
      return this.normalizeString(item);
    });
  },
  findMatchingStrings({
    sourceWordList,
    targetWordList,
  }: {
    sourceWordList: string[];
    targetWordList: string[];
  }): {
    sourceIndex: number;
  }[] {
    if (
      sourceWordList.filter(Boolean).length === 0 ||
      targetWordList.filter(Boolean).length === 0
    ) {
      throw new Error(`sourceWordList or targetWordList is empty`);
    }

    const normalizedTargetList = stringUtils.mapNormalizeString(targetWordList);

    return sourceWordList
      .filter((sourceWord) => {
        const normalizedSourceWord = stringUtils.normalizeString(sourceWord);

        return normalizedTargetList.some((normalizeTargetWord) =>
          normalizedSourceWord.includes(normalizeTargetWord),
        );
      })
      .map((targetWord) => ({
        sourceIndex: sourceWordList.indexOf(targetWord),
      }));
  },
  findFirstMatchingString({
    sourceWordList,
    targetWordList,
  }: {
    sourceWordList: string[];
    targetWordList: string[];
  }): {
    firstMatchingStringIndex: number;
    otherMatchingStringIndexList: {
      sourceIndex: number;
    }[];
  } {
    const matchingStringList = stringUtils.findMatchingStrings({
      sourceWordList,
      targetWordList,
    });

    if (
      !matchingStringList.length ||
      matchingStringList[0]?.sourceIndex === -1
    ) {
      throw new Error(`No matching string found
        for [${targetWordList}]
        in [${sourceWordList}]`);
    }

    if (matchingStringList.length > 1) {
      logger.trace(
        `multiple matching strings found (${matchingStringList.length}) for "${targetWordList}. Using the first one"`,
      );
    }

    return {
      firstMatchingStringIndex: matchingStringList[0].sourceIndex,
      otherMatchingStringIndexList: matchingStringList.slice(1),
    };
  },
};
