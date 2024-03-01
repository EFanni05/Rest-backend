import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientService {
  constructor(private readonly db : PrismaService) {}

  create(createClientDto: CreateClientDto) {
    if(createClientDto.monthyLimit < 50 && createClientDto.monthyLimit > 100){
      throw new UnauthorizedException('Monthly limit mennyisége nem megfelelő!')
    }
    return this.db.client.create({
      data : {
        address : createClientDto.address,
        name : createClientDto.name,
        monthlyLimit : createClientDto.monthyLimit,
        hasCable : createClientDto.hasCable || true
      }
    })
  }

  findAll() {
    return this.db.client.findMany();
  }

  findOne(id: number) {
    return this.db.client.findUnique({
      where : {id}
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    if(updateClientDto.monthyLimit < 50 || updateClientDto.monthyLimit > 100){
      throw new UnauthorizedException('Monthly limit mennyisége nem megfelelő!')
    }
    return this.db.client.update({
      where : {id},
      data : {
        address : updateClientDto.address,
        name : updateClientDto.name,
        monthlyLimit : updateClientDto.monthyLimit,
        hasCable : updateClientDto.hasCable 
      }
    })
  }

  remove(id: number) {
    return this.db.client.delete({
      where : {id}
    });
  }
}
