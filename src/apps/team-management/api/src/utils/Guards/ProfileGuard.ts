import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
//import { AbilityMaker, Profile } from '@ducen/team-management';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // const action = this.reflector.get<string>('action', context.getHandler());
    // const entity = this.reflector.get<string>('entity', context.getClass());
    // if (!entity) {
    //   return true;
    // }
    // const request = context.switchToHttp().getRequest();
    // const user = request.user;

    // const profile = new Profile(user.profile);
    // const ability = this.abilityMaker.build(profile);
    // const allowed = this.abilityMaker.check(ability, action, entity);

    // if (allowed) return true;
    // throw new PermissionsError('Route forbidden');
    return true
  }
}
