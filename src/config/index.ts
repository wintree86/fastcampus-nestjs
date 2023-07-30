import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

export default () => ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load: [configuration]
});
