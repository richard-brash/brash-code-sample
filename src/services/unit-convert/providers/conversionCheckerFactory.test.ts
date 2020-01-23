import { ConversionCheckerFactory } from "./conversionCheckerFactory";
import { ConversionPacket } from "../../../models/conversionPacket";
import { IConversionChecker } from "./IConversionChecker";

describe("ConversionCheckerFactory", () => {
  test("Temperature Checker Provider", () => {

    let packet : ConversionPacket = {
      sourceUnit: "Kelvin",
      sourceValue: 356,
      targetUnit: "Celsius",
      targetValue: 82.9
    };

    let checker : IConversionChecker  = ConversionCheckerFactory.getConversionChecker(packet);

    const result = checker.checkConversion();
    expect(result).toEqual({ response: "correct" });
  });

  test("Volume Area Checker Provider", () => {

    let packet : ConversionPacket = {
        sourceUnit: "cubic-inches",
        sourceValue: 25920,
        targetUnit: "cubic-feet",
        targetValue: 15
      };

    let checker : IConversionChecker  = ConversionCheckerFactory.getConversionChecker(packet);

    const result = checker.checkConversion();
    expect(result).toEqual({ response: "correct" });
  });

  test("Volume Container Checker Provider", () => {

    let packet : ConversionPacket = {
        sourceUnit: "liters",
        sourceValue: 3,
        targetUnit: "tablespoons",
        targetValue: 202.9
      };
      
    let checker : IConversionChecker  = ConversionCheckerFactory.getConversionChecker(packet);

    const result = checker.checkConversion();
    expect(result).toEqual({ response: "correct" });
  });

});