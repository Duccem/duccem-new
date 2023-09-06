export abstract class Error {
  protected readonly message: string;
  protected readonly code: number;
  protected readonly timestamp: string;
  constructor(message: string, code: number) {
    this.message = message;
    this.code = code;
    this.timestamp = new Date().toISOString();
  }
  public getCode(): number {
    return this.code;
  }

  public getMessage(): string {
    return this.message;
  }
}
