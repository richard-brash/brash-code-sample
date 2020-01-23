import { TemperatureChecker } from "./temperatureCheckerProvider";
import { ConversionPacket } from "../../../models/conversionPacket";

describe("TemperatureCheckerProvider", () => {
  test("Proper Correct Response", () => {

    let packet : ConversionPacket = {
      sourceUnit: "Kelvin",
      sourceValue: 356,
      targetUnit: "Celsius",
      targetValue: 82.9
    };

    let slug = new TemperatureChecker(packet);

    const result = slug.checkConversion();
    expect(result).toEqual({ response: "correct" });
  });

  test("Proper InCorrect Response", () => {

    let packet : ConversionPacket = {
      sourceUnit: "Kelvin",
      sourceValue: 356,
      targetUnit: "Celsius",
      targetValue: 82.8
    };

    let slug = new TemperatureChecker(packet);

    const result = slug.checkConversion();
    expect(result).toEqual({ response: "incorrect" });
  });  
});