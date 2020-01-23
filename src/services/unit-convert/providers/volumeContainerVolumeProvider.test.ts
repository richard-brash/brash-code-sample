
import { VolumeContainerChecker } from "./volumeContainerVolumeProvider";
import { ConversionPacket } from "../../../models/conversionPacket";

describe("volumeContainerVolumeProvider", () => {
    
    test("Proper Correct Response", () => {

    let packet : ConversionPacket = {
      sourceUnit: "liters",
      sourceValue: 3,
      targetUnit: "tablespoons",
      targetValue: 202.9
    };

    let slug = new VolumeContainerChecker(packet);

    const result = slug.checkConversion();
    expect(result).toEqual({ response: "correct" });
  });

  test("Proper InCorrect Response", () => {

    let packet : ConversionPacket = {
        sourceUnit: "liters",
        sourceValue: 3,
        targetUnit: "tablespoons",
        targetValue: 202.8
  
      };
  

    let slug = new VolumeContainerChecker(packet);

    const result = slug.checkConversion();
    expect(result).toEqual({ response: "incorrect" });
  });  
});