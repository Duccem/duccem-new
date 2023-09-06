import { FormatError } from '../../Errors/FormatError';
import { ValueObject } from '../../ValueObject';

export class Enum<T> extends ValueObject<T> {
  constructor(
    value: T,
    public readonly validValues: T[],
  ) {
    super(value);
  }
  public validation(value: T): void {
    if (!this.validValues.includes(value)) {
      throw new FormatError(`<${this.constructor.name}> does not allow the value <${value}>`);
    }
  }

  public getValue(): T {
    return this.value;
  }

  public toString(): string {
    return this.value.toString();
  }
}
