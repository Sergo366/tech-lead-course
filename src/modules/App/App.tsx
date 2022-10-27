import React from 'react';
import { Navbar } from '../Navbar';
import classes from './styles/styles.module.scss';
import { AppRoutes } from '../AppRoutes';

export const App = () => {
	return (
		<div className={classes.layout}>
			<Navbar />
			<AppRoutes />
		</div>
	);
}
