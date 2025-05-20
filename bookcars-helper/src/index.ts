import bcrypt from 'bcryptjs';
export const formatNumber = (x: number, language: string): string => {
  const parts: string[] = String(x % 1 !== 0 ? x.toFixed(2) : x).split('.')
  const separator = language === 'en' ? ',' : ' '
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  return parts.join('.')
}

export const randomDigitGenerator = async(length = 6): Promise<string> => {
  try {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10); // Append random digit (0–9)
    }
    return result;
  } catch (error) {
    console.error('Error generating random digits:', error);
    throw new Error('Failed to generate random digits');
  }
};



export const hashPassword = async(password: string):Promise<string> =>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcrypt.compare(plainPassword, hashedPassword);
}