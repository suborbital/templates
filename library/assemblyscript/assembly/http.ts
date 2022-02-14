import {
  httpGet as s_httpGet,
  httpPost as s_httpPost,
  httpPatch as s_httpPatch,
  httpDelete as s_httpDelete,
  Result,
} from "@suborbital/suborbital";

export function httpGet(
  url: string,
  headers: Map<string, string> | null
): Result {
  return s_httpGet(url, headers);
}

export function httpPost(
  url: string,
  body: ArrayBuffer,
  headers: Map<string, string> | null
): Result {
  return s_httpPost(url, body, headers);
}

export function httpPatch(
  url: string,
  body: ArrayBuffer,
  headers: Map<string, string> | null
): Result {
  return s_httpPatch(url, body, headers);
}

export function httpDelete(
  url: string,
  headers: Map<string, string> | null
): Result {
  return s_httpDelete(url, headers);
}
