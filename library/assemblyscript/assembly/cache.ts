import {
  cacheGet as s_cacheGet,
  cacheSet as s_cacheSet,
  Result,
} from "@suborbital/suborbital";

export function cacheGet(key: string): Result {
  return s_cacheGet(key);
}

export function cacheSet(key: string, value: ArrayBuffer, ttl: i32): void {
  return s_cacheSet(key, value, ttl);
}
