import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Response } from 'core';
import { Observable, map } from 'rxjs';

export class ResponseModeler implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const res = ctx.getResponse<any>();
    return next.handle().pipe(
      map((data: Response) => {
        res.status(data.getCode());
        return data.formatResponse();
      }),
    );
  }
}
