/**
 * The user interface.
 */
export interface IUser {
  id: number | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  phone: string | null;
  email: string | null;
  access_token: string | number;
}
