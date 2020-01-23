import { ConversionPacket } from "../../../models/conversionPacket";
import { ConversionCheckResponse } from "../../../models/conversionCheckResponse";

export interface IConversionChecker {
    checkConversion():ConversionCheckResponse;
}