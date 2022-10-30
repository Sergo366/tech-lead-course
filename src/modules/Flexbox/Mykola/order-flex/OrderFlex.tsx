import classNames from 'classnames';
import { useState } from 'react';
import style from './style.module.scss';

const checkArr = [
    ['justify-content', 'space-between'],
    ['justify-content', 'space-around'],
    ['justify-content', 'space-evenly'],
    ['justify-content', 'flex-start'],
    ['justify-content', 'flex-end'],
    ['justify-content', 'center'],
    ['align-items', 'flex-start'],
    ['align-items', 'center'],
    ['align-items', 'flex-end'],
    ['align-items', 'flex-end'],
];

export const OrderFlex = () => {
    const [arr, setArr] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);
    const [flexValue, setFlexValue] = useState<string>('');
    const [flexKey, setFlexKey] = useState<string>('');
    const changeOrder = (firstEl: number) => {
        const newArr = arr.filter((el) => el !== firstEl && el);
        setArr([firstEl, ...newArr]);
    };
    const onChange = (key: string, value: string) => {
        setFlexKey(key);
        setFlexValue(value);
    };
    const styleForFlex = {
        [flexKey]: flexValue,
    };
    return (
        <div className={style.orderContainer}>
            <div className={style.orderMenu}>
                {checkArr.map((el, inx) => {
                    const id = `checkbox${inx}`;
                    const [key, value] = el;
                    const label = `${key}:${value}`;
                    return (
                        <div>
                            <input
                                type='checkbox'
                                id={id}
                                name={value}
                                onChange={() => onChange(key, value)}
                            />
                            <label htmlFor={id}>{label}</label>
                        </div>
                    );
                })}
            </div>
            <div style={styleForFlex} className={classNames(style.orderContent)}>
                {arr.map((el: number, inx: number) => {
                    return (
                        <div
                            style={{ order: inx }}
                            className={classNames(style.el)}
                            onClick={() => changeOrder(el)}
                        >
                            {el}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
