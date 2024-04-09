





# Commands related project

## Project Startup commands
```bash
# Start Project
$ npm run start 

# Start Project in watch mode
$ npm run start:dev 

# Start Project in watch & debug mode
$ npm run start:debug 

# Start Project for producation
$ npm run start:prod
 
```





## Commands for migrations and seeders

### Migrations command
```bash
# For migration generate
$ NAME=name_of_migration npm run typeorm:generate
# For migration creation
$ NAME=name_of_migration npm run typeorm:create
# For migration run
$ npm run typeorm:migrate
# For migration revert
$ npm run typeorm:revert 
```
### Seeder command
```bash
# For create Seeder 
$ NAME=[name_of_seeder] npm run seed:create
# For All seeder run
$ npm run seed:run

# work later on below
# # For specific seeder run
# $ yarn seed:specific [Name]
# "seed:specific": "ts-node ./node_modules/typeorm-extension/bin/cli.cjs seed:run --dataSource typeorm-data-source.ts --name src/seeders/user.seeder.ts"
```

## ESLint & Prettier
```bash
# For Check ESlint Issues & Errors
$ npm run lint 

# For fix Check ESlint Issues & Errors
$ npm run lint:fix

# For format code according to Prettier
$ npm run format

```