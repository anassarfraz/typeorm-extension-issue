import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { InternalServerErrorException } from '@nestjs/common';
//entities
import { User } from '../users/entities/user.entity';
//data
import { UsersData } from '../users/seeds/user-data';

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    try {
      //repo's
      const userRepo = dataSource.getRepository(User);

      //seeding users
      await Promise.all(
        UsersData?.map(async (user) => {
          const isExistingUser = await userRepo.findOne({
            where: { email: user.email },
          });
          if (!isExistingUser) {
            const userInstance = userRepo.create(user);
            console.log('userInstance', userInstance);
            const createdUser = await userRepo.save(userInstance);
            console.log('createdUser', createdUser);

            return createdUser;
          }
          return isExistingUser;
        }),
      );

      console.log(
        '>>>>>>>>>>>>>>>>USERS CREATED SUCCESSFULLY>>>>>>>>>>>>>>>>>>',
      );
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException(error);
    }
  }
}
