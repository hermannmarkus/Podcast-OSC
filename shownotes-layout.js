loadedInterfaceName = "show notes";

interfaceOrientation = "landscape";

pages = [
    [
        {
            "name": "refresh",
            "type": "Button",
            "bounds": [.8, 0, .1, .1],
            "startingValue": 0,
            "isLocal": true,
            "mode": "contact",
            "ontouchstart": "interfaceManager.refreshInterface()",
            "stroke": "#aaa",
            "label": "refresh",
        },
        {
            "name": "tabButton",
            "type": "Button",
            "bounds": [.9, 0, .1, .1],
            "mode": "toggle",
            "stroke": "#aaa",
            "isLocal": true,
            "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
            "label": "menu",
        },
        // Shownote Button
        {
            "name":"createNote",
            "type":"Button",
            "mode": "momentary",
            "min": 0, "max": 1,
            "address"  : "/note",
            "startingValue": 0,
            "bounds": [ 0, .8, 1, .2],
            "stroke": "#639",
            "label": "Add Shownote",
            "labelSize": 40,
            "address":"createNote"
        },
        {
            "name":"ping",
            "type":"Button",
            "mode": "momentary",
            "min": 0, "max": 1,
            "address"  : "/note",
            "startingValue": 0,
            "bounds": [ .9, .1, .1, .1],
            "stroke": "#639",
            "label": "ping",

            "address":"ping"
        },
        // Info Text
        {
            "name": "infoText",
            "type": "Label",
            "bounds": [.4, 0, .2, .05],
            "value": "OSC Show Notes",
            "backgroundColor": "#639",
            "color": "#000",
            "size": 20,
            "verticalCenter": true,
            "align": "center",
        }
    ]
];
