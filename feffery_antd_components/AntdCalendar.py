# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AntdCalendar(Component):
    """An AntdCalendar component.


Keyword arguments:

- id (string; optional)

- className (string; optional)

- defaultValue (dict; optional)

    `defaultValue` is a dict with keys:

    - format (string; optional)

    - value (string; optional)

- disabledDates (dict; optional)

    `disabledDates` is a dict with keys:

    - dates (list of strings; optional)

    - format (string; optional)

- format (string; default 'YYYY-MM-DD')

- loading_state (dict; optional)

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- locale (a value equal to: 'zh-cn', 'en-us'; default 'zh-cn')

- persisted_props (list of a value equal to: 'value's; default ['value']):
    Properties whose user interactions will persist after refreshing
    the  component or the page. Since only `value` is allowed this
    prop can  normally be ignored.

- persistence (boolean | string | number; optional):
    Used to allow user interactions in this component to be persisted
    when  the component - or the page - is refreshed. If `persisted`
    is truthy and  hasn't changed from its previous value, a `value`
    that the user has  changed while using the app will keep that
    change, as long as  the new `value` also matches what was given
    originally.  Used in conjunction with `persistence_type`.

- persistence_type (a value equal to: 'local', 'session', 'memory'; default 'local'):
    Where persisted user changes will be stored:  memory: only kept in
    memory, reset on page refresh.  local: window.localStorage, data
    is kept after the browser quit.  session: window.sessionStorage,
    data is cleared once the browser quit.

- size (a value equal to: 'default', 'large'; default 'default')

- style (dict; optional)

- validRange (list of dicts; optional)

    `validRange` is a list of dicts with keys:

    - format (string; optional)

    - value (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, locale=Component.UNDEFINED, validRange=Component.UNDEFINED, disabledDates=Component.UNDEFINED, defaultValue=Component.UNDEFINED, format=Component.UNDEFINED, size=Component.UNDEFINED, loading_state=Component.UNDEFINED, persistence=Component.UNDEFINED, persisted_props=Component.UNDEFINED, persistence_type=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'defaultValue', 'disabledDates', 'format', 'loading_state', 'locale', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'validRange']
        self._type = 'AntdCalendar'
        self._namespace = 'feffery_antd_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'defaultValue', 'disabledDates', 'format', 'loading_state', 'locale', 'persisted_props', 'persistence', 'persistence_type', 'size', 'style', 'validRange']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AntdCalendar, self).__init__(**args)
