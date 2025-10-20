export function decodeToken(token: string): any {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  } catch (e) {
    console.error('Erreur lors du décodage du token', e);
    return null;
  }
}
