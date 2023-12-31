export class LocalStorage {
  public static setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public static getValue(key: string) {
    const item = typeof window !== "undefined" ? localStorage.getItem(key) : '';

    if (!item || item == "undefined") {
      return null;
    }
    return JSON.parse(item);
  }

  public static removeValue(key: string): void {
    if (typeof window !== "undefined")
      localStorage.removeItem(key);
  }
}
