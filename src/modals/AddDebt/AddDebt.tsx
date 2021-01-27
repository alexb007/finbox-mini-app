import React from 'react';
import {connect} from 'react-redux';
import {FirebaseDatabaseMutation} from '@react-firebase/database';
import moment from 'moment';
import * as formik from 'formik';
import * as ui from '@vkontakte/vkui';
import * as icons from "@vkontakte/icons";
import {getCurrentUserId} from '../../utils';
import {getFriendsOptions} from '../../store/reducers/friends';
import IAddDebtModalProps, {IAddDebtValues, DebtType} from './types';
import {IState} from '../../store/types/state';
import {FriendsAction} from "../../store/actions/friends/types";
import {fetchFriends} from "../../store/actions/friends";
import {Dispatch} from "redux";
import {getUserState} from "../../store/reducers/user";

class AddDebtModal extends React.Component<IAddDebtModalProps> {

    componentDidMount() {
        console.log(this.props.friends)
        this.setState((state, props) => ({friends: this.props.friends}))
    }

    componentDidUpdate(prevProps: Readonly<IAddDebtModalProps>, prevState: Readonly<{}>, snapshot?: any) {
        console.log(this.props.friends)
        this.setState((state, props) => ({friends: this.props.friends}))
    }

    state = {
        friends: []
    }


    initialValues: IAddDebtValues = {
        type: DebtType.borrowed,
        sum: null,
        friendId: -1,
        expirationDate: null
    };

    render() {
        return <ui.ModalPage id={this.props.id} header={(
            <ui.ModalPageHeader left={
                <ui.PanelHeaderButton onClick={() => this.props.onCancelModal && this.props.onCancelModal()}>
                    <icons.Icon24Cancel/>
                </ui.PanelHeaderButton>
            }>Добавить долг</ui.ModalPageHeader>
        )} dynamicContentHeight={this.props.dynamicContentHeight}>
            <FirebaseDatabaseMutation path={getCurrentUserId() || '/'} type="push">
                {({runMutation}) => (
                    <formik.Formik initialValues={this.initialValues}
                                   validate={(values: IAddDebtValues): formik.FormikErrors<IAddDebtValues> => {
                                       const errors: formik.FormikErrors<IAddDebtValues> = {};
                                       this.props.updateModalHeight && this.props.updateModalHeight();

                                       if (!values.type) {
                                           errors.type = 'Выберите тип долга';
                                       } else if (!values.sum) {
                                           errors.sum = 'Введите сумму';
                                       } else if (!values.friendId || values.friendId === -1) {
                                           errors.friendId = 'Выберите контакт из списка';
                                       }

                                       return errors;
                                   }}
                                   onSubmit={async (values) => {
                                       await runMutation({
                                           ...values,
                                           createdAt: moment().format('YYYY-MM-DD'),
                                           expirationDate: values.expirationDate && moment(new Date(values.expirationDate.year, values.expirationDate.month - 1, values.expirationDate.day)).format('YYYY-MM-DD')
                                       }).then(() => this.props.onCancelModal && this.props.onCancelModal());
                                   }}>
                        {({setFieldValue}: formik.FormikProps<IAddDebtValues>) => (
                            <formik.Form>
                                <formik.Field name="type">
                                    {({field, meta}: formik.FieldProps) => (
                                        <ui.FormItem top="Тип долга*" bottom={meta.touched && meta.error}>
                                            <ui.Radio {...field} value={DebtType.borrowed} defaultChecked>
                                                Дал в долг
                                            </ui.Radio>
                                            <ui.Radio {...field} value={DebtType.lent}>
                                                Взял в долг
                                            </ui.Radio>
                                        </ui.FormItem>
                                    )}
                                </formik.Field>
                                <formik.Field name="expirationDate">
                                    {({field, meta}: formik.FieldProps) => (
                                        <ui.FormItem top="Дата возврата" bottom={meta.touched && meta.error}
                                                     status={meta.touched && meta.error ? 'error' : undefined}>
                                            <ui.DatePicker
                                                {...field}
                                                min={{
                                                    day: Number(moment().format('D')),
                                                    month: Number(moment().format('M')),
                                                    year: Number(moment().format('YYYY'))
                                                }}
                                                max={{
                                                    day: Number(moment().format('D')),
                                                    month: Number(moment().format('M')),
                                                    year: Number(moment().format('YYYY')) + 1000
                                                }}
                                                defaultValue={{
                                                    day: Number(moment().format('D')),
                                                    month: Number(moment().format('M')),
                                                    year: Number(moment().format('YYYY'))
                                                }}
                                                onDateChange={(date) => {
                                                    return setFieldValue(field.name, date);
                                                }}
                                            />
                                        </ui.FormItem>
                                    )}
                                </formik.Field>
                                <formik.Field name="friendId">
                                    {({field, meta}: formik.FieldProps) => (
                                        <ui.FormItem top="Выберите друга*" bottom={meta.touched && meta.error}
                                                     onClick={this.props.onFetchClick}
                                                     status={meta.touched && meta.error ? 'error' : undefined}>
                                            <ui.Select
                                                {...field}
                                                defaultValue={"null"}
                                                options={this.state.friends}
                                                renderOption={({option, ...restProps}) => (
                                                    <ui.CustomSelectOption
                                                        {...restProps}
                                                        before={option.photo_100 && (
                                                            <ui.Avatar
                                                                src={option.photo_100}
                                                                size={24}
                                                            />
                                                        )}
                                                    />
                                                )}
                                                onChange={(event) => {
                                                    return setFieldValue(field.name, Number(event.target.value));
                                                }}
                                            />
                                        </ui.FormItem>
                                    )}
                                </formik.Field>


                                <formik.Field name="sum">
                                    {({field, meta}: formik.FieldProps) => (
                                        <ui.FormItem top="Сумма*" bottom={meta.touched && meta.error}
                                                     status={meta.touched && meta.error ? 'error' : undefined}>
                                            <ui.Input {...field} type="number" min={1}/>
                                        </ui.FormItem>
                                    )}
                                </formik.Field>
                                <ui.FormItem>
                                    <ui.Button type="submit" mode="primary" size="l" before={<icons.Icon24Add/>}
                                               stretched>
                                        Добавить
                                    </ui.Button>
                                </ui.FormItem>
                            </formik.Form>
                        )}
                    </formik.Formik>
                )}
            </FirebaseDatabaseMutation>
        </ui.ModalPage>;
    }
}

const mapStateToProps = (state: IState) => ({
    friends: getFriendsOptions(state),
    user: getUserState(state)
});

const mapDispatchToProps = (dispatch: Dispatch<FriendsAction>) => ({
    onFetchClick: async () => {
        dispatch(fetchFriends())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ui.withModalRootContext(AddDebtModal));
