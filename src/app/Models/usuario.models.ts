
export interface Iusuario {
  id: number;
  userName: string;
  userLastName: string;
  userEmail: string;
  userCity: string;
  userProvince: string;
  userAddress: string;
  inputZip: string;
  userPassword: string;
  role: string;
  createdAt: Date;
  actions: any[]; 
}