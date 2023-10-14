import {SecretsManagerClient, GetSecretValueCommand} from '@aws-sdk/client-secrets-manager'

export let appConfig: EnvVariablesConfig = process.env as EnvVariablesConfig

type EnvVariablesConfig = {
  NODE_ENV: 'development' | 'production' | 'test'
  APP_NAME: 'bdt-remix'
  BDT_LAUNCH_DARKLY_API_KEY_PROD?: string
  BDT_LAUNCH_DARKLY_API_KEY_TEST?: string
  CI?: string
}

const client = new SecretsManagerClient({
  region: 'us-east-1',
})

async function initSecrets() {
  const secretsResponse = await client.send(
    new GetSecretValueCommand({
      SecretId: `bdt-remix-test`,
    }),
  )

  Object.assign(appConfig, JSON.parse(secretsResponse.SecretString ?? '{}'))
}

export const initAppConfig = async (): Promise<void> => {
  await initSecrets()
}
