import React from 'react';
import {block} from "bem-cn";
import {ActionSheet, ActionSheetItem} from '@vkontakte/vkui';
import {DebtSection} from './modules';
import {getFirebasePath} from "../../utils";
import IDebtControllerProps, {SortType} from './types';
import {connect} from "react-redux";
// import {IState} from "../../store/types/state";
// import {getFriendsState} from "../../store/reducers/friends";
import {DebtCard} from "../index";
import firebase from "../../firebase";
import moment from 'moment';
import {DebtType} from "../../modals/AddDebt/types";
import {Icon56PaymentCardOutline} from '@vkontakte/icons';

const debtContainer = block('debt-container');

function DebtController(props: IDebtControllerProps): React.ReactElement {
    const [index, setIndex] = React.useState<number>(0);
    const [sortType, setSortType] = React.useState<SortType>(SortType.ByMaximumSum);
    const [data, setData] = React.useState<{} | null>(null);

    function fetchData(): void {
        const userHash = getFirebasePath();

        if (userHash !== null) {
            firebase.database().ref(userHash).on('value', (snapshot) => {
                const value = snapshot.val();
                setData(value);
            });
        }
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    function getCurrentType(): DebtType {
        if (index === 0) {
            return DebtType.borrowed;
        } else return DebtType.lent;
    }

    /**
     * The function change sort type.
     */
    function changeSortType(): void {
        if (sortType === SortType.ByMaximumSum) {
            return setSortType(SortType.ByExpirationDate);
        } else {
            return setSortType(SortType.ByMaximumSum);
        }
    }

    function renderData() {
        return data === null ? (<div/>) : Object.entries(data).map((element) => {
            const key = element[0];
            const value: any = element[1];

            // eslint-disable-next-line no-mixed-operators
            return <DebtCard
                    itemKey={key}
                    type={value.type}
                    first_name={value.friend || ''}
                    last_name={''}
                    photo_100={''}
                    sum={value.sum}
                    createdAt={value.createdAt}
                    expirationDate={value.expirationDate}
                    onClick={(itemKey) => props.onShowPopout && props.onShowPopout(
                        //@ts-ignore
                        <ActionSheet
                            iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
                            onClose={() => props.onShowPopout && props.onShowPopout(undefined)}
                        >
                            <ActionSheetItem autoclose mode="destructive" onClick={() => {
                                firebase.database().ref(`${getFirebasePath()}/${itemKey}`).remove();
                            }}>
                                Удалить
                            </ActionSheetItem>
                        </ActionSheet>
                    )}
                />
        }).sort((a: any, b: any) => {
            if (sortType === SortType.ByMaximumSum) {
                return Number(b.props.sum) - Number(a.props.sum);
            } else {
                return moment(new Date(a.props.expirationDate)).unix() - moment(new Date(b.props.expirationDate)).unix()
            }
        }).filter((element: any) => {
            return element.props.type === getCurrentType();
        });
    }

    function hasExist(type: DebtType) {
        return data ? Object.values(data).filter((node: any) => {
            return node.type === type;
        }).length > 0 : false;
    }

    return (
        <div>
            <DebtSection data={data} index={index} onChange={(index) => setIndex(index)}/>
            <div className={debtContainer()}>
                {index === 0 && hasExist(DebtType.borrowed) && (
                    <div className={debtContainer('header')}>
                        <div className={debtContainer('title')}>
                            Займы по {' '}
                            <button type="button" onClick={() => changeSortType()}>
                                {sortType === SortType.ByMaximumSum && 'большей сумме ₽'}
                                {sortType === SortType.ByExpirationDate && 'дате возврата'}
                            </button>
                        </div>
                    </div>
                )}
                {index === 0 && !hasExist(DebtType.borrowed) && (
                    <div className="empty-filter">
                        <Icon56PaymentCardOutline/>
                        <p>У вас еще нет выданных займов</p>
                    </div>
                )}
                {index === 1 && hasExist(DebtType.lent) && (
                    <div className={debtContainer('header')}>
                        <div className={debtContainer('title')}>
                            Займы по {' '}
                            <button type="button" onClick={() => changeSortType()}>
                                {sortType === SortType.ByMaximumSum && 'большей сумме ₽'}
                                {sortType === SortType.ByExpirationDate && 'дате возврата'}
                            </button>
                        </div>
                    </div>
                )}
                {index === 1 && !hasExist(DebtType.lent) && (
                    <div className="empty-filter">
                        <Icon56PaymentCardOutline/>
                        <p>У вас еще нет полученных займов</p>
                    </div>
                )}
                <div className={debtContainer('content')}>
                    {renderData()}
                </div>
            </div>
        </div>
    );
}

// const mapStateToProps = (state: IState) => ({
//     friends: getFriendsState(state)
// });

export default connect(null)(DebtController);
