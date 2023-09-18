import { Entity, Image, Primitives, StringValueObject } from 'core';

export class Master extends Entity {
  public readonly firstName: StringValueObject;
  public readonly lastName: StringValueObject;
  public readonly email: StringValueObject;
  public readonly nickname: StringValueObject;
  public readonly photo: Image;

  constructor(data: Primitives<Master>) {
    super(data);
    this.firstName = new StringValueObject(data.firstName);
    this.lastName = new StringValueObject(data.lastName);
    this.email = new StringValueObject(data.email);
    this.nickname = new StringValueObject(data.nickname);
    this.photo = new Image(data.photo);
  }

  static fromPrimitives(data: Primitives<Master>): Master {
    return new Master(data);
  }

  public toPrimitives(): Primitives<Master> {
    return {
      id: this.id.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      nickname: this.nickname.value,
      photo: this.photo.value,
    };
  }
}
