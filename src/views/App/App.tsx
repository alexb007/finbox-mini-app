import React from 'react';
import { View, ModalRoot } from '@vkontakte/vkui';
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";
import { AppPanel } from "../../panels";
import {AddDebtModal, PrivacyPolicyModal} from '../../modals';
import { AppModal } from './types';
import IModal from "../../types/modal";

/**
 * The app view.
 *
 * @constructor
 */
export default function AppView(props: ViewProps & PanelProps): React.ReactElement {
  const [activeModal, setActiveModal] = React.useState<IModal | null>(null);
  const [popout, setPopout] = React.useState<ViewProps['popout']>(undefined);

  /**
   * The function show modal.
   * @param modalName
   */
  function onShowModal(modalName: string): void {
    return setActiveModal(modalName);
  }

  /**
   * The function show popout.
   * @param popout
   */
  function onShowPopout(popout: ViewProps['popout']): void {
    return setPopout(popout);
  }

  /**
   * The function cancel modal.
   */
  function onCancelModal(): void {
    return setActiveModal(null);
  }

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={onCancelModal}>
      <AddDebtModal id={AppModal.AddDebt} onCancelModal={onCancelModal} dynamicContentHeight />
      <PrivacyPolicyModal id={AppModal.PrivacyPolicy} onCancelModal={onCancelModal} dynamicContentHeight />
    </ModalRoot>
  );

  return (
    <View id={props.id} modal={modal} popout={popout} activePanel={props.activePanel}>
      <AppPanel id={props.id} onShowModal={onShowModal} onShowPopout={onShowPopout} />
    </View>
  );
}
