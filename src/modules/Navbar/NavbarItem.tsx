import React, { FC, useState } from 'react';
import classes from './style/style.module.scss'
import { NavbarDataItem } from './types';
import { Collapse } from '../../components/Collapse';
import { NavbarCollapseItem } from './NavbarCollapseItem';

export const NavbarItem: FC<NavbarDataItem> = (
	{
		pageName,
		urls,
	},
) => {
	const [isOpened, setIsOpened] = useState(false);

	const handleButtonClick = () => {
		setIsOpened((prevState) => !prevState)
	}

	return (
		<div className={classes.navbarItem}>
			<nav onClick={handleButtonClick}>
				<div className={classes.navbarCard}>
					{pageName}
				</div>
			</nav>

			<Collapse opened={isOpened}>
				<NavbarCollapseItem author={'Sergei'} url={urls.urlSergei} />
				<NavbarCollapseItem author={'Mykola'} url={urls.urlMykola} />
			</Collapse>
		</div>
	);
};
