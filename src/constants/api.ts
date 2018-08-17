export class ApiConstants {
  public static BASE_URL = process.env.REACT_APP_BASE_URL;
  public static API_VERSION = 1;
  public static API_URL = `${process.env.REACT_APP_API_URL}/v${ApiConstants.API_VERSION}`;
  // Users ${ApiConstants.API_URL}
  public static LOGIN_URL = `http://localhost:4001/api/v1/login`;
  public static SIGNUP_URL = `http://localhost:4001/api/v1/signUp`;
}