export default {
	"Grid": [
		{
			"file": "Grid.js",
			"content": "import React from 'react';\nimport { Grid } from '@extjs/reactor/modern';\nimport data from './data';\n\nExt.require('Ext.grid.plugin.*')\n\nexport default function GridExample() {\n    const store = Ext.create('Ext.data.Store', {\n        data\n    });\n\n    return (\n        <Grid\n            plugins={[\n                { type: 'columnresizing'}\n            ]}\n            columns={[\n                { text: 'ID', dataIndex: 'id', width: 80, },\n                { text: 'First Name', dataIndex: 'first_name', width: 125 },\n                { text: 'Last Name', dataIndex: 'last_name', width: 125 },\n                { text: 'Email', dataIndex: 'email', width: 300 },\n                { text: 'Gender', dataIndex: 'gender', width: 100 },\n                { text: 'IP Address', dataIndex: 'ip_address', width: 200 },\n            ]}\n            store={store}\n            shadow={true} \n            title=\"Grid\" \n        />\n    )\n}"
		},
		{
			"file": "data.js",
			"content": "export default [{\n  \"id\": 1,\n  \"first_name\": \"Jerry\",\n  \"last_name\": \"Woods\",\n  \"email\": \"jwoods0@hp.com\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"153.116.29.168\"\n}, {\n  \"id\": 2,\n  \"first_name\": \"Todd\",\n  \"last_name\": \"Medina\",\n  \"email\": \"tmedina1@altervista.org\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"232.80.114.75\"\n}, {\n  \"id\": 3,\n  \"first_name\": \"Roy\",\n  \"last_name\": \"Andrews\",\n  \"email\": \"randrews2@berkeley.edu\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"146.231.62.140\"\n}, {\n  \"id\": 4,\n  \"first_name\": \"Russell\",\n  \"last_name\": \"Cooper\",\n  \"email\": \"rcooper3@yandex.ru\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"118.135.35.155\"\n}, {\n  \"id\": 5,\n  \"first_name\": \"Adam\",\n  \"last_name\": \"Gonzales\",\n  \"email\": \"agonzales4@yellowpages.com\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"225.132.24.150\"\n}, {\n  \"id\": 6,\n  \"first_name\": \"Nicholas\",\n  \"last_name\": \"Martinez\",\n  \"email\": \"nmartinez5@nyu.edu\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"63.88.181.86\"\n}, {\n  \"id\": 7,\n  \"first_name\": \"Michael\",\n  \"last_name\": \"Hunter\",\n  \"email\": \"mhunter6@narod.ru\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"201.26.139.28\"\n}, {\n  \"id\": 8,\n  \"first_name\": \"Shirley\",\n  \"last_name\": \"Burton\",\n  \"email\": \"sburton7@i2i.jp\",\n  \"gender\": \"Female\",\n  \"ip_address\": \"249.243.219.143\"\n}, {\n  \"id\": 9,\n  \"first_name\": \"Keith\",\n  \"last_name\": \"Palmer\",\n  \"email\": \"kpalmer8@vistaprint.com\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"18.96.108.188\"\n}, {\n  \"id\": 10,\n  \"first_name\": \"Bruce\",\n  \"last_name\": \"Shaw\",\n  \"email\": \"bshaw9@elpais.com\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"170.3.117.25\"\n}];"
		}
	],
	"Panel": [
		{
			"file": "Panel.js",
			"content": "import React from 'react';\nimport { Panel } from '@extjs/reactor/modern';\n\nexport default function PanelExample() {\n    return (\n        <Panel \n            shadow={true} \n            title=\"Panel\" \n            html=\"Panel Body\" \n            height={300}\n            width={500}\n        />\n    )\n}"
		}
	],
	"TabPanel": [
		{
			"file": "TabPanel.js",
			"content": "import React from 'react';\nimport { TabPanel, Panel } from '@extjs/reactor/modern';\n\nexport default function TabPanelExample() {\n    return (\n        <TabPanel height={300} width={500} shadow={true}>\n            <Panel title=\"Tab 1\">\n                Tab 1 content\n            </Panel>\n            <Panel title=\"Tab 2\">\n                Tab 2 content\n            </Panel>\n        </TabPanel>\n    )\n}"
		}
	],
	"Toolbar": [
		{
			"file": "Toolbar.js",
			"content": "import React, { Component } from 'react';\nimport { Toolbar, Panel, Button, SegmentedButton, Spacer } from '@extjs/reactor/modern';\n\nexport default class ToolbarExample extends Component {\n\n    constructor() {\n        super();\n        this.state = { message: '' }\n    }\n\n    tapHandler(button) {\n        this.setState({ message: `User tapped \"${button.getText()}\"` })\n    }\n\n    render() {\n        const { message } = this.state;\n\n        return (\n            <Panel height={300} width={500} shadow={true} bodyPadding={0}>\n                <Toolbar docked=\"top\">\n                    <Button text=\"Default\" onTap={this.tapHandler.bind(this)}/>\n                    <Spacer/>\n                    <SegmentedButton>\n                        <Button text=\"Option 1\" pressed={true}  onTap={this.tapHandler.bind(this)}/>\n                        <Button text=\"Option 2\" onTap={this.tapHandler.bind(this)}/>\n                    </SegmentedButton>\n                    <Spacer/>\n                    <Button ui=\"action\" text=\"Action\" onTap={this.tapHandler.bind(this)}/>\n                </Toolbar>\n               <div style={{padding: '20px'}}>{ message }</div>\n            </Panel>\n        )\n    }\n}"
		}
	],
	"Tree": [
		{
			"file": "Tree.js",
			"content": "import React from 'react';\nimport { Tree } from '@extjs/reactor/modern';\nimport data from './data';\n\nExt.require('Ext.app.ViewModel');\n\nexport default function TreeExample() {\n    const store = Ext.create('Ext.data.TreeStore', {\n        rootVisible: true,\n        root: data\n    })\n\n    return (\n        <Tree\n            width={350}\n            height={400}\n            store={store}\n            shadow={true}\n        />\n    )\n}"
		},
		{
			"file": "data.js",
			"content": "export default {\n    expanded: true,\n    text: 'All',\n    iconCls: 'x-fa fa-sitemap',\n    children: [{\n        text: 'Home',\n        iconCls: 'x-fa fa-home',\n        children: [{\n            text: 'Messages',\n            iconCls: 'x-fa fa-inbox',\n            leaf: true\n        }, {\n            text: 'Archive',\n            iconCls: 'x-fa fa-database',\n            children: [{\n                text: 'First',\n                iconCls: 'x-fa fa-sliders',\n                leaf: true\n            }, {\n                text: 'No Icon',\n                iconCls: null,\n                leaf: true\n            }]\n        }, {\n            text: 'Music',\n            iconCls: 'x-fa fa-music',\n            leaf: true\n        }, {\n            text: 'Video',\n            iconCls: 'x-fa fa-film',\n            leaf: true\n        }]\n    }, {\n        text: 'Users',\n        iconCls: 'x-fa fa-user',\n        children: [{\n            text: 'Tagged',\n            iconCls: 'x-fa fa-tag',\n            leaf: true\n        }, {\n            text: 'Inactive',\n            iconCls: 'x-fa fa-trash',\n            leaf: true\n        }]\n    }, {\n        text: 'Groups',\n        iconCls: 'x-fa fa-group',\n        leaf: true\n    }, {\n        text: 'Settings',\n        iconCls: 'x-fa fa-wrench',\n        children: [{\n            text: 'Sharing',\n            iconCls: 'x-fa fa-share-alt',\n            leaf: true\n        }, {\n            text: 'Notifications',\n            iconCls: 'x-fa fa-flag',\n            leaf: true\n        }, {\n            text: 'Network',\n            iconCls: 'x-fa fa-signal',\n            leaf: true\n        }]\n    }]\n};"
		}
	],
	"TreeList": [
		{
			"file": "TreeList.js",
			"content": "import React, { Component } from 'react';\nimport { Panel, TreeList, Toolbar, SegmentedButton, Button } from '@extjs/reactor/modern';\nimport data from './data';\n\nexport default class TreeListExample extends Component {\n\n    constructor() {\n        super();\n\n        this.store = Ext.create('Ext.data.TreeStore', {\n            rootVisible: true,\n            root: data\n        });\n\n        this.state = {\n            nav: false,\n            micro: false,\n            width: undefined\n        };\n    }\n\n    toggleNav(button, nav) {\n        this.setState({ nav });\n    }\n\n    toggleMicro(button, micro) {\n        this.setState({ \n            micro, \n            nav: micro || this.state.nav,\n            width: micro ? 56 : undefined\n        });\n    }\n\n    render() {\n        const { micro, nav, width } = this.state;\n\n        return (\n            <Panel title=\"TreeList\" shadow={true} layout=\"fit\">\n                <Toolbar docked=\"top\">\n                    <SegmentedButton allowMultiple={true}>\n                        <Button text=\"Nav\" pressed={nav} onPressedChange={this.toggleNav.bind(this)} disabled={micro}/>\n                        <Button text=\"Micro\" pressed={micro} onPressedChange={this.toggleMicro.bind(this)}/>\n                    </SegmentedButton>\n                </Toolbar>\n\n                <TreeList      \n                    ref=\"tree\"  \n                    width={width}\n                    expanderOnly={false}\n                    store={this.store}\n                    micro={micro}\n                    ui={nav ? 'nav' : null}\n                />\n            </Panel>\n        )\n    }\n}"
		},
		{
			"file": "data.js",
			"content": "export default {\n    expanded: true,\n    text: 'All',\n    iconCls: 'x-fa fa-sitemap',\n    children: [{\n        text: 'Home',\n        iconCls: 'x-fa fa-home',\n        children: [{\n            text: 'Messages',\n            iconCls: 'x-fa fa-inbox',\n            leaf: true\n        }, {\n            text: 'Archive',\n            iconCls: 'x-fa fa-database',\n            children: [{\n                text: 'First',\n                iconCls: 'x-fa fa-sliders',\n                leaf: true\n            }, {\n                text: 'No Icon',\n                iconCls: null,\n                leaf: true\n            }]\n        }, {\n            text: 'Music',\n            iconCls: 'x-fa fa-music',\n            leaf: true\n        }, {\n            text: 'Video',\n            iconCls: 'x-fa fa-film',\n            leaf: true\n        }]\n    }, {\n        text: 'Users',\n        iconCls: 'x-fa fa-user',\n        children: [{\n            text: 'Tagged',\n            iconCls: 'x-fa fa-tag',\n            leaf: true\n        }, {\n            text: 'Inactive',\n            iconCls: 'x-fa fa-trash',\n            leaf: true\n        }]\n    }, {\n        text: 'Groups',\n        iconCls: 'x-fa fa-group',\n        leaf: true\n    }, {\n        text: 'Settings',\n        iconCls: 'x-fa fa-wrench',\n        children: [{\n            text: 'Sharing',\n            iconCls: 'x-fa fa-share-alt',\n            leaf: true\n        }, {\n            text: 'Notifications',\n            iconCls: 'x-fa fa-flag',\n            leaf: true\n        }, {\n            text: 'Network',\n            iconCls: 'x-fa fa-signal',\n            leaf: true\n        }]\n    }]\n};"
		}
	]
}