export class UnauthorizedError extends Error {
  constructor() {
    super("usecase.environment")
    this.name = "UnauthorizedError"
  }
}
