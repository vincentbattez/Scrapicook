export interface IJowCreateRecipeBody {
  additionalConstituents: any[]
  backgroundPattern: IJowBackgroundPattern
  constituents: IJowConstituent[]
  cookingTime: string
  directions: IJowDirection[]
  recipeFamily: string
  requiredTools: any[]
  imageUrl: string
  placeHolderUrl: string
  preparationTime: string
  restingTime: string
  staticCoversCount: boolean
  tip: IJowTip
  title: string
  userConstituents: any[]
  userCoversCount: number
}

export interface IJowBackgroundPattern {
  color: string
  imageUrl: string
}

export interface IJowConstituent {
  ingredient: IJowIngredient
  quantityPerCover: number
  unit: IJowUnit
}

export interface IJowUnit {
  _id: string
  __v: number
  measurementSystemCompatibility: IJowMeasurementSystemCompatibility
  abbreviations: IJowAbbreviation[]
  comments: string
  updatedAt: string
  createdAt: string
  isNatural: boolean
  name: string
  id: string
}

export interface IJowMeasurementSystemCompatibility {
  metric: boolean
  imperial: boolean
  us: boolean
}

export interface IJowAbbreviation {
  id: string
  _id: string
  minAmount: number
  maxAmount?: number
  digits: number
  divisor: number
  inverse: boolean
  label: string
}

export interface IJowDirection {
  label: string
  involvedIngredients: any[]
}

export interface IJowTip {
  description: string
}

export interface IJowIngredient {
  id: string
  _id?: string
  name: string
  imageUrl: string
  naturalUnit: IJowUnit
  displayableUnits: IJowDisplayableUnit[]
  isBasicIngredient?: boolean
  alternativeUnits?: IJowAlternativeUnit[]
  isAdditionalConstituent?: boolean
  scores?: number[]
  boldName?: string
  editorialData?: IJowEditorialData
  eatingHabitsCompatibility?: EatingHabitsCompatibility
}

export interface IJowDisplayableUnit {
  label: string
  name: string
  abbreviationId: string
  unit: IJowUnit
}

export interface IJowAlternativeUnit {
  id: string
  _id: string
  unit: IJowUnit
  quantity: number
}

export interface IJowEditorialData {
  flags: Flags
  nutritionalFacts: NutritionalFact[]
  seasonality: any[]
  preservation: string
  averageEstimatedValues: AverageEstimatedValues
}

export interface Flags {
  fruit: boolean
  vegetable: boolean
}

export interface NutritionalFact {
  id: string
  label: string
  unit: string
  amount: number
}

export interface AverageEstimatedValues {
  amount: number
  unit: string
}

export interface EatingHabitsCompatibility {
  vegan: boolean
  vegetarian: boolean
  porkless: boolean
  dairyFree: boolean
  glutenFree: boolean
  fish: boolean
  redMeat: boolean
  whiteMeat: boolean
}
