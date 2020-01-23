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
            console.log("TemperatureChecker");
            return new TemperatureChecker(packet);
        }
    
        if (VolumeAreaUnits.includes(packet.sourceUnit.toLowerCase()) && VolumeAreaUnits.includes(packet.targetUnit.toLowerCase()))
        {
            console.log("VolumeAreaChecker");
            return new VolumeAreaChecker(packet);
        }
    
        if (VolumeContainerUnits.includes(packet.sourceUnit.toLowerCase()) && VolumeContainerUnits.includes(packet.targetUnit.toLowerCase()))
        {
            console.log("VolumeContainerChecker");
            return new VolumeContainerChecker(packet);
        }
    
        //  Fall Through else...  This is an Invalid packet
        console.log("DummyChecker");
        return new DummyChecker(packet);
    

    }

}