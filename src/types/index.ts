export type CategoryId = 'weight' | 'length' | 'temperature' | 'time' | 'volume' | 'currency';

export interface ConverterUnit {
  id: string;
  name: string;
  symbol: string;
  pluralName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ConversionExample {
  inputVal: number;
  outputVal: string;
  explanation: string;
}

export interface ConverterConfig {
  id: string;
  slug: string; // e.g. "kilograms-to-pounds"
  url: string;  // e.g. "/kilograms-to-pounds/"
  categoryId: CategoryId;
  categoryName: string;
  fromUnit: ConverterUnit;
  toUnit: ConverterUnit;
  // If unit allows variant (e.g. US gallon vs Imperial gallon)
  variants?: {
    id: string;
    label: string;
    ratioToDefault: number;
    description: string;
  }[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  formulaDescription: string;
  formulaMath: string;
  convert: (value: number, variantId?: string) => number;
  reverseConvert: (value: number, variantId?: string) => number;
  defaultInput: number;
  unitStep?: number;
  reverseSlug: string;
  relatedSlugs: string[];
  tableValues: number[];
  examples: ConversionExample[];
  faqs: FAQItem[];
}

export interface CurrencyData {
  base: string;
  date: string;
  rates: Record<string, number>;
  timeLastUpdated: string;
}
