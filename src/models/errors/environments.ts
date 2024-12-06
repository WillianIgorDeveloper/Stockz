export class EnvironmentError extends Error {
  constructor() {
    super("usecase.environment")
    this.name = "EnvironmentError"
  }
}
