import { logInfo } from "@suborbital/suborbital"

const ACTION_BAN_USER: ActionType = {action: "ban"}
const POST_STATUS_DELETED: PostStatus = {status: "deleted"}

//@json
export class Post {
	post_id: string
	title: string
	body: string
	created_at: string
	upvotes: i32
	downvote: i32
	subreddit: Subreddit
	author: Author
}

//@json
export class Author {
	user_id: string
	name: string
	karma: i32
}

//@json
export class Subreddit {
	subreddit_id: string
	subreddit_name: string
 }

//@json
export class Action {
  action_type: ActionType
  post_status: PostStatus
}

export class EmailAction {
	action: Action
	to: string
	title: string
	body: string
}

//@json
export class ActionType {
	action: string
}

//@json
export class PostStatus {
	status: string
}

export function run(post: Post): Action {  
	let msg = "got post from, " + post.author.name

	logInfo(msg)

	const action: Action = {
		action_type: ACTION_BAN_USER,
		post_status: POST_STATUS_DELETED,
	}

	return action
}