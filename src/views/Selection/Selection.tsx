import React from 'react';
import {View} from '@vkontakte/vkui';
import {ViewProps} from "@vkontakte/vkui/dist/components/View/View";
import {PanelProps} from "@vkontakte/vkui/dist/components/Panel/Panel";
import {SelectionPanel} from "../../panels";

/**
 * The catalog view.
 *
 * @constructor
 */
export default function SelectionView(props: ViewProps & PanelProps): React.ReactElement {
    return (
        <View id={props.id} activePanel={props.activePanel}>
            <SelectionPanel id={props.id}/>
        </View>
    );
}

