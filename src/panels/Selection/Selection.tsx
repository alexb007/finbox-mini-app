import React from 'react';
import {ContentFix, SelectionController} from "../../components";
import {Panel, PanelHeader} from "@vkontakte/vkui";
import {connect} from "react-redux";
import {IState} from "../../store/types/state";
import ISelectionPanelProps from "./types";
import {UserAction} from "../../store/actions/user/types";
import {Dispatch} from "redux";
import {FETCH_PROFILE_INFO} from "../../store/constants/user";

/**
 * The catalog panel.
 *
 * @param props
 * @constructor
 */
class SelectionPanel extends React.Component<ISelectionPanelProps> {

    componentDidMount() {
        this.props.loadProfileInfo();
    }

    render() {
        return <Panel id={this.props.id}>
            <PanelHeader>{this.props.state?.page.title}</PanelHeader>
            <ContentFix>
                <SelectionController id={this.props.id}/>
            </ContentFix>
        </Panel>
    }
}

const mapStateToProps = (state: IState) => ({
    state: state.chances,
});

const mapDispatchToProps = (dispatch: Dispatch<UserAction>) => ({
    loadProfileInfo: () => dispatch({type: FETCH_PROFILE_INFO})
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectionPanel);
