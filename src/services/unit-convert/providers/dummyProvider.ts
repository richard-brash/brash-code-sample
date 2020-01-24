/*

Didn't need this provider because I could have just as easily added the 
invalid response to the factory but...  why would you want to mix the 
responsibilities of the factory with that of the provider the factory is
there to make.  

This is an example of separating concerns so that each
thing does what it does without doing too much. This strategy is useful
when it comes to testing and it helps when working on larger teams so team
members don't step on each other in source control.

*/

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
