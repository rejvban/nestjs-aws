import { Module } from '@nestjs/common';

import { SesService } from './ses.service';

import { ConfigurableModuleClass } from '../utils';


@Module({
  providers: [SesService],
  exports: [SesService],
})
export class SesModule extends ConfigurableModuleClass {}