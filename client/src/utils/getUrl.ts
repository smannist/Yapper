// used until i set up a reverse proxy in azure, probably gonna use docker with nginx

const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, "");

const normalizePath = (path: string): string => {
  return path.startsWith("/") ? path : `/${path}`;
};

const getUrl = (path: string): string => {
  const normalizedPath = normalizePath(path);
  if (import.meta.env.DEV) return normalizedPath;
  const baseUrl = trimTrailingSlash(import.meta.env.VITE_API_BASE_URL ?? "");
  return `${baseUrl}${normalizedPath}`;
};

export default getUrl;
