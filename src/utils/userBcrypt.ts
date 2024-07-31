import bcrypt from 'bcrypt';

export const hashPassword = async(password: string): Promise<string> => {
    const complexity = 10;

    return bcrypt.hash(password, complexity); 
}