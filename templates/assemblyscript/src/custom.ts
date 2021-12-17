import { Post, Action, run } from "./lib"
import {JSON} from "json-as"

// EDIT custom_run TO CHANGE HOW DATA IS TRANSFORMED BEFORE PASSING INTO THE USER'S FUNCTION
// EDIT lib.ts TO CHANGE THE TEMPLATE AND FUNCTION SIGNATURE THAT YOUR USERS WILL SEE

export function custom_run(input: ArrayBuffer): ArrayBuffer {
	const post = JSON.parse<Post>(String.UTF8.decode(input))

	const action = run(post)

	const output = JSON.stringify(action)

	return output
}