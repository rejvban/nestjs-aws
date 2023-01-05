import type { SESv2Client, SESv2ClientConfig } from '@aws-sdk/client-sesv2';

export type SESClient = SESv2Client;

export interface ExtraConfiguration {
  isGlobal?: boolean;
}
export interface SesModuleOptions extends ExtraConfiguration {
  accountSid: string | undefined;
  authToken: string | undefined;
  options?: SESv2ClientConfig | undefined;
}