import React from 'react';
import {block} from 'bem-cn';
import './styles.scss';
import {ReactSVG} from "react-svg";
import SVGHigh from '../../assets/high.svg';
import SVGLow from '../../assets/low.svg';
import SVGMedium from '../../assets/medium.svg';
import SVGLoading from '../../assets/loading.svg';
import NumberFormat from "react-number-format";

const catalogItem = block('catalog-item');

export default function CatalogItem(props: {
    href: string;
    avatarSrc: string;
    title: string;
    value: string;
    chance: string;
}) {

    function chanceImage() {
        let resource;
        switch (props.chance) {
            case 'high':
                resource = SVGHigh;
                break;
            case 'middle':
                resource = SVGMedium;
                break;
            case 'low':
                resource = SVGLow;
                break;
            default:
                resource = SVGLoading;
        }
        return resource;
    }

    return (
        <a href={props.href} target="_blank" rel="noreferrer" className={catalogItem()}>
            <div className={catalogItem('wrap')}>
                <img src={props.avatarSrc} className={catalogItem('avatar')} alt=""/>
            </div>
            <div className={catalogItem('value')}>
                <NumberFormat displayType={'text'} className={catalogItem('value', 'value')} value={props.value}
                                                              thousandSeparator={" "}
                              prefix={'До '}
                                                              suffix={' ₽'}/>
                <div className={catalogItem('value', 'label')}>шанс одобрения</div>
            </div>
            <div className={catalogItem('chance')}>
                <ReactSVG src={chanceImage()} />
            </div>
        </a>
    );
}
