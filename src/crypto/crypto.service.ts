import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CryptoDocument } from 'src/schemas/crypto.shemas';
import { CreateCryptoDto } from './dto/create-crypto.dto';
import { UpdateCryptoDto } from './dto/update-crypto.dto';
import { Crypto } from 'src/schemas/crypto.shemas';

@Injectable()
export class CryptoService {
  constructor(@InjectModel(Crypto.name) private readonly model:Model<CryptoDocument>){}
 async create(createCryptoDto: CreateCryptoDto):Promise<Crypto> {
    return await new  this.model({...createCryptoDto}).save() ;
  }

 async findAll():Promise<Crypto[]>  {
    return  await this.model.find().exec();
  }

  async findOne(id:any):Promise<Crypto> {
    return  await this.model.findOne(id).exec();
  }

  async update(id: string, updateCryptoDto: UpdateCryptoDto):Promise<Crypto>  {
    return   await this.model.findByIdAndUpdate(id,updateCryptoDto).exec()
  }

  async remove(id:string):Promise<Crypto> {
    return  await this.model.findByIdAndDelete(id)
  }
}
