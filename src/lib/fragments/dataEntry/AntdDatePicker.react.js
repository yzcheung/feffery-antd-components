import React, { useEffect, useContext } from 'react';
import { DatePicker, ConfigProvider } from 'antd';
import moment from 'moment';
import { isString, isUndefined, isObject } from 'lodash';
import "moment/locale/zh-cn";
import { str2Locale } from '../../components/locales.react';
import useCss from '../../hooks/useCss';
import PropsContext from '../../contexts/PropsContext';
import { propTypes, defaultProps } from '../../components/dataEntry/AntdDatePicker.react';

// 定义日期选择组件AntdDatePicker，api参数参考https://ant.design/components/date-picker-cn/
const AntdDatePicker = (props) => {
    // 取得必要属性或参数
    let {
        id,
        className,
        style,
        key,
        locale,
        setProps,
        picker,
        format,
        firstDayOfWeek,
        disabled,
        showTime,
        allowClear,
        placeholder,
        disabledDatesStrategy,
        defaultPickerValue,
        value,
        defaultValue,
        bordered,
        size,
        status,
        popupContainer,
        readOnly,
        placement,
        extraFooter,
        showToday,
        persistence,
        persisted_props,
        persistence_type,
        loading_state,
        batchPropsNames
    } = props;

    // 批属性监听
    useEffect(() => {
        if (batchPropsNames && batchPropsNames.length !== 0) {
            let _batchPropsValues = {};
            for (let propName of batchPropsNames) {
                _batchPropsValues[propName] = props[propName];
            }
            setProps({
                batchPropsValues: _batchPropsValues
            })
        }
    })

    const context = useContext(PropsContext)
    locale = (context && context.locale) || locale

    useEffect(() => {
        // 初始化value
        if (defaultValue && !value) {
            // 当defaultValue不为空且value为空时，为value初始化defaultValue对应值
            setProps({ value: defaultValue })
        }

        // 调整不同showTime下的format缺省参数
        if (showTime && !format) {
            setProps({
                format: 'YYYY-MM-DD HH:mm:ss'
            })
        } else if (!showTime && !format) {
            setProps({
                format: 'YYYY-MM-DD'
            })
        }

        // defaultPickerValue为空时默认定位到今日对应面板位置
        if (!defaultPickerValue) {
            setProps({
                defaultPickerValue: moment(new Date()).format(format || 'YYYY-MM-DD')
            })
        }
    }, [])

    useEffect(() => {
        if (!isUndefined(firstDayOfWeek)) {
            moment.locale(
                locale === 'en-us' ? 'en' : locale,
                {
                    week: {
                        dow: firstDayOfWeek
                    }
                }
            )
        }
    }, [firstDayOfWeek])

    const onChange = (date, dateString) => {
        if (isString(dateString)) {
            setProps({ value: dateString })
        }
    }

    const checkDisabledDate = current => {

        // 根据disabledDatesStrategy设定的各个子条件进行是否禁用判断
        for (let i = 0; i < disabledDatesStrategy.length; i++) {
            let strategy = disabledDatesStrategy[i];
            // 判断当前子策略方式
            if (strategy.mode === 'eq') {
                // 判断当前子策略约束目标
                if (strategy.target === 'day') {
                    if (current.date() === strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'month') {
                    if (current.month() === strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'quarter') {
                    if (current.quarter() === strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'year') {
                    if (current.year() === strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfYear') {
                    if (current.dayOfYear() === strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfWeek') {
                    if (current.isoWeekday() === strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'specific-date') {
                    if (current.isSame(moment(strategy.value, 'YYYY-MM-DD'))) {
                        return true;
                    }
                }
            } else if (strategy.mode === 'ne') {
                // 判断当前子策略约束目标
                if (strategy.target === 'day') {
                    if (current.date() !== strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'month') {
                    if (current.month() !== strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'quarter') {
                    if (current.quarter() !== strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'year') {
                    if (current.year() !== strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfYear') {
                    if (current.dayOfYear() !== strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfWeek') {
                    if (current.isoWeekday() !== strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'specific-date') {
                    if (!current.isSame(moment(strategy.value, 'YYYY-MM-DD'))) {
                        return true;
                    }
                }
            } else if (strategy.mode === 'le') {
                // 判断当前子策略约束目标
                if (strategy.target === 'day') {
                    if (current.date() <= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'month') {
                    if (current.month() <= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'quarter') {
                    if (current.quarter() <= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'year') {
                    if (current.year() <= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfYear') {
                    if (current.dayOfYear() <= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfWeek') {
                    if (current.isoWeekday() <= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'specific-date') {
                    if (current.isSameOrBefore(moment(strategy.value, 'YYYY-MM-DD'))) {
                        return true;
                    }
                }
            } else if (strategy.mode === 'lt') {
                // 判断当前子策略约束目标
                if (strategy.target === 'day') {
                    if (current.date() < strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'month') {
                    if (current.month() < strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'quarter') {
                    if (current.quarter() < strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'year') {
                    if (current.year() < strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfYear') {
                    if (current.dayOfYear() < strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfWeek') {
                    if (current.isoWeekday() < strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'specific-date') {
                    if (current.isBefore(moment(strategy.value, 'YYYY-MM-DD'))) {
                        return true;
                    }
                }
            } else if (strategy.mode === 'ge') {
                // 判断当前子策略约束目标
                if (strategy.target === 'day') {
                    if (current.date() >= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'month') {
                    if (current.month() >= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'quarter') {
                    if (current.quarter() >= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'year') {
                    if (current.year() >= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfYear') {
                    if (current.dayOfYear() >= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfWeek') {
                    if (current.isoWeekday() >= strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'specific-date') {
                    if (current.isSameOrAfter(moment(strategy.value, 'YYYY-MM-DD'))) {
                        return true;
                    }
                }
            } else if (strategy.mode === 'gt') {
                // 判断当前子策略约束目标
                if (strategy.target === 'day') {
                    if (current.date() > strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'month') {
                    if (current.month() > strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'quarter') {
                    if (current.quarter() > strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'year') {
                    if (current.year() > strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfYear') {
                    if (current.dayOfYear() > strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfWeek') {
                    if (current.isoWeekday() > strategy.value) {
                        return true;
                    }
                } else if (strategy.target === 'specific-date') {
                    if (current.isAfter(moment(strategy.value, 'YYYY-MM-DD'))) {
                        return true;
                    }
                }
            } else if (strategy.mode === 'in') {
                // 判断当前子策略约束目标
                if (strategy.target === 'day') {
                    if (strategy.value.includes(current.date())) {
                        return true;
                    }
                } else if (strategy.target === 'month') {
                    if (strategy.value.includes(current.month())) {
                        return true;
                    }
                } else if (strategy.target === 'quarter') {
                    if (strategy.value.includes(current.quarter())) {
                        return true;
                    }
                } else if (strategy.target === 'year') {
                    if (strategy.value.includes(current.year())) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfYear') {
                    if (strategy.value.includes(current.dayOfYear())) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfWeek') {
                    if (strategy.value.includes(current.isoWeekday())) {
                        return true;
                    }
                }
            } else if (strategy.mode === 'not-in') {
                // 判断当前子策略约束目标
                if (strategy.target === 'day') {
                    if (!strategy.value.includes(current.date())) {
                        return true;
                    }
                } else if (strategy.target === 'month') {
                    if (!strategy.value.includes(current.month())) {
                        return true;
                    }
                } else if (strategy.target === 'quarter') {
                    if (!strategy.value.includes(current.quarter())) {
                        return true;
                    }
                } else if (strategy.target === 'year') {
                    if (!strategy.value.includes(current.year())) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfYear') {
                    if (!strategy.value.includes(current.dayOfYear())) {
                        return true;
                    }
                } else if (strategy.target === 'dayOfWeek') {
                    if (!strategy.value.includes(current.isoWeekday())) {
                        return true;
                    }
                }
            } else if (strategy.mode === 'in-enumerate-dates') {
                if (strategy.value.includes(current.format(format))) {
                    return true;
                }
            } else if (strategy.mode === 'not-in-enumerate-dates') {
                if (!strategy.value.includes(current.format(format))) {
                    return true;
                }
            }
        }
    }

    // 返回定制化的前端组件
    return (
        <div>
            <ConfigProvider
                locale={str2Locale.get(locale)}
            >
                <DatePicker
                    id={id}
                    className={
                        isString(className) ?
                            className :
                            (className ? useCss(className) : undefined)
                    }
                    style={style}
                    key={key}
                    format={format}
                    onChange={onChange}
                    picker={picker}
                    calendarStartDay={firstDayOfWeek}
                    disabled={
                        context && !isUndefined(context.componentDisabled) ?
                            context.componentDisabled :
                            disabled
                    }
                    placeholder={placeholder}
                    bordered={bordered}
                    size={
                        context && !isUndefined(context.componentSize) ?
                            context.componentSize :
                            size
                    }
                    disabledDate={disabledDatesStrategy ? checkDisabledDate : undefined}
                    defaultPickerValue={moment(defaultPickerValue, format)}
                    value={value ? moment(value, format) : undefined}
                    defaultValue={defaultValue ? moment(defaultValue, format) : undefined}
                    showTime={
                        // 处理时间选择面板在日期选定后的默认选中值
                        isObject(showTime) && showTime.defaultValue ?
                            {
                                defaultValue: moment(showTime.defaultValue, showTime.format || 'HH:mm:ss')
                            } :
                            showTime
                    }
                    allowClear={isUndefined(readOnly) ? allowClear : !readOnly}
                    status={status}
                    placement={placement}
                    open={isUndefined(readOnly) || !readOnly ? undefined : false}
                    inputReadOnly={readOnly}
                    renderExtraFooter={() => extraFooter}
                    showToday={showToday}
                    persistence={persistence}
                    persisted_props={persisted_props}
                    persistence_type={persistence_type}
                    data-dash-is-loading={
                        (loading_state && loading_state.is_loading) || undefined
                    }
                    getPopupContainer={
                        popupContainer === 'parent' ?
                            (triggerNode) => triggerNode.parentNode :
                            undefined
                    }
                />
            </ConfigProvider>
        </div>
    );
}

export default AntdDatePicker;

AntdDatePicker.defaultProps = defaultProps;
AntdDatePicker.propTypes = propTypes;