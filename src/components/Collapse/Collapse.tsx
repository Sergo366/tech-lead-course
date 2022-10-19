import React, { FC, ReactNode } from 'react';
import { Collapse as ReactCollapse } from 'react-collapse';
import { funcArg } from './types';

type CollapseProps = {
	opened: boolean;
	children: ReactNode;
	theme?: {
		collapse: string,
		content: string,
	}
	onRest?: (arg: funcArg) => void;
	onWork?: (arg: funcArg) => void;
	initialStyle?: {
		height: string | number;
		overflow: string;
	}
	checkTimeout?: number;
}

export const Collapse: FC<CollapseProps> = (
	{
		opened,
		...props
	}) => {
	return <ReactCollapse isOpened={opened} {...props} />
};
