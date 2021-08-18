import { logInfo } from "@suborbital/suborbital"

export function run(input: ArrayBuffer): ArrayBuffer {
	let inStr = String.UTF8.decode(input)
  
	let out = "HEY THERE, " + inStr

	logInfo(out)

	return String.UTF8.encode(out)
}