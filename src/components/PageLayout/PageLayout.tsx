import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { PaddingBox } from '../PaddingBox';

type PageLayoutProps = {
	children: ReactNode;
	className?: string;
}

export const PageLayout: FC<PageLayoutProps> = (
	{
		children,
		className
	},
) => {
	const componentClasses = classNames(
		className,
	)

	return (
		<PaddingBox small className={componentClasses}>
			{children}
		</PaddingBox>
	);
};
