export const stringUtils = {
  normalizeString(stringList: string): string {
    return stringList
      .trim() // supprime les espaces en début et fin
      .toLowerCase() // met tout en minuscule
      .normalize('NFD') // décompose les caractères accentués
      .replace(/[\u0300-\u036f]/g, '') // supprime les accents
      .replace(/[^a-z0-9\s]/g, '') // supprime les caractères spéciaux
      .replace(/\s+/g, ' ') // remplace les espaces multiples par un seul
  },
  mapNormalizeString(stringList: string[]): string[] {
    return stringList.map((item) => {
      return this.normalizeString(item)
    })
  },
  findMatchingStrings({
    sourceWordList,
    targetWordList,
  }: {
    sourceWordList: string[]
    targetWordList: string[]
  }): {
    sourceIndex: number
  }[] {
    if (sourceWordList.filter(Boolean).length === 0 || targetWordList.filter(Boolean).length === 0) {
      throw new Error(`sourceWordList or targetWordList is empty`)
    }

    const normalizedTargets = stringUtils.mapNormalizeString(targetWordList);

    return sourceWordList.filter(sourceWord => {
      const normalizedSourceWord = stringUtils.normalizeString(sourceWord)

      return normalizedTargets.some(normalizeTargetWord => normalizedSourceWord.includes(normalizeTargetWord))
    }).map((targetWord) => ({
      sourceIndex: sourceWordList.indexOf(targetWord),
    }))
  },
  findFirstMatchingString({
    sourceWordList,
    targetWordList,
  }: {
    sourceWordList: string[]
    targetWordList: string[]
  }): {
    firstMatchingStringIndex: number
    otherMatchingStringIndex: {
      sourceIndex: number
    }[]
  } {
    const matchingString = stringUtils.findMatchingStrings({
      sourceWordList,
      targetWordList,
    })

    if (!matchingString.length || matchingString[0]?.sourceIndex === -1) {
      throw new Error(`No matching string found
        for [${targetWordList}]
        in [${sourceWordList}]`
      )
    }

    if (matchingString.length > 1) {
      console.trace(`multiple matching strings found (${matchingString.length}) for "${targetWordList}. Using the first one"`)
    }

    return {
      firstMatchingStringIndex: matchingString[0].sourceIndex ,
      otherMatchingStringIndex: matchingString.slice(1),
    }
  }
}
