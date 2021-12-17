import {logInfo} from "@suborbital/suborbital"
import { Post, Action, run } from "./lib"
import {JSON} from "json-as"

// EDIT custom_run TO CHANGE HOW DATA IS TRANSFORMED BEFORE PASSING INTO THE USER'S FUNCTION
// EDIT lib.ts TO CHANGE THE TEMPLATE AND FUNCTION SIGNATURE THAT YOUR USERS WILL SEE

//ts-ignore
@json
class ActionsResponse {
	actions: Array<Action>
}

export function custom_run(input: ArrayBuffer): ArrayBuffer {
	logInfo("got here 1")
	logInfo(String.UTF8.decode(input))

	const post = JSON.parse<Post>(String.UTF8.decode(input))
	logInfo("got here 2")
	
	const actions = run(post)
	logInfo("got here 3")

	const response: ActionsResponse = {
		actions: actions
	}
	
	const output = JSON.stringify(response)
	logInfo("got here 4")

	return String.UTF8.encode(output)
}