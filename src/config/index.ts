import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

console.log(process.env.NODE_ENV)
export default () => ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load: [configuration]
});
