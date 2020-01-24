import { IConversionChecker } from "./IConversionChecker";
import { ConversionPacket } from "../../../models/conversionPacket";
import { ConversionCheckResponse } from "../../../models/conversionCheckResponse";
import { HTTP400Error } from "../../../utils/httpErrors";

var convert = require("convert-units");

export class VolumeContainerChecker implements IConversionChecker {
  private packet: ConversionPacket;

  constructor(packet: ConversionPacket) {
    this.packet = packet;
  }

  checkConversion(): ConversionCheckResponse {
    let response = new ConversionCheckResponse();
    let source = this.getConverterFlag(this.packet.sourceUnit.toLowerCase());
    let target = this.getConverterFlag(this.packet.targetUnit.toLowerCase());

    let testValue = convert(this.packet.sourceValue)
      .from(source)
      .to(target);

    if (
      Math.round(10 * testValue) / 10 ==
      Math.round(10 * this.packet.targetValue) / 10
    ) {
      response.response = "correct";
    } else {
      response.response = "incorrect";
    }

    return response;
  }

  private getConverterFlag(unit: string) {
    let flag = "";

    switch (unit) {
      case "liters":
        flag = "l";
        break;
      case "tablespoons":
        flag = "Tbs";
        break;
      case "cups":
        flag = "cup";
        break;
      case "gallons":
        flag = "gal";
        break;
      default:
        throw new HTTP400Error("Area Unit not found: " + unit);
    }

    return flag;
  }
}
