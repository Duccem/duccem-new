import { Aggregate, Email, Image, Primitives, StringValueObject, Uuid } from 'core';
import jwt from 'jsonwebtoken';
import { MemberAddress } from './MemberAddress';
import { MemberBirthDate } from './MemberBirthDate';
import { MemberConfiguration } from './MemberCofiguration';
import { MemberCreatedDomainEvent } from './MemberCreatedDomainEvent';
import { MemberGender } from './MemberGender';
import { MemberPassword } from './MemberPassword';

export class Member extends Aggregate {
  guildId: Uuid;
  roleId: Uuid;

  nickname: StringValueObject;
  password: MemberPassword;
  birthDate: MemberBirthDate;
  email: Email;
  address: MemberAddress;
  photo: Image;
  firstName: StringValueObject;
  lastName: StringValueObject;
  biography: StringValueObject;
  gender: MemberGender;
  phoneNumber: StringValueObject;
  configuration: MemberConfiguration;

  constructor(data: Primitives<Member>) {
    super(data);
    try {
      this.guildId = data.guildId ? new Uuid(data.guildId) : null;
      this.roleId = data.roleId ? new Uuid(data.roleId) : null;
      this.nickname = new StringValueObject(data.nickname);
      this.password = data.password ? new MemberPassword(data.password) : null;
      this.birthDate = new MemberBirthDate(data.birthDate);
      this.email = new Email(data.email);
      this.address = new MemberAddress(data.address);
      this.photo = new Image(data.photo);
      this.firstName = new StringValueObject(data.firstName);
      this.lastName = new StringValueObject(data.lastName);
      this.biography = new StringValueObject(data.biography);
      this.gender = new MemberGender(data.gender);
      this.phoneNumber = new StringValueObject(data.phoneNumber);
      this.configuration = new MemberConfiguration(data.configuration);
    } catch (error) {
      console.log(data);
      console.log(error);
    }
  }

  static Create(data: Primitives<Member>, guildId?: Uuid): Member {
    const member = new Member(data);
    member.password.encrypt();
    member.guildId = member.guildId ? member.guildId : guildId ? guildId : null;
    if (!data.id) {
      const createdEvent = new MemberCreatedDomainEvent({
        aggregateId: member.id.value,
        params: {
          memberId: member.id.value,
        },
      });
      member.record(createdEvent);
    }
    return member;
  }

  public generateToken(key: string): string {
    const payload = {
      memberId: this.id.value,
      guildId: this.guildId.value,
      roleId: this.roleId?.value,
      nickname: this.nickname.value,
      configuration: this.configuration.toPrimitives(),
    };
    const token = jwt.sign(payload, key, { expiresIn: 60 * 60 * 24 });
    return token;
  }

  public static Authenticate(token: string, key: string): any {
    const payload = jwt.verify(token, key);
    return payload;
  }

  public toPrimitives(): Primitives<Member> {
    return {
      id: this.id.value,
      guildId: this.guildId ? this.guildId.value : null,
      roleId: this.roleId ? this.roleId.value : null,
      nickname: this.nickname.value,
      password: this.password ? this.password.value : null,
      birthDate: this.birthDate.value,
      email: this.email.value,
      address: this.address.toPrimitives(),
      photo: this.photo.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      biography: this.biography.value,
      gender: this.gender.value,
      phoneNumber: this.phoneNumber.value,
      configuration: this.configuration.toPrimitives(),
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
