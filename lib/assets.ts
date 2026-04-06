const publicBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function getAssetPath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${publicBasePath}${path}`;
}
