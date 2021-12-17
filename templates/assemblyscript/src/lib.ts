import { logInfo } from "@suborbital/suborbital"

const ACTION_BAN_USER: ActionType = {action: "ban"}
const POST_STATUS_DELETED: PostStatus = {status: "deleted"}

//ts-ignore
@json
export class Post {
	postid: string
	title: string
	body: string
	createdat: string
	upvotes: i32
	downvotes: i32
	// subreddit: Subreddit
	// author: Author
}

//ts-ignore
@json
export class Author {
	userid: string
	name: string
	karma: i32
}

//ts-ignore
@json
export class Subreddit {
	subredditid: string
	subredditname: string
 }

 //ts-ignore
@json
export class Action {
  actiontype: ActionType
  poststatus: PostStatus
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

export function run(post: Post): Action {  
	let msg = "got post: " + post.title

	logInfo(msg)

	const action: Action = {
		actiontype: ACTION_BAN_USER,
		poststatus: POST_STATUS_DELETED,
	}

	return action
}