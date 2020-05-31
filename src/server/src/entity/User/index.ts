import bcrypt from 'bcrypt';

export type Role = 'member' | 'admin';

export class User {
  public id!: number;
  public lastName!: string;
  public firstName!: string;
  public email!: string;
  public password!: string;
  public role?: Role;

  public readonly username!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async validatePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}

export const generatePasswordHash = async (user: User): Promise<string> => {
  const saltRounds = 10;
  return await bcrypt.hash(user.password, saltRounds);
};
