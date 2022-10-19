import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PaddingBox } from '../../components/PaddingBox';
import classes from './style/style.module.scss'

type NavbarCollapseItemProps = {
	author: 'Sergei' | 'Mykola',
	url: string,
}

export const NavbarCollapseItem: FC<NavbarCollapseItemProps> = (
	{
		author,
		url,
	}
) => {
	return (
		<PaddingBox  className={classes.navbarCollapseItem}>
			<Link to={url}>
				{author}
			</Link>
		</PaddingBox>
	);
};
