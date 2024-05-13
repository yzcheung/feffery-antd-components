# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCardMeta(Component):
    """An AntdCardMeta component.
结构化卡片组件AntdCardMeta

Keyword arguments:

- id (string; optional):
    组件唯一id.

- aria-* (string; optional):
    `aria-*`格式属性通配.

- avatar (a list of or a singular dash component, string or number; optional):
    组件型，头像元素.

- className (string | dict; optional):
    当前组件css类名，支持[动态css](/advanced-classname).

- data-* (string; optional):
    `data-*`格式属性通配.

- description (a list of or a singular dash component, string or number; optional):
    组件型，描述内容.

- key (string; optional):
    对当前组件的`key`值进行更新，可实现强制重绘当前组件的效果.

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- style (dict; optional):
    当前组件css样式.

- title (a list of or a singular dash component, string or number; optional):
    组件型，标题内容."""
    _children_props = ['avatar', 'description', 'title']
    _base_nodes = ['avatar', 'description', 'title', 'children']
    _namespace = 'feffery_antd_components'
    _type = 'AntdCardMeta'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, key=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, avatar=Component.UNDEFINED, description=Component.UNDEFINED, title=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'aria-*', 'avatar', 'className', 'data-*', 'description', 'key', 'loading_state', 'style', 'title']
        self._valid_wildcard_attributes =            ['data-', 'aria-']
        self.available_properties = ['id', 'aria-*', 'avatar', 'className', 'data-*', 'description', 'key', 'loading_state', 'style', 'title']
        self.available_wildcard_properties =            ['data-', 'aria-']
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(AntdCardMeta, self).__init__(**args)
