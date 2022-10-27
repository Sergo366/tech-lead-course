import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RoutesPath } from './const';
import { MainPage } from '../MainPage';
import { FlexboxMykola } from '../Flexbox/Mykola';
import { FlexboxSergei } from '../Flexbox/Sergei';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path={RoutesPath.MainPage} element={<MainPage />} />
			<Route path={RoutesPath.FlexboxSergei} element={<FlexboxSergei />} />
			<Route path={RoutesPath.FlexboxMykola} element={<FlexboxMykola />} />

			<Route path={RoutesPath.AnotherPath} element={'No match'} /> TODO: Need to create component for this path
		</Routes>
	);
};
