// A Class to make it easier to receive a request

export class ConversionPacket {
    sourceUnit!: string;
    sourceValue!: number; 
    targetUnit!: string;
    targetValue!: number;
}


// Constant values and lookups used in the app.

export const TemperatureUnits = ["kelvin","celsius","fahrenheit", "rankine"];

export const VolumeContainerUnits = ["liters","tablespoons","cups", "gallons"];

export const VolumeAreaUnits = ["cubic-inches","cubic-feet"];
