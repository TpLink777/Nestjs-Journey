
import { join } from 'path'
import { cwd } from 'process';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static'
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module.js';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(cwd(),  'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule,
  ]
})
export class AppModule { }
