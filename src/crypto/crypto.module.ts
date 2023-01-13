import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CryptoController } from './crypto.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { cryptoSchema } from 'src/schemas/crypto.shemas';
import { Crypto } from 'src/schemas/crypto.shemas';

@Module({
  imports:[MongooseModule.forFeature([{name:Crypto.name,schema: cryptoSchema}])],
  controllers: [CryptoController],
  providers: [CryptoService],
  exports:[CryptoModule,CryptoService]
})
export class CryptoModule {}
