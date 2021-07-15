import { httpGet as s_httpGet } from "@suborbital/suborbital"
import { httpPost as s_httpPost } from "@suborbital/suborbital"
import { httpPatch as s_httpPatch } from "@suborbital/suborbital"
import { httpDelete as s_httpDelete } from "@suborbital/suborbital"

export function httpGet(url: string, headers: Map<string, string> | null): ArrayBuffer {
	return s_httpGet(url, headers)
}

export function httpPost(url: string, body: ArrayBuffer, headers: Map<string, string> | null): ArrayBuffer {
	return s_httpPost(url, body, headers)
}

export function httpPatch(url: string, body: ArrayBuffer, headers: Map<string, string> | null): ArrayBuffer {
	return s_httpPatch(url, body, headers)
}

export function httpDelete(url: string, headers: Map<string, string> | null): ArrayBuffer {
	return s_httpDelete(url, headers)
}