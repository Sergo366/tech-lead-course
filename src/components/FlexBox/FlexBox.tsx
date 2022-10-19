import classNames from 'classnames';
import React, { CSSProperties, ComponentPropsWithoutRef, forwardRef } from 'react';
import classes from './styles/style.module.scss';
import { GapSizes } from './types';

type FlexBoxProps = {
	inline?: boolean;
	spaceBetween?: boolean;
	spaceAround?: boolean;
	top?: boolean;
	bottom?: boolean;
	center?: boolean;
	hrCenter?: boolean;
	wrap?: boolean;
	hrEnd?: boolean;
	hrStart?: boolean;
	column?: boolean;
	className?: string;
	dataTestId?: string;
	grow?: boolean;
	style?: CSSProperties;
	gap?: GapSizes;
};

export const FlexBox = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & FlexBoxProps>(
	(
		{
			className,
			children,
			inline,
			spaceBetween,
			spaceAround,
			top,
			bottom,
			center,
			hrCenter,
			wrap,
			hrEnd,
			dataTestId,
			style,
			hrStart,
			column,
			grow,
			gap,
			...props
		},
		ref
	) => {
		const componentClasses = classNames(classes.flexGrid, className, {
			[classes.flexGrid_inline]: inline,
			[classes.flexGrid_spaceBetween]: spaceBetween,
			[classes.flexGrid_spaceAround]: spaceAround,
			[classes.flexGrid_top]: top,
			[classes.flexGrid_bottom]: bottom,
			[classes.flexGrid_center]: center,
			[classes.flexGrid_hrCenter]: hrCenter,
			[classes.flexGrid_wrap]: wrap,
			[classes.flexGrid_hrEnd]: hrEnd,
			[classes.flexGrid_hrStart]: hrStart,
			[classes.flexGrid_column]: column,
			[classes.flexGrid_grow]: grow,
			[classes[`flexGrid__gap_${gap}`]]: typeof gap !== 'undefined',
		});

		return (
			<div {...props} className={componentClasses} data-testid={dataTestId} style={style} ref={ref}>
				{children}
			</div>
		);
	}
);

FlexBox.displayName = 'FlexBox';
