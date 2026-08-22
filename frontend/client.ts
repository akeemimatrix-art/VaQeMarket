export type ApiResponse<T> = { data: T; error?: string };

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(path, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  const payload = (await response.json()) as ApiResponse<T> | T;
  return typeof payload === "object" && payload !== null && "data" in payload
    ? (payload as ApiResponse<T>).data
    : payload;
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(path, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(await response.text() || `API request failed: ${response.status}`);
  const payload = (await response.json()) as ApiResponse<T> | T;
  return typeof payload === "object" && payload !== null && "data" in payload
    ? (payload as ApiResponse<T>).data
    : payload;
}
