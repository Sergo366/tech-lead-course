import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { PaddingBox } from '../../../components/PaddingBox';

type FlexboxExampleProps = {
	children: ReactNode;
	className?: string;
}

export const FlexboxExample:FC<FlexboxExampleProps> = (
	{
		children,
		className,
	}
) => {

	const componentClasses = classNames(className)

	return(
		<PaddingBox
			className={componentClasses}
			style={{ border: '4px solid gray', marginBottom: '8px' }}
		>
			{children}
		</PaddingBox>
	)
}
