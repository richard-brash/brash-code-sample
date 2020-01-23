import * as Provider from "./dummyProvider";
import { DummyChecker } from "./dummyProvider";
import { ConversionPacket } from "../../../models/conversionPacket";

describe("DummyProvider", () => {
  test("Proper Dummy Response", () => {

    //  It doesn't matter what we send in here because it is always invalid
    let packet : ConversionPacket = {
      sourceUnit: "Kelvin",
      sourceValue: 1234,
      targetUnit: "Celsius",
      targetValue: 7654
    }

    let slug = new DummyChecker(packet);

    const result = slug.checkConversion();
    expect(result).toEqual({ response: "invalid" });
  });
});