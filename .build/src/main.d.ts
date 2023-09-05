import { Handler } from 'aws-lambda';
import { ValidationPipe } from '@nestjs/common';
export declare const handler: Handler;
export declare function getValidationPipe(): ValidationPipe;
