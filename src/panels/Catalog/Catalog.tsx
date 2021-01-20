import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import IPanelProps from "../../types/panelProps";
import {CatalogItem, ContentFix} from "../../components";

/**
 * The catalog panel.
 *
 * @param props
 * @constructor
 */
export default function CatalogPanel(props: IPanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader fixed={false}>Каталог</PanelHeader>
      <ContentFix>
        <CatalogItem href="https://trkleads.ru/click/2eecca95e3566885bed798b4ab4e37d2?aff_sub1=mrelease" avatarSrc="https://i.ibb.co/Xb7VXVZ/moneyman.png" title="МаниМен" value="До 80 000₽" />
        <CatalogItem href="https://trkleads.ru/click/60e65901961e9f91b63d994fe4764f10?aff_sub1=mrelease" avatarSrc="https://i.ibb.co/1zgT16c/webbankir-logo.jpg" title="WebBankir" value="До 20 000₽" />
        <CatalogItem href="https://trkleads.ru/click/c26a595d86014acb86f4263ef4638657?aff_sub1=mrelease" avatarSrc="https://i.ibb.co/gjSTfhh/zaymigo-logo.png" title="Zaymigo" value="До 30 000₽" />
        <CatalogItem href="https://trkleads.ru/click/dabbf31c9d54e4d560ae7ce6038a2d9d?aff_sub1=mrelease" avatarSrc="https://i.ibb.co/BrRmhqw/turbozaim.jpg" title="Турбозайм" value="До 50 000₽" />
        <CatalogItem href="https://trkleads.ru/click/d319d6471c27329c862c8c5496403b70?aff_sub1=mrelease" avatarSrc="https://iili.io/2Csozu.png" title="Pay P.S" value="До 30 000₽" />
        <CatalogItem href="https://trkleads.ru/click/f16e7e95e356a760ece06f284efef184?aff_sub1=mrelease" avatarSrc="https://i.ibb.co/hZS8b3z/zaimer2.png" title="Займер" value="До 50 000₽" />
      </ContentFix>
    </Panel>
  );
}
