class AppError extends Error {
  statusCode;
  isOperational;
  code;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    //For Prisma Error
    this.code = 0;

    //
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
