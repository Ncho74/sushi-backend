import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { cryptoSchema } from './schemas/crypto.shemas';
import { CryptoModule } from './crypto/crypto.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sushi:ILM3LqqeDuwvrmnI@cluster0.yrfncrz.mongodb.net/?retryWrites=true&w=majority'), MongooseModule.forFeature([{ name: 'crypto', schema:cryptoSchema }]), CryptoModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
