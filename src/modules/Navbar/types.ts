export type NavbarDataItemsType = NavbarDataItem[]

export type NavbarDataItem = {
	id: number,
	pageName: string;
	urls: urlsType;
}

type urlsType = {
	urlSergei: string;
	urlMykola: string;
}
