import React from 'react';
import { Navbar } from '../Navbar';
import { Content } from '../Content';
import classes from './styles/styles.module.scss';

export const App = () => {
	return (
		<div className={classes.layout}>
			<Navbar />
			<Content />
		</div>
	);
}
