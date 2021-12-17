import { logInfo } from "@suborbital/suborbital"
import { JSON } from "json-as"

const ACTION_BAN_USER: ActionType = {action: "ban"}
const POST_STATUS_DELETED: PostStatus = {status: "deleted"}

export function run(post: Post): Array<Action> {  
	let msg = "got post: " + post.title + ", " + post.post_id + ", " + post.author.name

	logInfo(msg)

	const actions = new Array<Action>()

	actions.push({
		action_type: ACTION_BAN_USER,
		post_status: POST_STATUS_DELETED,
	})

	return actions
}

//ts-ignore
@json
export class Post {
	post_id: string
	title: string
	body: string
	created_at: string
	upvotes: i32
	downvotes: i32
	subreddit: Subreddit
	author: Author
}

//ts-ignore
@json
export class Author {
	user_id: string
	name: string
	karma: i32
}

//ts-ignore
@json
export class Subreddit {
	subreddit_id: string
	subreddit_name: string
 }

 //ts-ignore
@json
export class Action {
  action_type: ActionType
  post_status: PostStatus
}

//ts-ignore
@json
export class EmailAction {
	action: Action
	to: string
	title: string
	body: string
}

//ts-ignore
@json
export class ActionType {
	action: string
}

//ts-ignore
@json
export class PostStatus {
	status: string
}