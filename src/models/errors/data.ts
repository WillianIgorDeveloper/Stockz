export class DataError extends Error {
  constructor(message?: string) {
    super(message ?? "usecase.bad-request")
    this.name = "DataError"
  }
}
