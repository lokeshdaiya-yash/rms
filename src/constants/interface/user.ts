export interface getColomnForUserRoleProps {
  updateUserRoleById(row: any): void;
  changeHandler(e: React.FormEvent<HTMLInputElement>, index: number): void;
  styles: any;
  data?: any;
}
