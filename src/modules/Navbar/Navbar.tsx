import React from 'react';
import { PaddingBox } from '../../components/PaddingBox';
import { NavbarDataItems } from './const';
import { NavbarItems } from './NavbarItems';

export const Navbar = () => {
	return (
		<PaddingBox tiny>
			{NavbarDataItems.map(item => {
				return (<NavbarItems {...item} key={item.id} />)
			})}
		</PaddingBox>
	);
};
