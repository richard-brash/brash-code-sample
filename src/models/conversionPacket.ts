export class ConversionPacket {
    sourceUnit!: string;
    sourceValue!: number; 
    targetUnit!: string;
    targetValue!: number;
}

export const TemperatureUnits = ["kelvin","celsius","fahrenheit", "rankine"];

export const VolumeContainerUnits = ["liters","tablespoons","cups", "gallons"];

export const VolumeAreaUnits = ["cubic-inches","cubic-feet"];
