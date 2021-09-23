import { JSON } from "assemblyscript-json";
import { run } from "./lib"

// EDIT custom_run TO CHANGE HOW DATA IS TRANSFORMED BEFORE PASSING INTO THE USER'S FUNCTION
// EDIT lib.ts TO CHANGE THE TEMPLATE AND FUNCTION SIGNATURE THAT YOUR USERS WILL SEE

export function custom_run(input: ArrayBuffer): ArrayBuffer {
	let inputString = String.UTF8.decode(input);
	let jsonObj: JSON.Obj = <JSON.Obj>(JSON.parse(inputString));
	return run(jsonObj)
}