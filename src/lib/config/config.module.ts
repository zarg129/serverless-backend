import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: '.env',
      // cache: true,
    }),
  ],
})
export class ConfigModule {}
