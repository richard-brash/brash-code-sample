
/*

When a request is routed to this controller, we examine the POSTed request body using 
the factory to determine which ConversionChecker we are going to use to
fulfill the request.

*/

import { ConversionCheckerFactory } from "./providers/conversionCheckerFactory";
import {ConversionPacket} from "../../models/conversionPacket";
import { IConversionChecker } from "./providers/IConversionChecker";

export const checkConvertedValue = (packet: ConversionPacket) => {
  
  let checker : IConversionChecker  = ConversionCheckerFactory.getConversionChecker(packet);
  return checker.checkConversion();
};