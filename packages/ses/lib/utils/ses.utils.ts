import { SESv2Client } from '@aws-sdk/client-sesv2';

import { SESClient } from './ses.interface';
import { OPTIONS_TYPE } from './ses.module-definition';

export const createSesClient = (options: typeof OPTIONS_TYPE): SESClient =>
  new SESv2Client(options);