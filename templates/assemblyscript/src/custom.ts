import { run } from "./lib"

// EDIT custom_run TO CHANGE HOW DATA IS TRANSFORMED BEFORE PASSING INTO THE USER'S FUNCTION
// EDIT lib.ts TO CHANGE THE TEMPLATE AND FUNCTION SIGNATURE THAT YOUR USERS WILL SEE

export function custom_run(input: ArrayBuffer): ArrayBuffer {
	return run(input)
}