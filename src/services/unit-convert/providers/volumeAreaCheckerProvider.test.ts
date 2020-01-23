import { VolumeAreaChecker } from "./volumeAreaCheckerProvider";
import { ConversionPacket } from "../../../models/conversionPacket";

describe("volumeAreaCheckerProvider", () => {
  test("Proper Correct Response", () => {

    let packet : ConversionPacket = {
      sourceUnit: "cubic-inches",
      sourceValue: 25920,
      targetUnit: "cubic-feet",
      targetValue: 15
    };

    let slug = new VolumeAreaChecker(packet);

    const result = slug.checkConversion();
    expect(result).toEqual({ response: "correct" });
  });

  test("Proper InCorrect Response", () => {

    let packet : ConversionPacket = {
      sourceUnit: "cubic-inches",
      sourceValue: 25920,
      targetUnit: "cubic-feet",
      targetValue: 14
    };

    let slug = new VolumeAreaChecker(packet);

    const result = slug.checkConversion();
    expect(result).toEqual({ response: "incorrect" });
  });  
});