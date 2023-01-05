import { ConfigurableModuleBuilder } from '@nestjs/common';

import type { ExtraConfiguration, SesModuleOptions } from './ses.interface';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<SesModuleOptions>()
  .setExtras<ExtraConfiguration>({ isGlobal: false }, (definition, extras) => ({
    ...definition,
    global: extras.isGlobal,
  }))
  .setClassMethodName('forRoot')
  .build();