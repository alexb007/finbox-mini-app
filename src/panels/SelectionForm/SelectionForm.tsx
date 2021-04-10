import React from 'react';
import * as formik from "formik";
import {ISelectionValues} from "../../components/SelectionController/types";
import * as ui from "@vkontakte/vkui";
import NumberFormat from "react-number-format";
import ISelectionFormProps from "./types";
import {IState} from "../../store/types/state";
import {Dispatch} from "redux";
import {ChancesAction} from "../../store/actions/chances/types";
import {LOAD_CHANCES} from "../../store/constants/chances";
import {connect} from "react-redux";
import {FETCH_PHONE, FETCH_EMAIL} from "../../store/constants/user";
import {UserAction} from "../../store/actions/user/types";
import {UPDATE_FORM_VALUES} from "../../store/constants/selection";
import {SelectionAction} from "../../store/actions/selection/types";
import {Icon24LogoVkColor, Icon28LogoVkColor, Icon36LogoVk} from '@vkontakte/icons';
import './styles.scss';

/**
 * The selection form.
 *
 * @param props
 * @constructor
 */
class SelectionFormPanel extends React.Component<ISelectionFormProps> {


    render() {
        const sliderRanges = {
            min: 5000,
            max: 50000
        }

        let initialValues = this.props.state

        return <ui.Card className="selection-card" mode="shadow" id={this.props.user?.id?.toString()}>

            <formik.Formik initialValues={initialValues}
                           enableReinitialize
                           validate={(values: ISelectionValues): formik.FormikErrors<ISelectionValues> => {
                               const errors: formik.FormikErrors<ISelectionValues> = {};

                               if (!values.email) {
                                   errors.email = 'Введите корректный адрес электронной почты';
                               }
                               if (!values.fullname) {
                                   errors.fullname = 'Введите как вас зовут';
                               }
                               if (!values.sum) {
                                   errors.sum = 'Введите сумму';
                               }
                               if (!values.phone) {
                                   errors.phone = `Введите номер телефона`;
                               } else if (!values.phone.startsWith('+7')) {
                                   errors.phone = `Введите номер телефона с префиксом +7`;
                               } else if (![12, 18].includes(values.phone.length)) {
                                   errors.phone = `Введите корректный номер телефона`;
                               }
                               return errors;
                           }}
                           onSubmit={async (values) => {
                               this.props.loadChances(
                                   1,
                                   values.sum,
                                   values.email,
                                   values.phone
                               );
                               this.props.saveFormState(values)
                           }}>

                {({setFieldValue, values}: formik.FormikProps<ISelectionValues>) => (

                    <formik.Form>
                        <formik.Field className="selection-card__sum" name="sum">
                            {({field, meta}: formik.FieldProps) => (
                                <ui.FormItem top={
                                    <div>
                                        <ui.Text className="selection-card__sum__label"
                                                 weight={"regular"}>
                                            Сумма займа
                                        </ui.Text>
                                        <NumberFormat displayType={'text'}
                                                      className="selection-card__sum__value"
                                                      value={values.sum} thousandSeparator={" "}
                                                      suffix={' ₽'}/>
                                    </div>
                                } bottom={
                                    <div className="selection-card__sum__bottom">
                                        <NumberFormat displayType={'text'} value={sliderRanges.min}
                                                      thousandSeparator={" "}
                                                      suffix={' ₽'}/>
                                        <NumberFormat displayType={'text'} value={sliderRanges.max}
                                                      thousandSeparator={" "}
                                                      suffix={' ₽'}/>
                                    </div>
                                }>
                                    <ui.Slider
                                        className="selection-card__sum__slider"
                                        {...field}
                                        step={500}
                                        {...sliderRanges}
                                        value={values.sum}
                                        onChange={value => {
                                            this.props.saveFormState(values)
                                            setFieldValue(field.name, value)
                                        }}
                                    />
                                </ui.FormItem>
                            )}
                        </formik.Field>

                        <formik.Field name="fullname">
                            {({field, meta}: formik.FieldProps) => (
                                <ui.FormItem top="Как вас зовут?"
                                             bottom={meta.touched && meta.error}
                                             status={meta.touched && meta.error ? 'error' : undefined}>
                                    <ui.Input {...field} placeholder={"Введите как вас зовут"} type="text"
                                              onChange={(event) => this.props.saveFormState({
                                                  ...values,
                                                  fullname: event.target.value
                                              })}/>
                                </ui.FormItem>
                            )}
                        </formik.Field>
                        <formik.Field name="email">
                            {({field, meta}: formik.FieldProps) => (
                                <ui.FormItem top={"Адрес электронной почты"}
                                             bottom={meta.touched && meta.error}
                                             status={meta.touched && meta.error ? 'error' : undefined}>
                                    <ui.Input {...field} type="email"
                                              placeholder={"Введите эл. почту"}
                                              onChange={(event) => this.props.saveFormState({
                                                  ...values,
                                                  email: event.target.value
                                              })}/>

                                    <ui.IconButton type={'button'} className={'inline-button'}
                                                   icon={<Icon28LogoVkColor onClick={() => this.props.loadEmail()}/>}/>
                                </ui.FormItem>
                            )}
                        </formik.Field>
                        <formik.Field name="phone">
                            {({field, meta}: formik.FieldProps) => (
                                <ui.FormItem
                                    top={"Номер мобильного телефона"}
                                    bottom={meta.touched && meta.error}
                                    status={meta.touched && meta.error ? 'error' : undefined}>
                                    <ui.Input className={"phone-input"} {...field} type="tel"
                                              placeholder={"Номер моб. тел."}
                                              onChange={(event) => this.props.saveFormState({
                                                  ...values,
                                                  phone: event.target.value
                                              })}/>
                                    <ui.IconButton type={'button'} className={'inline-button'}
                                                   icon={<Icon28LogoVkColor onClick={() => this.props.loadPhone()}/>}/>
                                </ui.FormItem>
                            )}
                        </formik.Field>


                        <ui.FormItem>
                            <ui.Button type="submit" mode="primary" size="l"
                                       stretched>
                                Подобрать займ
                            </ui.Button>
                        </ui.FormItem>
                    </formik.Form>
                )}
            </formik.Formik>
        </ui.Card>
    }
}


const mapStateToProps = (state: IState) => ({
    state: state.selectionForm,
    user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch<ChancesAction | UserAction | SelectionAction>) => ({
    loadChances: (user: number | undefined, amount: number | undefined, email: string | null, phone: string | null) => dispatch({
        type: LOAD_CHANCES, payload: {
            user,
            amount,
            email,
            phone
        }
    }),
    loadPhone: () => dispatch({type: FETCH_PHONE}),
    loadEmail: () => dispatch({type: FETCH_EMAIL}),
    saveFormState: (values: ISelectionValues) => dispatch({type: UPDATE_FORM_VALUES, payload: {...values}})
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectionFormPanel);
