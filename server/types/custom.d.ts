declare global {
  declare module "express-session" {
    interface SessionData {
      userId?: string;
    }
  }
  declare module "express" {
    interface Request {
      isUserLogined?: boolean;
      isUserExist?: boolean;
    }
  }
}
