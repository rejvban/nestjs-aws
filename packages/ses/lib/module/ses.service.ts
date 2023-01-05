import { Inject, Injectable } from '@nestjs/common';

import { createSesClient, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE } from '../utils';

import type { SESClient } from '../utils';

@Injectable()
export class SesService {
  public readonly client: SESClient;

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: typeof OPTIONS_TYPE
  ) {
    this.client = createSesClient(this.options);
  }
}