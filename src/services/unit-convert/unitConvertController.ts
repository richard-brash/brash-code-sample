
import { ConversionCheckerFactory } from "./providers/conversionCheckerFactory";
import {ConversionPacket} from "../../models/conversionPacket";
import { IConversionChecker } from "./providers/IConversionChecker";

export const checkConvertedValue = (packet: ConversionPacket) => {
  
  let checker : IConversionChecker  = ConversionCheckerFactory.getConversionChecker(packet);
  return checker.checkConversion();
};