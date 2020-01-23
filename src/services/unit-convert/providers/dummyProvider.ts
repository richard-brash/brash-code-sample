import { IConversionChecker } from "./IConversionChecker";
import { ConversionPacket } from "../../../models/conversionPacket";
import { ConversionCheckResponse } from "../../../models/conversionCheckResponse";

export class DummyChecker implements IConversionChecker {
  private packet: ConversionPacket;

  constructor(packet: ConversionPacket) {
    this.packet = packet;
  }

  checkConversion(): ConversionCheckResponse {
    let response = new ConversionCheckResponse();
    response.response = "invalid";
    return response;
  }
}
