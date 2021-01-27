import React from 'react';
import { block } from 'bem-cn';
import './styles.scss';

const catalogItem = block('catalog-item');

export default function CatalogItem(props: {
  href: string;
  avatarSrc: string;
  title: string;
  value: string;
}) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={catalogItem()}>
      <div className={catalogItem('wrap')}>
        <img src={props.avatarSrc} className={catalogItem('avatar')} alt=""/>
      </div>
      <span className={catalogItem('value')}>{props.value}</span>
    </a>
  );
}
