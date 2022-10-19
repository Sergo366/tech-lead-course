export type funcArg = {
	isFullyOpened: boolean; // `true` only when Collapse reached final height
	isFullyClosed: boolean; // `true` only when Collapse is fully closed and height is zero
	isOpened: boolean; // `true` if Collapse has any non-zero height
	containerHeight: number; // current pixel height of Collapse container (changes until reaches `contentHeight`)
	contentHeight: number;
}
