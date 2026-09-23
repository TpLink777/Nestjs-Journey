
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static'
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path'
import { cwd } from 'process';

import { PokemonModule } from './pokemon/pokemon.module.js';
import { SeedModule } from './seed/seed.module.js';
import { EnvConfiguration } from './common/config/env.config.js';
import { JoiValidationSchema } from './common/config/joi.validation.js';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema
    }),
    MongooseModule.forRoot(process.env.MONGODB!, {
        dbName: 'pokemonsdb'
      }
    ),
    ServeStaticModule.forRoot({
      rootPath: join(cwd(),  'public'), //! servir contenido estatico
    }),
    PokemonModule,
    SeedModule,
  ]
})
export class AppModule {}
