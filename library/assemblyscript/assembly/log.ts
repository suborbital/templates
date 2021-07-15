import { logDebug as s_logDebug } from "@suborbital/suborbital"
import { logInfo as s_logInfo } from "@suborbital/suborbital"
import { logWarn as s_logWarn } from "@suborbital/suborbital"
import { logErr as s_logErr } from "@suborbital/suborbital"

export function logDebug(msg: string): void {
	s_logDebug(msg)
}

export function logInfo(msg: string): void {
	s_logInfo(msg)
}

export function logWarn(msg: string): void {
	s_logWarn(msg)
}

export function logErr(msg: string): void {
	s_logErr(msg)
}