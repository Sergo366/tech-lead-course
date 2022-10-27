import { NavbarDataItemsType } from './types';
import { RoutesPath } from '../AppRoutes/const';

enum PagesName {
	FlexBox = 'FlexBox',
	Grid = 'Grid',
}

export const NavbarDataItems: NavbarDataItemsType = [
	{ id: 0, pageName: PagesName.FlexBox, urls: { urlSergei: RoutesPath.FlexboxSergei, urlMykola: RoutesPath.FlexboxMykola } },
	{ id: 1, pageName: PagesName.Grid, urls: { urlSergei: RoutesPath.GridSergei, urlMykola: RoutesPath.GridMykola } },
]
