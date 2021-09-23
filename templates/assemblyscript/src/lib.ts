import { JSON } from "assemblyscript-json";
import { logInfo } from "@rocketshipinc/rocketship"

export function run(input: JSON.Obj): ArrayBuffer {
	let payload = input.toString()
	
	let out = "Shipment payload: " + payload

	logInfo(out)

	return String.UTF8.encode(out)
}