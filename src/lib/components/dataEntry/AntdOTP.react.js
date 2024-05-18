import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

const LazyAntdOTP = React.lazy(() => import(/* webpackChunkName: "data_entry" */ '../../fragments/dataEntry/AntdOTP.react'));

/**
 * 一次性密码框组件AntdOTP
 */
const AntdOTP = (props) => {
    return (
        <Suspense fallback={null}>
            <LazyAntdOTP {...props} />
        </Suspense>
    );
}

AntdOTP.propTypes = {
    /**
     * 组件唯一id
     */
    id: PropTypes.string,

    /**
     * 对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果
     */
    key: PropTypes.string,

    /**
     * 当前组件css样式
     */
    style: PropTypes.object,

    /**
     * 当前组件css类名，支持[动态css](/advanced-classname)
     */
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),

    /**
     * 配合`AntdForm`表单批量值搜集/控制功能使用，充当当前表单项的字段名，以`id`作为缺省值
     */
    name: PropTypes.string,

    /**
     * 监听或设置已选值
     */
    value: PropTypes.string,

    /**
     * 初始化已选值
     */
    defaultValue: PropTypes.string,

    /**
     * 是否禁用当前组件
     * 默认值：`false`
     */
    disabled: PropTypes.bool,

    /**
     * 单体输入框数量
     * 默认值：`6`
     */
    length: PropTypes.number,

    /**
     * 控制校验状态，可选项有`'error'`、`'warning'`
     */
    status: PropTypes.oneOf(['error', 'warning']),

    /**
     * 当前组件尺寸规格，可选项有`'small'`、`'middle'`、`'large'`
     * 默认值：`'middle'`
     */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /**
     * 形态变体类型，可选项有`'outlined'`、`'borderless'`、`'filled'`，其中`'outlined'`等价于`bordered=True`，但优先级更高
     */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /**
     * `data-*`格式属性通配
     */
    'data-*': PropTypes.string,

    /**
     * `aria-*`格式属性通配
     */
    'aria-*': PropTypes.string,

    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string
    }),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * 是否开启[属性持久化](/prop-persistence)
     */
    persistence: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * 开启属性持久化功能的若干属性名，可选项有`'value'`
     * 默认值：`['value']`
     */
    persisted_props: PropTypes.arrayOf(PropTypes.oneOf(['value'])),

    /**
     * 属性持久化存储类型，可选项有`'local'`（本地持久化），`'session'`（会话持久化），`'memory'`（内存持久化）
     * 默认值：`'local'`
     */
    persistence_type: PropTypes.oneOf(['local', 'session', 'memory'])
};

// 设置默认参数
AntdOTP.defaultProps = {
    disabled: false,
    length: 6,
    size: 'middle',
    variant: 'outlined',
    persisted_props: ['value'],
    persistence_type: 'local'
}

export default AntdOTP;

export const propTypes = AntdOTP.propTypes;
export const defaultProps = AntdOTP.defaultProps;