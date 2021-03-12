import React from 'react';
import {Card, Progress} from '@vkontakte/vkui';
import './styles.scss';
import ISelectionResultProps from "./types";
import {IState} from "../../store/types/state";
import {connect} from "react-redux";

/**
 * The catalog panel.
 *
 * @param props
 * @constructor
 */
function SelectionLoadingPanel(props: ISelectionResultProps): React.ReactElement {
    return (
        <Card className="selection-loading">
            {props.state?.loading_service != null ?
                <div className="selection-loading__service">
                    <img src={props.state?.loading_service?.logo} alt=""/>
                    <div>{props.state?.progress} из {props.state?.services_count}</div>
                </div> : <></>
            }
            <Progress className={'selection-loading__progress'}
                      value={Number((props.state?.progress ?? 0) * 100 / ((props.state?.services_count != null && props.state?.services_count > 0) ? props.state?.services_count : 1))}/>
            <span>Оправшиваем партнёров и рассчитываем шанс одобрения...</span>
        </Card>
    );
}

const mapStateToProps = (state: IState) => ({
    state: state.chances
});


export default connect(mapStateToProps, null)(SelectionLoadingPanel);
