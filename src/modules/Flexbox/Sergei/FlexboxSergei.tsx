import React from 'react';
import { PageLayout } from '../../../components/PageLayout';
import classes from './styles/style.module.scss'
import { FlexboxExample } from './FlexboxExample';

export const FlexboxSergei = () => {
	return (
		<PageLayout>
			<b>Display flex and gap 8px</b>
			<FlexboxExample className={classes.flexbox1}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Justify-content: space-between/around/evenly</b>
			<FlexboxExample className={classes.flexbox2}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Justify-content: space-around/evenly</b>
			<FlexboxExample className={classes.flexbox3}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Justify-content: space-evenly</b>
			<FlexboxExample className={classes.flexbox4}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>

			<b>Justify-content: flex-start</b>
			<FlexboxExample className={classes.flexbox2_1}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Justify-content: flex-end</b>
			<FlexboxExample className={classes.flexbox3_1}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Justify-content: center</b>
			<FlexboxExample className={classes.flexbox4_1}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>


			<b>Align-items: flex-start;</b>
			<FlexboxExample className={classes.flexbox5}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Align-items: flex-end;</b>
			<FlexboxExample className={classes.flexbox6}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Align-items: center;</b>
			<FlexboxExample className={classes.flexbox7}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>

			<b>Column / gap / Justify-content: space-between</b>
			<FlexboxExample className={classes.flexbox8}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Column / gap / Justify-content: space-evenly</b>
			<FlexboxExample className={classes.flexbox9}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Column / gap / Justify-content: space-around</b>
			<FlexboxExample className={classes.flexbox10}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>

			<b>Column / gap / align-items: flex-start</b>
			<FlexboxExample className={classes.flexbox11}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Column / gap / align-items: flex-end</b>
			<FlexboxExample className={classes.flexbox12}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>
			<b>Column / gap / align-items: center;</b>
			<FlexboxExample className={classes.flexbox13}>
				<div className={classes.rectangle1} />
				<div className={classes.rectangle2} />
				<div className={classes.rectangle3} />
			</FlexboxExample>

			<b>Column / gap / align-items: stretch</b>
			<FlexboxExample className={classes.flexbox11_1}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</FlexboxExample>
			<b>Column / gap / align-items: baseline</b>
			<FlexboxExample className={classes.flexbox12_1}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</FlexboxExample>

			<b>Flex-direction: row-reverse; / gap /</b>
			<FlexboxExample className={classes.flexbox14}>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
			</FlexboxExample>
			<b>Flex-direction: column-reverse; / gap /</b>
			<FlexboxExample className={classes.flexbox15}>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
			</FlexboxExample>

			<b>Order / gap /</b>
			<FlexboxExample className={classes.flexbox16}>
				<div className={classes.order1}>1</div>
				<div className={classes.order2}>2</div>
				<div className={classes.order3}>3</div>
				<div className={classes.order4}>4</div>
				<div className={classes.order5}>5</div>
			</FlexboxExample>

			<b>Align-content: flex-start / flex-wrap: wrap;</b>
			<FlexboxExample className={classes.flexbox17}>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
			</FlexboxExample>
			<b>align-content: flex-end / flex-wrap: wrap;</b>
			<FlexboxExample className={classes.flexbox18}>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
			</FlexboxExample>
			<b>align-content: stretch / flex-wrap: wrap;</b>
			<FlexboxExample className={classes.flexbox19}>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
			</FlexboxExample>

			<b>Align-content: center / flex-wrap: wrap;</b>
			<FlexboxExample className={classes.flexbox20}>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
			</FlexboxExample>
			<b>align-content: space-between; / flex-wrap: wrap;</b>
			<FlexboxExample className={classes.flexbox21}>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
			</FlexboxExample>
			<b>align-content: space-around/evently / flex-wrap: wrap;</b>
			<FlexboxExample className={classes.flexbox22}>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
				<div className={classes.rectangle1}>1</div>
				<div className={classes.rectangle2}>2</div>
				<div className={classes.rectangle3}>3</div>
			</FlexboxExample>

			<b>Flex grow / shrink / basis )Change view port if you want to see how it work)</b>
			<FlexboxExample className={classes.flexbox23}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</FlexboxExample>
			<FlexboxExample className={classes.flexbox24}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</FlexboxExample>
			<FlexboxExample className={classes.flexbox25}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</FlexboxExample>
			<b>Align-self</b>
			<FlexboxExample className={classes.flexbox26}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
			</FlexboxExample>
		</PageLayout>
	);
};
