import React from 'react';
import { PaddingBox } from '../../components/PaddingBox';
import { NavbarDataItems } from './const';
import { NavbarItem } from './NavbarItem';
import classes from './style/style.module.scss'

export const Navbar = () => {
	return (
		<PaddingBox tiny className={classes.navbar}>
			{NavbarDataItems.map(item => {
				return (<NavbarItem {...item} key={item.id} />)
			})}
		</PaddingBox>
	);
};
