import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
//entities
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [],
  exports: [],
})
export class UserModule {}
