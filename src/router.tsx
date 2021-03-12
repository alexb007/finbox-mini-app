import React from 'react';
import { connect } from 'react-redux';
import { AppRoot, Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import {
  Icon28BookOutline,
  Icon28MoneyTransferOutline,
} from '@vkontakte/icons';
import { SelectionView, AppView } from './views';
import { IRouterProps, IStory, TabRoute } from './types';

/**
 * The app router.
 *
 * @constructor
 */
function Router(props: IRouterProps): React.ReactElement {
  const [activeStory, setActiveStory] = React.useState<IStory>(TabRoute.Selection);



  function onStoryChange(e: any): void {
    return setActiveStory(e.currentTarget.dataset.story);
  }

  return (
    <AppRoot>
      <Epic activeStory={activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === TabRoute.Selection}
            data-story={TabRoute.Selection}
            text="Займы"
          ><Icon28MoneyTransferOutline/></TabbarItem>
          <TabbarItem
            onClick={onStoryChange}
            selected={activeStory === TabRoute.App}
            data-story={TabRoute.App}
            text="Трекер"
          ><Icon28BookOutline /></TabbarItem>
        </Tabbar>
      }>
        <SelectionView id={TabRoute.Selection} activePanel={TabRoute.Selection} />
        <AppView id={TabRoute.App} activePanel={TabRoute.App} />
      </Epic>
    </AppRoot>
  );
}

export default connect(null, null)(Router);
