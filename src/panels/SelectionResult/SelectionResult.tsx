import React from 'react';
import {CatalogItem} from "../../components";
import ISelectionResultProps from "./types";
import {IState} from "../../store/types/state";
import {connect} from "react-redux";
import * as ui from "@vkontakte/vkui";
import {ChancesAction} from "../../store/actions/chances/types";
import {Dispatch} from "redux";
import {SET_CHANCES} from "../../store/constants/chances";
import './styles.scss'
import IChance from '../../store/types/chance';

/**
 * The catalog panel.
 *
 * @param props
 * @constructor
 */
function SelectionResultPanel(props: ISelectionResultProps): React.ReactElement {

    function getChanceValue(chance: string) {
        switch (chance) {
            case "high":
                return 2;
            case "middle":
                return 1;
            case "low":
                return 0;
            default:
                return 0;
        }
    }

    let items = [];
    if (props.state != null) {
        let sortedChances = props.state?.chances.sort((a: IChance, b: IChance) => {
            if (getChanceValue(a.chance) > getChanceValue(b.chance)) return -1;
            if (getChanceValue(a.chance) < getChanceValue(b.chance)) return 1;
            return 0;
        })
        for (const service of props.state?.chances) {
            items.push(<CatalogItem href={service.link} avatarSrc={service.logo} title={service.title}
                                    value={`${service.amount} P`} chance={service.chance}/>);
        }
    }
        
    return (
        <div className={'selection-result'}>
            {items}
            <ui.Button type="submit" mode="primary" size="l" onClick={props.backToMain}
                       stretched>
                Начать заново
            </ui.Button>
        </div>

    );
}


const mapStateToProps = (state: IState) => ({
    state: state.chances
});

const mapDispatchToProps = (dispatch: Dispatch<ChancesAction>) => ({
    backToMain: () => dispatch({
        type: SET_CHANCES, payload: {
            loading_service: null,
            progress: 0,
            services_count: 0,
            loading: false,
            chances: [],
            page: {
                id: 0,
                title: "Подбор"
            }
        }
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectionResultPanel);
