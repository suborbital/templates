// feel free to import and use @suborbital/suborbital capabilities here
// remember to export any custom files in library/assemblyscript/assembly/index.ts

export class randomReturn {
	something: string
	otherThing: boolean
}

export function getRandom(): randomReturn {
	const rr: randomReturn = {
		something: "wonderful",
		otherThing: true
	}

	return rr
}