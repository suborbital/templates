import { JSON } from "assemblyscript-json";
import { logInfo } from "@rocketshipinc/rocketship"

export function run(input: JSON.Obj): ArrayBuffer {
	let inStr = String.UTF8.decode(input)
  
	let out = "HEY THERE, " + inStr

	logInfo(out)

	return String.UTF8.encode(out)
}