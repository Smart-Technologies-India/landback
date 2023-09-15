import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UploaderModule } from './uploader/uploader.module';
import { QueryModule } from './query/query.module';
import { CommonModule } from './common/common.module';
import { VillageModule } from './village/village.module';
import { NaModule } from './na/na.module';
import { SurveyModule } from './survey/survey.module';
import { SaleModule } from './salepermission/salepermission.module';
import { GiftModule } from './giftpermission/giftpermission.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    AuthModule,
    UserModule,
    VillageModule,
    UploaderModule,
    QueryModule,
    CommonModule,
    SurveyModule,
    NaModule,
    SaleModule,
    GiftModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
