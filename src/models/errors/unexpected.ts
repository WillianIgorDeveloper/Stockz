export class UnexpectedError extends Error {
  public code: string
  constructor(code: string) {
    super("usecase.unexpected")
    this.name = "UnexpectedError"
    this.code = code
  }
}
