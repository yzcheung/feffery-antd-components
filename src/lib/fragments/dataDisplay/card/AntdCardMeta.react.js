// react核心
import React from 'react';
// antd核心
import { Card } from 'antd';
// 辅助库
import { isString } from 'lodash';
import { pickBy } from 'ramda';
// 自定义hooks
import useCss from '../../../hooks/useCss';
// 参数类型
import { propTypes, defaultProps } from '../../../components/dataDisplay/card/AntdCardMeta.react';

const { Meta } = Card;

/**
 * 结构化卡片组件AntdCardMeta
 */
const AntdCardMeta = (props) => {
    let {
        id,
        className,
        style,
        key,
        avatar,
        description,
        title,
        setProps,
        loading_state
    } = props;

    return (
        <Meta
            // 提取具有data-*或aria-*通配格式的属性
            {...pickBy((_, k) => k.startsWith('data-') || k.startsWith('aria-'), props)}
            id={id}
            className={
                isString(className) ?
                    className :
                    (className ? useCss(className) : undefined)
            }
            style={style}
            key={key}
            avatar={avatar}
            description={description}
            title={title}
            data-dash-is-loading={
                (loading_state && loading_state.is_loading) || undefined
            }>
        </Meta>
    );
}

export default AntdCardMeta;

AntdCardMeta.defaultProps = defaultProps;
AntdCardMeta.propTypes = propTypes;