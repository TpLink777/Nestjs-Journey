
import { join } from 'path'
import { cwd } from 'process';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static'
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module.js';
import { SeedModule } from './seed/seed.module.js';
import { EnvConfiguration } from './common/config/env.config.js';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ EnvConfiguration ]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(cwd(),  'public'), //! servir contenido estatico
    }),
    MongooseModule.forRoot(process.env.MONGODB!),
    PokemonModule,
    SeedModule,
  ]
})
export class AppModule {}
