/*

Interface to which all the checker providers will adhere. It defines the one
method needed to complete the task at hand

*/

import { ConversionPacket } from "../../../models/conversionPacket";
import { ConversionCheckResponse } from "../../../models/conversionCheckResponse";

export interface IConversionChecker {
    checkConversion():ConversionCheckResponse;
}