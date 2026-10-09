import { ConverterConfig } from '../types';

export const CONVERTERS: ConverterConfig[] = [
  // 1. KILOGRAMS TO POUNDS
  {
    id: 'kilograms-to-pounds',
    slug: 'kilograms-to-pounds',
    url: '/kilograms-to-pounds',
    categoryId: 'weight',
    categoryName: 'Weight',
    fromUnit: { id: 'kg', name: 'Kilogram', symbol: 'kg', pluralName: 'Kilograms' },
    toUnit: { id: 'lb', name: 'Pound', symbol: 'lb', pluralName: 'Pounds' },
    primaryKeyword: 'kilograms to pounds',
    secondaryKeywords: [
      'kg to lb',
      'kg to lbs',
      'convert kg to pounds',
      'kg to pounds',
      'kilograms to pounds conversion',
      'converter kg to lbs',
      'kg to pound',
      'kilos to pounds'
    ],
    seoTitle: 'Kilograms to Pounds Converter — kg to lb',
    metaDescription: 'Convert kilograms to pounds quickly and accurately. Enter a weight in kg and get the equivalent value in pounds instantly.',
    h1: 'Kilograms to Pounds Converter (kg to lb)',
    summary: 'A fast, accurate calculator to convert weight from kilograms (kg) to pounds (lb/lbs). Enter any kilogram value to see the exact pound equivalent.',
    formulaDescription: 'To convert kilograms to pounds, multiply the kilogram measurement by 2.20462262 (or divide by 0.45359237). 1 international avoirdupois pound is legally defined as exactly 0.45359237 kilograms.',
    formulaMath: 'Pounds (lb) = Kilograms (kg) × 2.20462262',
    convert: (val) => val * 2.2046226218487758,
    reverseConvert: (val) => val * 0.45359237,
    defaultInput: 10,
    unitStep: 1,
    reverseSlug: 'pounds-to-kilograms',
    relatedSlugs: ['pounds-to-kilograms', 'ounces-to-grams', 'grams-to-ounces'],
    tableValues: [1, 2, 5, 10, 15, 20, 25, 50, 75, 100],
    examples: [
      {
        inputVal: 1,
        outputVal: '2.2046 lb',
        explanation: '1 kg × 2.20462 = 2.2046 pounds'
      },
      {
        inputVal: 10,
        outputVal: '22.0462 lb',
        explanation: '10 kg × 2.20462 = 22.0462 pounds'
      },
      {
        inputVal: 68,
        outputVal: '149.9143 lb',
        explanation: '68 kg (average body weight) × 2.20462 = ~150 pounds'
      }
    ],
    faqs: [
      {
        question: 'How many pounds are in 1 kilogram?',
        answer: 'There are approximately 2.20462 pounds (lbs) in 1 kilogram (kg). For quick mental estimates, you can double the kilogram number and add 10% (e.g., 10 kg × 2 = 20, plus 10% = 22 lb).'
      },
      {
        question: 'What is the exact conversion formula for kg to lb?',
        answer: 'The formula is: Weight in Pounds (lb) = Weight in Kilograms (kg) × 2.20462262. Conversely, 1 pound equals exactly 0.45359237 kilograms.'
      },
      {
        question: 'What is the difference between lb and lbs?',
        answer: '"lb" is the standard abbreviation for pound (derived from the Roman libra), while "lbs" is the common plural colloquial form. Both refer to the exact same imperial weight unit.'
      }
    ]
  },

  // 2. POUNDS TO KILOGRAMS
  {
    id: 'pounds-to-kilograms',
    slug: 'pounds-to-kilograms',
    url: '/pounds-to-kilograms',
    categoryId: 'weight',
    categoryName: 'Weight',
    fromUnit: { id: 'lb', name: 'Pound', symbol: 'lb', pluralName: 'Pounds' },
    toUnit: { id: 'kg', name: 'Kilogram', symbol: 'kg', pluralName: 'Kilograms' },
    primaryKeyword: 'pounds to kilograms',
    secondaryKeywords: [
      'lbs to kg',
      'pound kg',
      'pounds kg',
      'pounds kilograms',
      'pounds to kilos',
      'kilogram conversion',
      'convert pounds to kilograms',
      'lb to kg'
    ],
    seoTitle: 'Pounds to Kilograms Converter — lb to kg',
    metaDescription: 'Convert pounds to kilograms quickly and accurately. Enter a weight in lb or lbs and get the equivalent value in kilograms.',
    h1: 'Pounds to Kilograms Converter (lb to kg)',
    summary: 'Instantly convert pounds (lb/lbs) into kilograms (kg). Ideal for luggage weights, body mass tracking, fitness lifting, and international recipes.',
    formulaDescription: 'To convert pounds to kilograms, multiply the value in pounds by 0.45359237 (or divide by 2.20462262). One pound equals exactly 0.45359237 kg.',
    formulaMath: 'Kilograms (kg) = Pounds (lb) × 0.45359237',
    convert: (val) => val * 0.45359237,
    reverseConvert: (val) => val * 2.2046226218487758,
    defaultInput: 50,
    unitStep: 1,
    reverseSlug: 'kilograms-to-pounds',
    relatedSlugs: ['kilograms-to-pounds', 'ounces-to-grams', 'grams-to-ounces'],
    tableValues: [1, 5, 10, 20, 25, 50, 100, 150, 180, 200],
    examples: [
      {
        inputVal: 1,
        outputVal: '0.4536 kg',
        explanation: '1 lb × 0.453592 = 0.4536 kilograms'
      },
      {
        inputVal: 50,
        outputVal: '22.6796 kg',
        explanation: '50 lb (standard airline luggage limit) × 0.453592 = 22.68 kilograms'
      },
      {
        inputVal: 150,
        outputVal: '68.0389 kg',
        explanation: '150 lb × 0.453592 = 68.04 kilograms'
      }
    ],
    faqs: [
      {
        question: 'How do you convert pounds to kilograms?',
        answer: 'Multiply the pound value by 0.45359237. For a quick mental estimate, divide the pounds by 2 and subtract roughly 10% (e.g., 100 lb / 2 = 50, minus 10% = ~45 kg).'
      },
      {
        question: 'How many kilograms is 1 pound?',
        answer: '1 pound (lb) is legally defined as exactly 0.45359237 kilograms (kg).'
      },
      {
        question: 'What is 50 lbs luggage in kg?',
        answer: '50 pounds is approximately 22.68 kilograms. Most international airlines enforce a 23 kg checked baggage weight limit, which corresponds to 50.7 pounds.'
      }
    ]
  },

  // 3. OUNCES TO GRAMS
  {
    id: 'ounces-to-grams',
    slug: 'ounces-to-grams',
    url: '/ounces-to-grams',
    categoryId: 'weight',
    categoryName: 'Weight',
    fromUnit: { id: 'oz', name: 'Ounce', symbol: 'oz', pluralName: 'Ounces' },
    toUnit: { id: 'g', name: 'Gram', symbol: 'g', pluralName: 'Grams' },
    primaryKeyword: 'ounces to grams',
    secondaryKeywords: [
      'oz to grams',
      'convert ounces to grams',
      'ounce gram converter',
      'ounces to grams calculator',
      'ounces to grams conversion',
      'oz to g'
    ],
    seoTitle: 'Ounces to Grams Converter — oz to g',
    metaDescription: 'Convert ounces to grams quickly and accurately. Enter a weight in ounces and get the equivalent measurement in grams.',
    h1: 'Ounces to Grams Converter (oz to g)',
    summary: 'Convert avoirdupois ounces (oz) to grams (g) with high precision. Perfect for culinary baking, kitchen recipes, postal parcels, and nutritional calculations.',
    formulaDescription: 'To convert ounces to grams, multiply the number of ounces by 28.349523125. One standard avoirdupois ounce equals exactly 28.349523125 grams (1/16th of an avoirdupois pound).',
    formulaMath: 'Grams (g) = Ounces (oz) × 28.349523',
    convert: (val) => val * 28.349523125,
    reverseConvert: (val) => val / 28.349523125,
    defaultInput: 8,
    unitStep: 0.5,
    reverseSlug: 'grams-to-ounces',
    relatedSlugs: ['grams-to-ounces', 'kilograms-to-pounds', 'pounds-to-kilograms'],
    tableValues: [0.5, 1, 2, 4, 8, 12, 16, 24, 32, 64],
    examples: [
      {
        inputVal: 1,
        outputVal: '28.3495 g',
        explanation: '1 oz × 28.3495 = 28.35 grams'
      },
      {
        inputVal: 8,
        outputVal: '226.7962 g',
        explanation: '8 oz (1 cup water weight) × 28.3495 = 226.8 grams'
      },
      {
        inputVal: 16,
        outputVal: '453.5924 g',
        explanation: '16 oz (1 pound) × 28.3495 = 453.59 grams'
      }
    ],
    faqs: [
      {
        question: 'How many grams are in 1 ounce?',
        answer: 'There are exactly 28.349523125 grams in 1 standard avoirdupois ounce. In culinary cooking, 28.35 grams is the customary rounding.'
      },
      {
        question: 'Is a fluid ounce the same as a weight ounce?',
        answer: 'No. A fluid ounce (fl oz) measures volume, while an avoirdupois ounce (oz) measures mass or weight. This calculator converts weight ounces to grams.'
      },
      {
        question: 'How do you convert oz to g manually?',
        answer: 'Multiply the number of ounces by 28.35. For instance, 4 oz × 28.35 = 113.4 grams.'
      }
    ]
  },

  // 4. GRAMS TO OUNCES
  {
    id: 'grams-to-ounces',
    slug: 'grams-to-ounces',
    url: '/grams-to-ounces',
    categoryId: 'weight',
    categoryName: 'Weight',
    fromUnit: { id: 'g', name: 'Gram', symbol: 'g', pluralName: 'Grams' },
    toUnit: { id: 'oz', name: 'Ounce', symbol: 'oz', pluralName: 'Ounces' },
    primaryKeyword: 'grams to ounces',
    secondaryKeywords: [
      'gm to oz',
      'g to oz',
      'gram to oz',
      'grams to oz',
      'grams to ounces calculator',
      'grams to ounces conversion',
      'grams to ounces conversion chart',
      'convert grams to oz',
      'how many ounces is 10 grams'
    ],
    seoTitle: 'Grams to Ounces Converter — g to oz',
    metaDescription: 'Convert grams to ounces quickly and accurately. Enter a weight in grams to get the equivalent measurement in ounces.',
    h1: 'Grams to Ounces Converter (g to oz)',
    summary: 'Effortlessly convert grams (g) to ounces (oz). Essential for following international cooking recipes, portioning ingredients, and scientific measurements.',
    formulaDescription: 'To convert grams to ounces, multiply the gram value by 0.03527396195 (or divide the number of grams by 28.349523125).',
    formulaMath: 'Ounces (oz) = Grams (g) ÷ 28.349523',
    convert: (val) => val / 28.349523125,
    reverseConvert: (val) => val * 28.349523125,
    defaultInput: 100,
    unitStep: 5,
    reverseSlug: 'ounces-to-grams',
    relatedSlugs: ['ounces-to-grams', 'kilograms-to-pounds', 'pounds-to-kilograms'],
    tableValues: [1, 10, 25, 50, 100, 150, 250, 500, 750, 1000],
    examples: [
      {
        inputVal: 10,
        outputVal: '0.3527 oz',
        explanation: '10 g ÷ 28.3495 = 0.3527 ounces'
      },
      {
        inputVal: 100,
        outputVal: '3.5274 oz',
        explanation: '100 g ÷ 28.3495 = 3.5274 ounces'
      },
      {
        inputVal: 500,
        outputVal: '17.6370 oz',
        explanation: '500 g (0.5 kg) ÷ 28.3495 = 17.6370 ounces (~1.1 lb)'
      }
    ],
    faqs: [
      {
        question: 'How many ounces are in 1 gram?',
        answer: '1 gram equals approximately 0.035274 ounces. 100 grams is about 3.53 ounces.'
      },
      {
        question: 'How do I convert grams to ounces for cooking?',
        answer: 'Divide the grams by 28.35. For example, a recipe calling for 250 grams of flour converts to: 250 ÷ 28.35 = 8.82 ounces.'
      },
      {
        question: 'What is 100g in ounces?',
        answer: '100 grams equals approximately 3.527 ounces (or 3 ½ oz).'
      }
    ]
  },

  // 5. CENTIMETERS TO INCHES
  {
    id: 'centimeters-to-inches',
    slug: 'centimeters-to-inches',
    url: '/centimeters-to-inches',
    categoryId: 'length',
    categoryName: 'Length',
    fromUnit: { id: 'cm', name: 'Centimeter', symbol: 'cm', pluralName: 'Centimeters' },
    toUnit: { id: 'in', name: 'Inch', symbol: 'in', pluralName: 'Inches' },
    primaryKeyword: 'centimeters to inches',
    secondaryKeywords: [
      'centimetre to inch',
      'centimeter to inch',
      'centimeter to inches',
      'cm to inch',
      'cm to inches',
      'centimeters to inches conversion',
      'convert cm to inches'
    ],
    seoTitle: 'Centimeters to Inches Converter — cm to inches',
    metaDescription: 'Convert centimeters to inches quickly and accurately. Enter a measurement in cm to get the equivalent length in inches.',
    h1: 'Centimeters to Inches Converter (cm to in)',
    summary: 'Convert centimeters (cm) to inches (in) with instant precision. Great for body sizing, clothing dimensions, carpentry, screen measurements, and architectural plans.',
    formulaDescription: 'To convert centimeters to inches, divide the length in centimeters by 2.54 (or multiply by 0.393700787). By international agreement, 1 inch equals exactly 2.54 centimeters.',
    formulaMath: 'Inches (in) = Centimeters (cm) ÷ 2.54',
    convert: (val) => val / 2.54,
    reverseConvert: (val) => val * 2.54,
    defaultInput: 30,
    unitStep: 1,
    reverseSlug: 'inches-to-centimeters',
    relatedSlugs: ['inches-to-centimeters', 'feet-to-meters', 'meters-to-feet'],
    tableValues: [1, 5, 10, 15, 20, 25, 30, 50, 100, 180],
    examples: [
      {
        inputVal: 2.54,
        outputVal: '1 in',
        explanation: '2.54 cm ÷ 2.54 = exactly 1 inch'
      },
      {
        inputVal: 30,
        outputVal: '11.8110 in',
        explanation: '30 cm (standard ruler length) ÷ 2.54 = 11.81 inches'
      },
      {
        inputVal: 180,
        outputVal: '70.8661 in',
        explanation: '180 cm (height) ÷ 2.54 = 70.87 inches (5 feet 10.87 inches)'
      }
    ],
    faqs: [
      {
        question: 'How many inches is 1 centimeter?',
        answer: '1 centimeter equals approximately 0.3937 inches. 1 inch is exactly 2.54 centimeters.'
      },
      {
        question: 'How do I convert cm to inches in my head?',
        answer: 'Multiply centimeters by 4 and divide by 10 (or multiply by 0.4). For example: 20 cm × 0.4 ≈ 8 inches (exact is 7.87 inches).'
      },
      {
        question: 'What is 10 cm in inches?',
        answer: '10 centimeters is equal to 3.937 inches (just under 4 inches).'
      }
    ]
  },

  // 6. INCHES TO CENTIMETERS
  {
    id: 'inches-to-centimeters',
    slug: 'inches-to-centimeters',
    url: '/inches-to-centimeters',
    categoryId: 'length',
    categoryName: 'Length',
    fromUnit: { id: 'in', name: 'Inch', symbol: 'in', pluralName: 'Inches' },
    toUnit: { id: 'cm', name: 'Centimeter', symbol: 'cm', pluralName: 'Centimeters' },
    primaryKeyword: 'inches to centimeters',
    secondaryKeywords: [
      'inch to centimeter',
      'inch to centimeters',
      'inch to cm',
      'inches to cm',
      'inches a cm',
      'convert inches to cm',
      'inches to centimeters conversion',
      'in to cm'
    ],
    seoTitle: 'Inches to Centimeters Converter — in to cm',
    metaDescription: 'Convert inches to centimeters quickly and accurately. Enter a measurement in inches to get the equivalent value in centimeters.',
    h1: 'Inches to Centimeters Converter (in to cm)',
    summary: 'Accurately convert inches (in) to centimeters (cm). Use this calculator for craft projects, screen diagonal sizes, paper dimensions, and tailoring.',
    formulaDescription: 'To convert inches to centimeters, multiply the inch measurement by 2.54. One inch is defined internationally as exactly 2.54 centimeters.',
    formulaMath: 'Centimeters (cm) = Inches (in) × 2.54',
    convert: (val) => val * 2.54,
    reverseConvert: (val) => val / 2.54,
    defaultInput: 12,
    unitStep: 0.5,
    reverseSlug: 'centimeters-to-inches',
    relatedSlugs: ['centimeters-to-inches', 'feet-to-meters', 'meters-to-feet'],
    tableValues: [1, 2, 4, 6, 8, 10, 12, 24, 36, 60],
    examples: [
      {
        inputVal: 1,
        outputVal: '2.54 cm',
        explanation: '1 in × 2.54 = 2.54 centimeters'
      },
      {
        inputVal: 12,
        outputVal: '30.48 cm',
        explanation: '12 in (1 foot) × 2.54 = 30.48 centimeters'
      },
      {
        inputVal: 65,
        outputVal: '165.10 cm',
        explanation: '65 in (TV screen diagonal) × 2.54 = 165.1 cm'
      }
    ],
    faqs: [
      {
        question: 'How many centimeters are in 1 inch?',
        answer: 'There are exactly 2.54 centimeters in 1 inch by international legal agreement.'
      },
      {
        question: 'What is 12 inches in cm?',
        answer: '12 inches (1 foot) equals exactly 30.48 centimeters.'
      },
      {
        question: 'How do you convert fractional inches (like 1/2 or 3/4) to cm?',
        answer: 'Convert the fraction to decimal first (1/2 = 0.5, 3/4 = 0.75), then multiply by 2.54. For instance, 0.5 in × 2.54 = 1.27 cm.'
      }
    ]
  },

  // 7. FEET TO METERS
  {
    id: 'feet-to-meters',
    slug: 'feet-to-meters',
    url: '/feet-to-meters',
    categoryId: 'length',
    categoryName: 'Length',
    fromUnit: { id: 'ft', name: 'Foot', symbol: 'ft', pluralName: 'Feet' },
    toUnit: { id: 'm', name: 'Meter', symbol: 'm', pluralName: 'Meters' },
    primaryKeyword: 'feet to meters',
    secondaryKeywords: [
      'feet in meters',
      'feet m',
      'feet meter',
      'feet meters',
      'foot meters',
      'ft to meters',
      'ft to m',
      'feet to meters conversion',
      'feet to meters conversion factor'
    ],
    seoTitle: 'Feet to Meters Converter — ft to m',
    metaDescription: 'Convert feet to meters quickly and accurately. Enter a length in feet and get the equivalent measurement in meters.',
    h1: 'Feet to Meters Converter (ft to m)',
    summary: 'Convert length or altitude from feet (ft) to meters (m) with exact conversion factors. Widely used in aviation, sports field measurements, and construction.',
    formulaDescription: 'To convert feet to meters, multiply the value in feet by 0.3048. One foot is defined as exactly 0.3048 meters.',
    formulaMath: 'Meters (m) = Feet (ft) × 0.3048',
    convert: (val) => val * 0.3048,
    reverseConvert: (val) => val / 0.3048,
    defaultInput: 10,
    unitStep: 1,
    reverseSlug: 'meters-to-feet',
    relatedSlugs: ['meters-to-feet', 'centimeters-to-inches', 'meters-to-kilometers'],
    tableValues: [1, 3, 6, 10, 20, 30, 50, 100, 500, 1000],
    examples: [
      {
        inputVal: 1,
        outputVal: '0.3048 m',
        explanation: '1 ft × 0.3048 = 0.3048 meters'
      },
      {
        inputVal: 6,
        outputVal: '1.8288 m',
        explanation: '6 ft (human height) × 0.3048 = 1.8288 meters'
      },
      {
        inputVal: 100,
        outputVal: '30.48 m',
        explanation: '100 ft × 0.3048 = 30.48 meters'
      }
    ],
    faqs: [
      {
        question: 'How many meters are in 1 foot?',
        answer: '1 foot equals exactly 0.3048 meters.'
      },
      {
        question: 'What is the quick way to estimate feet to meters?',
        answer: 'Multiply feet by 0.3 (or divide by 3.3). For instance, 30 ft × 0.3 ≈ 9 meters (exact: 9.144 m).'
      },
      {
        question: 'How do I convert 6 feet into meters?',
        answer: '6 ft × 0.3048 = 1.8288 meters.'
      }
    ]
  },

  // 8. METERS TO FEET
  {
    id: 'meters-to-feet',
    slug: 'meters-to-feet',
    url: '/meters-to-feet',
    categoryId: 'length',
    categoryName: 'Length',
    fromUnit: { id: 'm', name: 'Meter', symbol: 'm', pluralName: 'Meters' },
    toUnit: { id: 'ft', name: 'Foot', symbol: 'ft', pluralName: 'Feet' },
    primaryKeyword: 'meters to feet',
    secondaryKeywords: [
      'meter to feet',
      'meters in feet',
      'meters to ft',
      'metres to feet',
      'metre to feet',
      'meters to feet conversion calculator',
      'm to ft'
    ],
    seoTitle: 'Meters to Feet Converter — m to ft',
    metaDescription: 'Convert meters to feet quickly and accurately. Enter a measurement in meters and get the equivalent length in feet.',
    h1: 'Meters to Feet Converter (m to ft)',
    summary: 'Convert meters (m) to feet (ft). Easily convert metric distances, elevation gains, room sizes, and athletics records into imperial feet.',
    formulaDescription: 'To convert meters to feet, divide the number of meters by 0.3048 (or multiply by 3.280839895). One meter equals roughly 3.2808 feet.',
    formulaMath: 'Feet (ft) = Meters (m) ÷ 0.3048',
    convert: (val) => val / 0.3048,
    reverseConvert: (val) => val * 0.3048,
    defaultInput: 5,
    unitStep: 1,
    reverseSlug: 'feet-to-meters',
    relatedSlugs: ['feet-to-meters', 'meters-to-kilometers', 'centimeters-to-inches'],
    tableValues: [1, 2, 5, 10, 25, 50, 100, 200, 400, 1000],
    examples: [
      {
        inputVal: 1,
        outputVal: '3.2808 ft',
        explanation: '1 m ÷ 0.3048 = 3.2808 feet (or ~3 ft 3 3/8 in)'
      },
      {
        inputVal: 5,
        outputVal: '16.4042 ft',
        explanation: '5 m ÷ 0.3048 = 16.4042 feet'
      },
      {
        inputVal: 100,
        outputVal: '328.0840 ft',
        explanation: '100 m sprint track ÷ 0.3048 = 328.08 feet'
      }
    ],
    faqs: [
      {
        question: 'How many feet are in 1 meter?',
        answer: '1 meter equals approximately 3.28084 feet (about 3 feet 3.37 inches).'
      },
      {
        question: 'How do you convert meters to feet and inches?',
        answer: 'Take the decimal part of the feet result and multiply by 12. For example, 1.8 m = 5.9055 ft. 0.9055 × 12 = 10.86 inches, so 1.8 m is approximately 5 feet 11 inches.'
      },
      {
        question: 'What is 10 meters in feet?',
        answer: '10 meters equals 32.8084 feet.'
      }
    ]
  },

  // 9. METERS TO KILOMETERS
  {
    id: 'meters-to-kilometers',
    slug: 'meters-to-kilometers',
    url: '/meters-to-kilometers',
    categoryId: 'length',
    categoryName: 'Length',
    fromUnit: { id: 'm', name: 'Meter', symbol: 'm', pluralName: 'Meters' },
    toUnit: { id: 'km', name: 'Kilometer', symbol: 'km', pluralName: 'Kilometers' },
    primaryKeyword: 'meters to kilometers',
    secondaryKeywords: [
      'm to km',
      'meter to kilometer',
      'meter to km',
      'meters in a kilometer',
      'meters in a km',
      'meters to km',
      'metres to km',
      'how many meters in a km',
      'convert meters to kilometers',
      'meters to kilometers formula'
    ],
    seoTitle: 'Meters to Kilometers Converter — m to km',
    metaDescription: 'Convert meters to kilometers quickly and accurately. Enter a distance in meters and get the equivalent distance in kilometers.',
    h1: 'Meters to Kilometers Converter (m to km)',
    summary: 'Convert meters (m) to kilometers (km) in the metric system. Simple, exact decimal conversion for running tracks, hiking trails, and surveying.',
    formulaDescription: 'To convert meters to kilometers, divide the number of meters by 1,000. In the International System of Units (SI), "kilo-" means one thousand.',
    formulaMath: 'Kilometers (km) = Meters (m) ÷ 1,000',
    convert: (val) => val / 1000,
    reverseConvert: (val) => val * 1000,
    defaultInput: 1500,
    unitStep: 100,
    reverseSlug: 'kilometers-to-meters',
    relatedSlugs: ['kilometers-to-meters', 'feet-to-meters', 'meters-to-feet'],
    tableValues: [100, 250, 500, 750, 1000, 1500, 2000, 5000, 10000, 42195],
    examples: [
      {
        inputVal: 1000,
        outputVal: '1 km',
        explanation: '1,000 m ÷ 1,000 = exactly 1 kilometer'
      },
      {
        inputVal: 5000,
        outputVal: '5 km',
        explanation: '5,000 m (5K race) ÷ 1,000 = 5 kilometers'
      },
      {
        inputVal: 42195,
        outputVal: '42.195 km',
        explanation: '42,195 m (official marathon) ÷ 1,000 = 42.195 km'
      }
    ],
    faqs: [
      {
        question: 'How many meters are in a kilometer?',
        answer: 'There are exactly 1,000 meters in 1 kilometer.'
      },
      {
        question: 'What is the formula to convert meters to kilometers?',
        answer: 'Divide meters by 1,000. For example: 2,500 m / 1,000 = 2.5 km.'
      },
      {
        question: 'What is 500 meters in km?',
        answer: '500 meters equals 0.5 kilometers (or half a kilometer).'
      }
    ]
  },

  // 10. KILOMETERS TO METERS
  {
    id: 'kilometers-to-meters',
    slug: 'kilometers-to-meters',
    url: '/kilometers-to-meters',
    categoryId: 'length',
    categoryName: 'Length',
    fromUnit: { id: 'km', name: 'Kilometer', symbol: 'km', pluralName: 'Kilometers' },
    toUnit: { id: 'm', name: 'Meter', symbol: 'm', pluralName: 'Meters' },
    primaryKeyword: 'kilometers to meters',
    secondaryKeywords: [
      'kilometer to meter',
      'kilometres to metres',
      'km m',
      'km to m',
      'km to meter',
      'km to meters',
      'how many meters in a kilometer',
      'convert kilometers to meters'
    ],
    seoTitle: 'Kilometers to Meters Converter — km to m',
    metaDescription: 'Convert kilometers to meters quickly and accurately. Enter a distance in kilometers and get the equivalent distance in meters.',
    h1: 'Kilometers to Meters Converter (km to m)',
    summary: 'Convert kilometers (km) to meters (m) with instantaneous calculation. Ideal for physics problems, map measurements, and GPS coordinates.',
    formulaDescription: 'To convert kilometers to meters, multiply the kilometer value by 1,000.',
    formulaMath: 'Meters (m) = Kilometers (km) × 1,000',
    convert: (val) => val * 1000,
    reverseConvert: (val) => val / 1000,
    defaultInput: 5,
    unitStep: 1,
    reverseSlug: 'meters-to-kilometers',
    relatedSlugs: ['meters-to-kilometers', 'meters-to-feet', 'feet-to-meters'],
    tableValues: [0.5, 1, 2, 5, 10, 15, 20, 25, 50, 100],
    examples: [
      {
        inputVal: 1,
        outputVal: '1,000 m',
        explanation: '1 km × 1,000 = 1,000 meters'
      },
      {
        inputVal: 5,
        outputVal: '5,000 m',
        explanation: '5 km × 1,000 = 5,000 meters'
      },
      {
        inputVal: 10.5,
        outputVal: '10,500 m',
        explanation: '10.5 km × 1,000 = 10,500 meters'
      }
    ],
    faqs: [
      {
        question: 'How do you convert km to meters?',
        answer: 'Simply multiply the number of kilometers by 1,000. Move the decimal point three places to the right.'
      },
      {
        question: 'How many meters is 10 km?',
        answer: '10 km equals 10,000 meters.'
      },
      {
        question: 'Why are there 1000 meters in a kilometer?',
        answer: 'The metric prefix "kilo-" originates from the Greek word "chilioi", meaning thousand.'
      }
    ]
  },

  // 11. CELSIUS TO FAHRENHEIT
  {
    id: 'celsius-to-fahrenheit',
    slug: 'celsius-to-fahrenheit',
    url: '/celsius-to-fahrenheit',
    categoryId: 'temperature',
    categoryName: 'Temperature',
    fromUnit: { id: 'c', name: 'Celsius', symbol: '°C', pluralName: 'Degrees Celsius' },
    toUnit: { id: 'f', name: 'Fahrenheit', symbol: '°F', pluralName: 'Degrees Fahrenheit' },
    primaryKeyword: 'celsius to fahrenheit',
    secondaryKeywords: [
      'centigrade to fahrenheit',
      'degree c to f',
      'c to f',
      'c to fahrenheit',
      'convert celsius to fahrenheit',
      'celsius to fahrenheit formula',
      'celsius to fahrenheit conversion'
    ],
    seoTitle: 'Celsius to Fahrenheit Converter — °C to °F',
    metaDescription: 'Convert Celsius to Fahrenheit instantly. Enter a temperature in °C and get the equivalent Fahrenheit temperature with the formula and examples.',
    h1: 'Celsius to Fahrenheit Converter (°C to °F)',
    summary: 'Convert degrees Celsius (°C) to degrees Fahrenheit (°F). See the exact temperature conversion along with the scientific formula and real-world benchmarks.',
    formulaDescription: 'To convert Celsius to Fahrenheit, multiply the temperature in Celsius by 9/5 (or 1.8), then add 32. This accounts for both the different zero points (freezing point of water is 0 °C and 32 °F) and degree scaling.',
    formulaMath: '°F = (°C × 9/5) + 32  or  °F = (°C × 1.8) + 32',
    convert: (val) => (val * 9) / 5 + 32,
    reverseConvert: (val) => ((val - 32) * 5) / 9,
    defaultInput: 25,
    unitStep: 1,
    reverseSlug: 'fahrenheit-to-celsius',
    relatedSlugs: ['fahrenheit-to-celsius'],
    tableValues: [-40, -10, 0, 10, 20, 25, 30, 37, 100, 200],
    examples: [
      {
        inputVal: 0,
        outputVal: '32 °F',
        explanation: '(0 × 1.8) + 32 = 32 °F (Freezing point of water)'
      },
      {
        inputVal: 25,
        outputVal: '77 °F',
        explanation: '(25 × 1.8) + 32 = 45 + 32 = 77 °F (Pleasant room temperature)'
      },
      {
        inputVal: 100,
        outputVal: '212 °F',
        explanation: '(100 × 1.8) + 32 = 180 + 32 = 212 °F (Boiling point of water)'
      }
    ],
    faqs: [
      {
        question: 'What is the formula to convert Celsius to Fahrenheit?',
        answer: 'The formula is: °F = (°C × 1.8) + 32. For example, 20 °C = (20 × 1.8) + 32 = 36 + 32 = 68 °F.'
      },
      {
        question: 'At what temperature are Celsius and Fahrenheit equal?',
        answer: 'At -40 degrees (-40 °C = -40 °F). Both scales intersect at this exact numerical temperature.'
      },
      {
        question: 'What is 37 Celsius in Fahrenheit?',
        answer: '37 °C is normal human body temperature, which converts to exactly 98.6 °F.'
      }
    ]
  },

  // 12. FAHRENHEIT TO CELSIUS
  {
    id: 'fahrenheit-to-celsius',
    slug: 'fahrenheit-to-celsius',
    url: '/fahrenheit-to-celsius',
    categoryId: 'temperature',
    categoryName: 'Temperature',
    fromUnit: { id: 'f', name: 'Fahrenheit', symbol: '°F', pluralName: 'Degrees Fahrenheit' },
    toUnit: { id: 'c', name: 'Celsius', symbol: '°C', pluralName: 'Degrees Celsius' },
    primaryKeyword: 'fahrenheit to celsius',
    secondaryKeywords: [
      'degrees fahrenheit to celsius',
      'f to c',
      'f to celsius',
      'fahrenheit celsius converter',
      'fahrenheit to celsius converter',
      'fahrenheit to celsius formula',
      'convert fahrenheit to celsius'
    ],
    seoTitle: 'Fahrenheit to Celsius Converter — °F to °C',
    metaDescription: 'Convert Fahrenheit to Celsius instantly. Enter a temperature in °F and get the equivalent Celsius temperature with the formula and examples.',
    h1: 'Fahrenheit to Celsius Converter (°F to °C)',
    summary: 'Convert degrees Fahrenheit (°F) to degrees Celsius (°C) quickly. Ideal for weather reports, cooking oven temperatures, and clinical fever readings.',
    formulaDescription: 'To convert Fahrenheit to Celsius, subtract 32 from the Fahrenheit temperature, then multiply the result by 5/9 (or divide by 1.8).',
    formulaMath: '°C = (°F - 32) × 5/9  or  °C = (°F - 32) ÷ 1.8',
    convert: (val) => ((val - 32) * 5) / 9,
    reverseConvert: (val) => (val * 9) / 5 + 32,
    defaultInput: 72,
    unitStep: 1,
    reverseSlug: 'celsius-to-fahrenheit',
    relatedSlugs: ['celsius-to-fahrenheit'],
    tableValues: [0, 32, 50, 68, 72, 85, 98.6, 100, 212, 350],
    examples: [
      {
        inputVal: 32,
        outputVal: '0 °C',
        explanation: '(32 - 32) × 5/9 = 0 °C (Water freezes)'
      },
      {
        inputVal: 72,
        outputVal: '22.2222 °C',
        explanation: '(72 - 32) ÷ 1.8 = 40 ÷ 1.8 = 22.22 °C (Comfortable room temp)'
      },
      {
        inputVal: 212,
        outputVal: '100 °C',
        explanation: '(212 - 32) × 5/9 = 180 × 5/9 = 100 °C (Water boils)'
      }
    ],
    faqs: [
      {
        question: 'How do you convert Fahrenheit to Celsius quickly in your head?',
        answer: 'Subtract 30 and divide by 2. For instance: 80 °F - 30 = 50; 50 / 2 = 25 °C (exact is 26.67 °C). This gives a very close everyday estimate.'
      },
      {
        question: 'What is 98.6 Fahrenheit in Celsius?',
        answer: '98.6 °F is exactly 37.0 °C, the standard baseline for average human body temperature.'
      },
      {
        question: 'What is 350 Fahrenheit in Celsius for baking?',
        answer: '350 °F is approximately 177 °C (commonly rounded to 175 °C or 180 °C in international ovens).'
      }
    ]
  },

  // 13. MINUTES TO HOURS
  {
    id: 'minutes-to-hours',
    slug: 'minutes-to-hours',
    url: '/minutes-to-hours',
    categoryId: 'time',
    categoryName: 'Time',
    fromUnit: { id: 'min', name: 'Minute', symbol: 'min', pluralName: 'Minutes' },
    toUnit: { id: 'hr', name: 'Hour', symbol: 'hr', pluralName: 'Hours' },
    primaryKeyword: 'minutes to hours',
    secondaryKeywords: [
      'min to hour',
      'min to hours',
      'minutes in hours',
      'convert minutes to hours',
      'minutes to hours converter',
      'minutes to hour converter',
      'convert minutes to hours and minutes'
    ],
    seoTitle: 'Minutes to Hours Converter — min to hours',
    metaDescription: 'Convert minutes to hours quickly and accurately. Enter minutes to see the equivalent time in hours, including decimal hours.',
    h1: 'Minutes to Hours Converter (min to hr)',
    summary: 'Convert minutes (min) to decimal hours (hr). Perfect for payroll tracking, work timesheets, commute times, and flight durations.',
    formulaDescription: 'To convert minutes to hours, divide the total minutes by 60 because there are exactly 60 minutes in one hour.',
    formulaMath: 'Hours (hr) = Minutes (min) ÷ 60',
    convert: (val) => val / 60,
    reverseConvert: (val) => val * 60,
    defaultInput: 90,
    unitStep: 15,
    reverseSlug: 'hours-to-minutes',
    relatedSlugs: ['hours-to-minutes', 'seconds-to-minutes', 'minutes-to-seconds'],
    tableValues: [15, 30, 45, 60, 90, 120, 150, 180, 240, 480],
    examples: [
      {
        inputVal: 30,
        outputVal: '0.5 hr',
        explanation: '30 min ÷ 60 = 0.5 hours (half an hour)'
      },
      {
        inputVal: 90,
        outputVal: '1.5 hr',
        explanation: '90 min ÷ 60 = 1.5 hours (1 hour and 30 minutes)'
      },
      {
        inputVal: 480,
        outputVal: '8 hr',
        explanation: '480 min ÷ 60 = 8.0 hours (full standard workday)'
      }
    ],
    faqs: [
      {
        question: 'How do I convert minutes to decimal hours for payroll?',
        answer: 'Divide the number of minutes worked by 60. For example: 45 minutes = 45 / 60 = 0.75 hours. 7 hours and 45 minutes is recorded as 7.75 hours.'
      },
      {
        question: 'How many hours is 120 minutes?',
        answer: '120 minutes is exactly 2 hours (120 / 60 = 2).'
      },
      {
        question: 'What is 15 minutes as a fraction of an hour?',
        answer: '15 minutes is 0.25 hours (or a quarter of an hour).'
      }
    ]
  },

  // 14. HOURS TO MINUTES
  {
    id: 'hours-to-minutes',
    slug: 'hours-to-minutes',
    url: '/hours-to-minutes',
    categoryId: 'time',
    categoryName: 'Time',
    fromUnit: { id: 'hr', name: 'Hour', symbol: 'hr', pluralName: 'Hours' },
    toUnit: { id: 'min', name: 'Minute', symbol: 'min', pluralName: 'Minutes' },
    primaryKeyword: 'hours to minutes',
    secondaryKeywords: [
      'hour to min',
      'hour to minute',
      'hour to minutes',
      'hrs to min',
      'hours to minutes calculator',
      'how many minutes in an hour',
      'convert hours to minutes',
      'hour to minute converter'
    ],
    seoTitle: 'Hours to Minutes Converter — hr to min',
    metaDescription: 'Convert hours to minutes quickly and accurately. Enter a time in hours to see the equivalent number of minutes.',
    h1: 'Hours to Minutes Converter (hr to min)',
    summary: 'Convert hours (hr) to minutes (min). Great for converting decimal timesheet hours back to minutes, scheduling media programs, and event planning.',
    formulaDescription: 'To convert hours to minutes, multiply the number of hours by 60.',
    formulaMath: 'Minutes (min) = Hours (hr) × 60',
    convert: (val) => val * 60,
    reverseConvert: (val) => val / 60,
    defaultInput: 2.5,
    unitStep: 0.5,
    reverseSlug: 'minutes-to-hours',
    relatedSlugs: ['minutes-to-hours', 'minutes-to-seconds', 'seconds-to-minutes'],
    tableValues: [0.25, 0.5, 1, 1.5, 2, 3, 5, 8, 12, 24],
    examples: [
      {
        inputVal: 1,
        outputVal: '60 min',
        explanation: '1 hr × 60 = 60 minutes'
      },
      {
        inputVal: 2.5,
        outputVal: '150 min',
        explanation: '2.5 hr × 60 = 150 minutes'
      },
      {
        inputVal: 24,
        outputVal: '1,440 min',
        explanation: '24 hr (1 full day) × 60 = 1,440 minutes'
      }
    ],
    faqs: [
      {
        question: 'How many minutes are in 1 hour?',
        answer: 'There are exactly 60 minutes in 1 hour.'
      },
      {
        question: 'What is 1.75 hours in minutes?',
        answer: '1.75 hours × 60 = 105 minutes (1 hour and 45 minutes).'
      },
      {
        question: 'How many minutes in a full 24-hour day?',
        answer: '24 hours × 60 = 1,440 minutes.'
      }
    ]
  },

  // 15. SECONDS TO MINUTES
  {
    id: 'seconds-to-minutes',
    slug: 'seconds-to-minutes',
    url: '/seconds-to-minutes',
    categoryId: 'time',
    categoryName: 'Time',
    fromUnit: { id: 'sec', name: 'Second', symbol: 'sec', pluralName: 'Seconds' },
    toUnit: { id: 'min', name: 'Minute', symbol: 'min', pluralName: 'Minutes' },
    primaryKeyword: 'seconds to minutes',
    secondaryKeywords: [
      'sec to min',
      'secs to mins',
      'seconds in a minute',
      'how many seconds in a minute',
      'convert seconds to minutes',
      'seconds into minutes',
      'seconds to min calculator',
      'seconds to minutes formula',
      'seconds to minutes converter'
    ],
    seoTitle: 'Seconds to Minutes Converter — sec to min',
    metaDescription: 'Convert seconds to minutes quickly and accurately. Enter seconds to get the equivalent time in minutes and decimal minutes.',
    h1: 'Seconds to Minutes Converter (sec to min)',
    summary: 'Convert seconds (sec) to minutes (min). Useful for stopwatch laps, video durations, audio track lengths, and science experiments.',
    formulaDescription: 'To convert seconds to minutes, divide the total number of seconds by 60.',
    formulaMath: 'Minutes (min) = Seconds (sec) ÷ 60',
    convert: (val) => val / 60,
    reverseConvert: (val) => val * 60,
    defaultInput: 180,
    unitStep: 10,
    reverseSlug: 'minutes-to-seconds',
    relatedSlugs: ['minutes-to-seconds', 'minutes-to-hours', 'hours-to-minutes'],
    tableValues: [15, 30, 45, 60, 90, 120, 180, 300, 600, 3600],
    examples: [
      {
        inputVal: 60,
        outputVal: '1 min',
        explanation: '60 sec ÷ 60 = 1 minute'
      },
      {
        inputVal: 180,
        outputVal: '3 min',
        explanation: '180 sec ÷ 60 = 3 minutes'
      },
      {
        inputVal: 3600,
        outputVal: '60 min',
        explanation: '3,600 sec ÷ 60 = 60 minutes (1 hour)'
      }
    ],
    faqs: [
      {
        question: 'How many seconds are in a minute?',
        answer: 'There are exactly 60 seconds in one minute.'
      },
      {
        question: 'What is 90 seconds in minutes?',
        answer: '90 seconds ÷ 60 = 1.5 minutes (1 minute and 30 seconds).'
      },
      {
        question: 'How do you convert remaining seconds into mm:ss format?',
        answer: 'Divide seconds by 60 for the whole minutes, and take the remainder for seconds. For example, 145 seconds = 2 minutes (120s) and 25 seconds (2:25).'
      }
    ]
  },

  // 16. MINUTES TO SECONDS
  {
    id: 'minutes-to-seconds',
    slug: 'minutes-to-seconds',
    url: '/minutes-to-seconds',
    categoryId: 'time',
    categoryName: 'Time',
    fromUnit: { id: 'min', name: 'Minute', symbol: 'min', pluralName: 'Minutes' },
    toUnit: { id: 'sec', name: 'Second', symbol: 'sec', pluralName: 'Seconds' },
    primaryKeyword: 'minutes to seconds',
    secondaryKeywords: [
      'minute to sec',
      'min to sec',
      'minutes in seconds',
      'minutes into seconds',
      'how many seconds are in a minute',
      'convert minutes to seconds',
      'minutes to seconds calculator',
      'minutes to seconds converter',
      '5 minutes to seconds'
    ],
    seoTitle: 'Minutes to Seconds Converter — min to sec',
    metaDescription: 'Convert minutes to seconds quickly and accurately. Enter minutes to see the exact equivalent number of seconds.',
    h1: 'Minutes to Seconds Converter (min to sec)',
    summary: 'Convert minutes (min) to seconds (sec). Perfect for countdown timers, cooking intervals, presentation timing, and workout timers.',
    formulaDescription: 'To convert minutes to seconds, multiply the number of minutes by 60.',
    formulaMath: 'Seconds (sec) = Minutes (min) × 60',
    convert: (val) => val * 60,
    reverseConvert: (val) => val / 60,
    defaultInput: 5,
    unitStep: 1,
    reverseSlug: 'seconds-to-minutes',
    relatedSlugs: ['seconds-to-minutes', 'minutes-to-hours', 'hours-to-minutes'],
    tableValues: [0.5, 1, 2, 3, 5, 10, 15, 20, 30, 60],
    examples: [
      {
        inputVal: 1,
        outputVal: '60 sec',
        explanation: '1 min × 60 = 60 seconds'
      },
      {
        inputVal: 5,
        outputVal: '300 sec',
        explanation: '5 min × 60 = 300 seconds'
      },
      {
        inputVal: 10,
        outputVal: '600 sec',
        explanation: '10 min × 60 = 600 seconds'
      }
    ],
    faqs: [
      {
        question: 'How many seconds are in 5 minutes?',
        answer: '5 minutes × 60 = 300 seconds.'
      },
      {
        question: 'How do you convert decimal minutes (e.g. 2.5 min) to seconds?',
        answer: 'Multiply the decimal number by 60. For example: 2.5 × 60 = 150 seconds.'
      },
      {
        question: 'How many seconds in half a minute?',
        answer: '0.5 minutes × 60 = 30 seconds.'
      }
    ]
  },

  // 17. LITERS TO GALLONS
  {
    id: 'liters-to-gallons',
    slug: 'liters-to-gallons',
    url: '/liters-to-gallons',
    categoryId: 'volume',
    categoryName: 'Volume',
    fromUnit: { id: 'l', name: 'Liter', symbol: 'L', pluralName: 'Liters' },
    toUnit: { id: 'gal', name: 'Gallon', symbol: 'gal', pluralName: 'Gallons' },
    variants: [
      {
        id: 'us',
        label: 'US Liquid Gallon',
        ratioToDefault: 1,
        description: '1 US liquid gallon = 3.785411784 L (Standard in United States)'
      },
      {
        id: 'imperial',
        label: 'Imperial Gallon (UK)',
        ratioToDefault: 4.54609 / 3.785411784,
        description: '1 Imperial gallon = 4.54609 L (Standard in UK, Canada, Australia)'
      }
    ],
    primaryKeyword: 'liters to gallons',
    secondaryKeywords: [
      'l to gal',
      'l to gallon',
      'liter to gallon',
      'liter to gallons',
      'litres to gallons',
      'lt to gal',
      'ltr to gal',
      'liter to gal',
      'liters to gallons conversion'
    ],
    seoTitle: 'Liters to Gallons Converter — L to gal',
    metaDescription: 'Convert liters to US or Imperial gallons accurately. Choose the gallon type and get the result instantly.',
    h1: 'Liters to Gallons Converter (L to gal)',
    summary: 'Convert liters (L) to gallons (gal). Fully supports both US liquid gallons and Imperial (UK) gallons with precision formulas.',
    formulaDescription: 'For US Liquid Gallons: divide liters by 3.785411784 (or multiply by 0.264172). For Imperial (UK) Gallons: divide liters by 4.54609 (or multiply by 0.219969). The US and Imperial gallons differ by over 20%.',
    formulaMath: 'US Gallons = Liters ÷ 3.785412  |  Imperial Gallons = Liters ÷ 4.54609',
    convert: (val, variantId = 'us') => {
      if (variantId === 'imperial') {
        return val / 4.54609;
      }
      return val / 3.785411784;
    },
    reverseConvert: (val, variantId = 'us') => {
      if (variantId === 'imperial') {
        return val * 4.54609;
      }
      return val * 3.785411784;
    },
    defaultInput: 20,
    unitStep: 5,
    reverseSlug: 'gallons-to-liters',
    relatedSlugs: ['gallons-to-liters'],
    tableValues: [1, 2, 5, 10, 20, 40, 50, 60, 75, 100],
    examples: [
      {
        inputVal: 3.7854,
        outputVal: '1.0000 US gal',
        explanation: '3.7854 liters ÷ 3.7854 = exactly 1 US gallon'
      },
      {
        inputVal: 20,
        outputVal: '5.2834 US gal',
        explanation: '20 L ÷ 3.78541 = 5.2834 US gallons (or 4.3994 Imperial gallons)'
      },
      {
        inputVal: 50,
        outputVal: '13.2086 US gal',
        explanation: '50 L (car fuel tank) ÷ 3.78541 = 13.21 US gallons'
      }
    ],
    faqs: [
      {
        question: 'What is the difference between a US gallon and an Imperial gallon?',
        answer: 'A US liquid gallon is defined as 231 cubic inches, equal to approximately 3.7854 liters. An Imperial gallon (used in the UK and commonwealth nations) is defined as 4.54609 liters. An Imperial gallon is about 20% larger than a US gallon.'
      },
      {
        question: 'How many gallons is 1 liter?',
        answer: '1 liter equals approximately 0.264172 US liquid gallons, or 0.219969 Imperial gallons.'
      },
      {
        question: 'How many liters in a typical car tank?',
        answer: 'Most compact and midsize cars hold 45 to 60 liters of fuel, which equals roughly 12 to 16 US gallons.'
      }
    ]
  },

  // 18. GALLONS TO LITERS
  {
    id: 'gallons-to-liters',
    slug: 'gallons-to-liters',
    url: '/gallons-to-liters',
    categoryId: 'volume',
    categoryName: 'Volume',
    fromUnit: { id: 'gal', name: 'Gallon', symbol: 'gal', pluralName: 'Gallons' },
    toUnit: { id: 'l', name: 'Liter', symbol: 'L', pluralName: 'Liters' },
    variants: [
      {
        id: 'us',
        label: 'US Liquid Gallon',
        ratioToDefault: 1,
        description: '1 US liquid gallon = 3.785411784 L'
      },
      {
        id: 'imperial',
        label: 'Imperial Gallon (UK)',
        ratioToDefault: 4.54609 / 3.785411784,
        description: '1 Imperial gallon = 4.54609 L'
      }
    ],
    primaryKeyword: 'gallons to liters',
    secondaryKeywords: [
      'gal to l',
      'gal to liter',
      'gal to lt',
      'gal to ltr',
      'gallon liter',
      'gallon to liter',
      '1 gallon to liter',
      '1 US gallon to liter',
      'gallons to litres',
      'gallons to liters calculator'
    ],
    seoTitle: 'Gallons to Liters Converter — gal to L',
    metaDescription: 'Convert US or Imperial gallons to liters accurately. Select the gallon type and calculate the equivalent volume instantly.',
    h1: 'Gallons to Liters Converter (gal to L)',
    summary: 'Convert gallons (gal) to liters (L) with the click of a button. Choose between US liquid gallons and British Imperial gallons for exact conversion.',
    formulaDescription: 'To convert US gallons to liters, multiply by 3.785411784. To convert Imperial (UK) gallons to liters, multiply by 4.54609.',
    formulaMath: 'Liters = US Gallons × 3.785412  |  Liters = Imperial Gallons × 4.54609',
    convert: (val, variantId = 'us') => {
      if (variantId === 'imperial') {
        return val * 4.54609;
      }
      return val * 3.785411784;
    },
    reverseConvert: (val, variantId = 'us') => {
      if (variantId === 'imperial') {
        return val / 4.54609;
      }
      return val / 3.785411784;
    },
    defaultInput: 5,
    unitStep: 1,
    reverseSlug: 'liters-to-gallons',
    relatedSlugs: ['liters-to-gallons'],
    tableValues: [1, 2, 3, 5, 10, 15, 20, 25, 50, 100],
    examples: [
      {
        inputVal: 1,
        outputVal: '3.7854 L',
        explanation: '1 US gallon × 3.78541 = 3.7854 liters (or 4.5461 L for Imperial)'
      },
      {
        inputVal: 5,
        outputVal: '18.9271 L',
        explanation: '5 US gallons (standard water jug) × 3.78541 = 18.93 liters'
      },
      {
        inputVal: 15,
        outputVal: '56.7812 L',
        explanation: '15 US gallons × 3.78541 = 56.78 liters'
      }
    ],
    faqs: [
      {
        question: 'How many liters are in 1 US gallon?',
        answer: '1 US liquid gallon contains exactly 3.785411784 liters.'
      },
      {
        question: 'How many liters are in 1 UK Imperial gallon?',
        answer: '1 Imperial gallon contains exactly 4.54609 liters.'
      },
      {
        question: 'What is 5 gallons in liters?',
        answer: '5 US gallons equals approximately 18.93 liters (5 × 3.7854). 5 Imperial gallons equals 22.73 liters.'
      }
    ]
  }
];

export const CATEGORIES = [
  {
    id: 'weight',
    name: 'Weight Converters',
    description: 'Convert between kilograms, pounds, ounces, and grams with precise decimal accuracy.',
    icon: 'Scale',
    converters: ['kilograms-to-pounds', 'pounds-to-kilograms', 'ounces-to-grams', 'grams-to-ounces']
  },
  {
    id: 'length',
    name: 'Length Converters',
    description: 'Convert centimeters to inches, feet to meters, and meters to kilometers seamlessly.',
    icon: 'Ruler',
    converters: ['centimeters-to-inches', 'inches-to-centimeters', 'feet-to-meters', 'meters-to-feet', 'meters-to-kilometers', 'kilometers-to-meters']
  },
  {
    id: 'temperature',
    name: 'Temperature Converters',
    description: 'Convert between Celsius (°C) and Fahrenheit (°F) with exact scientific thermodynamic formulas.',
    icon: 'Thermometer',
    converters: ['celsius-to-fahrenheit', 'fahrenheit-to-celsius']
  },
  {
    id: 'time',
    name: 'Time Converters',
    description: 'Convert between minutes, hours, and seconds for timesheets, video logs, and schedules.',
    icon: 'Clock',
    converters: ['minutes-to-hours', 'hours-to-minutes', 'seconds-to-minutes', 'minutes-to-seconds']
  },
  {
    id: 'volume',
    name: 'Volume Converters',
    description: 'Convert between liters and gallons with explicit support for both US and Imperial gallons.',
    icon: 'Droplet',
    converters: ['liters-to-gallons', 'gallons-to-liters']
  },
  {
    id: 'currency',
    name: 'Currency Converter',
    description: 'Convert between major world currencies including USD, EUR, GBP, CAD, AUD, JPY, CHF, CNY, INR, AED, SAR, and DJF with live exchange rates.',
    icon: 'Coins',
    converters: ['currency-converter']
  }
];

export const POPULAR_CONVERTERS = [
  'kilograms-to-pounds',
  'pounds-to-kilograms',
  'centimeters-to-inches',
  'feet-to-meters',
  'celsius-to-fahrenheit',
  'liters-to-gallons',
  'currency-converter',
  'minutes-to-hours'
];

export function getConverterBySlug(slug: string): ConverterConfig | undefined {
  // Strip slashes
  const cleanSlug = slug.replace(/^\/+|\/+$/g, '');
  return CONVERTERS.find((c) => c.slug === cleanSlug);
}
