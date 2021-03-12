import React from 'react';
import './styles.scss';
import {connect} from "react-redux";
import ISelectionControllerProps from "./types";
import {IState} from "../../store/types/state";
import {LOAD_CHANCES} from "../../store/constants/chances";
import {Dispatch} from "redux";
import {ChancesAction} from "../../store/actions/chances/types";
import {SelectionFormPanel} from "../../panels/SelectionForm";
import {SelectionLoadingPanel} from "../../panels/SelectionLoading";
import {SelectionResultPanel} from "../../panels/SelectionResult";

function SelectionController(props: ISelectionControllerProps): React.ReactElement {
    return (
        (props.state.page.id === 2) ? <SelectionResultPanel id={props.id}/> : ((props.state.page.id === 1) ?
            <SelectionLoadingPanel id={props.id}/> : <SelectionFormPanel id={props.id}/>)
    );
}

const mapStateToProps = (state: IState) => ({
    state: state.chances,
});

const mapDispatchToProps = (dispatch: Dispatch<ChancesAction>) => ({
    loadChances: () => dispatch({type: LOAD_CHANCES})
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectionController);
