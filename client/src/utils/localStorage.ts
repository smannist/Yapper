const isBrowser = (): boolean => typeof window !== "undefined";

const normalizeStoredString = (value: string): string => {
  const trimmed = value.trim();

  if (trimmed.length === 0) {
    return "";
  }

  try {
    const parsed: unknown = JSON.parse(trimmed);
    return typeof parsed === "string" ? parsed.trim() : trimmed;
  } catch {
    return trimmed;
  }
};

export const getStoredValue = (key: string): string => {
  if (!isBrowser()) {
    return "";
  }

  try {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      return "";
    }

    return normalizeStoredString(storedValue);
  } catch {
    return "";
  }
};

export const removeStoredValue = (key: string): void => {
  if (!isBrowser()) return;
  localStorage.removeItem(key);
};

export const setToLocalStorage = (key: string, value: unknown): void => {
  if (!isBrowser()) return;
  const serializedValue =
    typeof value === "string" ? value : JSON.stringify(value);
  localStorage.setItem(key, serializedValue);
};
