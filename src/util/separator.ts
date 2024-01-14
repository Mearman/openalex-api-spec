import { CombinationOfTwo } from "~/types/combinationOfTwo";

export function separator(...arg: CombinationOfTwo<string, number>): void {
	const char = arg.find((arg) => typeof arg === "string") as string ?? "=";
	const len = arg.find((arg) => typeof arg === "number") as number ?? 80;
	if (arg.length > 2) {
		throw new Error("Too many arguments");
	}
	console.log(char.repeat(len));
}
