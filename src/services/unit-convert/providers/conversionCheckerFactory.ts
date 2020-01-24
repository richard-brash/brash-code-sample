/*

The logic here is used to determine which of the resident providers will be
instantiated and passed back to the controller for processing.

I separated the logic into different providers to showcase the pattern and 
I did it before I found the convert-units library. By using the convert-units,
this pattern may have been a little overstated but, it still a good idea because
later, when new unit conversions are needed that aren't addressed by the library
or when vastly different logic needs to be used, we can keep those soecifics
in it's own provider. This makes the whole thing easier to test, maintain, 
and expand.

*/


import { ConversionPacket, TemperatureUnits, VolumeAreaUnits, VolumeContainerUnits } from "../../../models/conversionPacket";

import {TemperatureChecker} from "./temperatureCheckerProvider";
import {VolumeAreaChecker} from "./volumeAreaCheckerProvider";
import {VolumeContainerChecker} from "./volumeContainerVolumeProvider";
import { DummyChecker } from "./dummyProvider";
import { IConversionChecker } from "./IConversionChecker";


export class ConversionCheckerFactory {
 
    public static getConversionChecker(packet:ConversionPacket) : IConversionChecker{

        if (TemperatureUnits.includes(packet.sourceUnit.toLowerCase()) && TemperatureUnits.includes(packet.targetUnit.toLowerCase()))
        {
            return new TemperatureChecker(packet);
        }
    
        if (VolumeAreaUnits.includes(packet.sourceUnit.toLowerCase()) && VolumeAreaUnits.includes(packet.targetUnit.toLowerCase()))
        {
            return new VolumeAreaChecker(packet);
        }
    
        if (VolumeContainerUnits.includes(packet.sourceUnit.toLowerCase()) && VolumeContainerUnits.includes(packet.targetUnit.toLowerCase()))
        {
            return new VolumeContainerChecker(packet);
        }
    
        //  Fall Through...  This is an Invalid packet
        return new DummyChecker(packet);
    

    }

}