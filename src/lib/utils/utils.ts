import { EnvironmentVariablesInterface } from '../config/interfaces/interfaces';

export function getEnvVariable(name: keyof EnvironmentVariablesInterface) {
  return process.env[name];
}
