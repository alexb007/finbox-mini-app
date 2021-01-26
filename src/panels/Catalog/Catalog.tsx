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
        <CatalogItem href="https://v1.directlead.io/go/RU/29" avatarSrc="https://i.ibb.co/Xb7VXVZ/moneyman.png" title="МаниМен" value="До 80 000₽" />
        <CatalogItem href="https://v1.directlead.io/go/RU/30" avatarSrc="https://i.ibb.co/1zgT16c/webbankir-logo.jpg" title="WebBankir" value="До 20 000₽" />
        <CatalogItem href="https://v1.directlead.io/go/RU/31" avatarSrc="https://i.ibb.co/gjSTfhh/zaymigo-logo.png" title="Zaymigo" value="До 30 000₽" />
        <CatalogItem href="https://v1.directlead.io/go/RU/32" avatarSrc="https://i.ibb.co/BrRmhqw/turbozaim.jpg" title="Турбозайм" value="До 50 000₽" />
        <CatalogItem href="https://v1.directlead.io/go/RU/33" avatarSrc="https://iili.io/2Csozu.png" title="Pay P.S" value="До 30 000₽" />
        <CatalogItem href="https://v1.directlead.io/go/RU/34" avatarSrc="https://i.ibb.co/hZS8b3z/zaimer2.png" title="Займер" value="До 50 000₽" />
      </ContentFix>
    </Panel>
  );
}
