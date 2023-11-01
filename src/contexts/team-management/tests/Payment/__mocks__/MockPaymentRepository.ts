import { Uuid } from "core";
import { Payment } from "../../../src/Payment/domain/Payment";
import { PaymentClientRepository, PaymentRepository } from "../../../src/Payment/domain/PaymentRepository";

export class MockPaymentRepository implements PaymentRepository, PaymentClientRepository {

  saveMock = jest.fn();
  findBySessionIdMock = jest.fn();
  findLastPaymentPendingByGuildIdMock = jest.fn();
  createSessionMock = jest.fn();
  getLastSessionMock = jest.fn();
  async save(payment: Payment): Promise<void> {
    this.saveMock(payment);
  }
  async findBySessionId(sessionId: string): Promise<Payment> {
    return this.findBySessionIdMock(sessionId);
  }
  async findLastPaymentPendingByGuildId(guildId: string): Promise<Payment> {
    return this.findLastPaymentPendingByGuildIdMock(guildId);
  }

  assertSaveIsCalledWith() {
    expect(this.saveMock).toHaveBeenCalled();
  }

  assertFindBySessionIdIsCalledWith(sessionId: string) {
    expect(this.findBySessionIdMock).toHaveBeenCalledWith(sessionId);
  }

  assertFindLastPaymentPendingByGuildIdIsCalledWith(guildId: string) {
    expect(this.findLastPaymentPendingByGuildIdMock).toHaveBeenCalledWith(
      guildId
    );
  }

  returnFindBySessionId(payment: Payment) {
    this.findBySessionIdMock.mockReturnValue(payment);
  }

  returnFindLastPaymentPendingByGuildId(payment: Payment) {
    this.findLastPaymentPendingByGuildIdMock.mockReturnValue(payment);
  }

  async createSession(guildId: Uuid, period: string): Promise<void> {
    this.createSessionMock(guildId, period);
  }
  async getLastSession(guildId: Uuid): Promise<Payment> {
    return this.getLastSessionMock(guildId);
  }

  assertCreateSessionIsCalledWith(guildId: Uuid, period: string) {
    expect(this.createSessionMock).toHaveBeenCalledWith(guildId, period);
  }

  assertGetLastSessionIsCalledWith(guildId: Uuid) {
    expect(this.getLastSessionMock).toHaveBeenCalledWith(guildId);
  }

  returnGetLastSession(payment: Payment) {
    this.getLastSessionMock.mockReturnValue(payment);
  }
}
