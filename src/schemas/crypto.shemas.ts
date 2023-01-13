import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
export type CryptoDocument=Crypto & Document
@Schema()
export class Crypto {
   @Prop()
   nbr: string;
   @Prop()
   type: string;
   @Prop()
   solde: number;
}
export const cryptoSchema = SchemaFactory.createForClass(Crypto);