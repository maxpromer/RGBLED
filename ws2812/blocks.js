Blockly.Blocks["neopixel_init"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_INIT_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "field_number",
				"name": "len",
				"value": 0,
				"min": 0,
				"precision": 1
			}, {
				"type": "field_dropdown",
				"name": "mode",
				"options": [
					[ "GRB", "0" ],
					[ "RGB", "1" ]
				]
			}],
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_INIT_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["neopixel_set_brightness"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_SET_BRIGHTNESS_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "brightness",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_SET_BRIGHTNESS_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	},
	xmlToolbox: function() {
		return `
		<block type="neopixel_set_brightness">
			<value name="brightness">
				<shadow type="math_number">
					<field name="VALUE">50</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

Blockly.Blocks["neopixel_set_pixel"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_SET_PIXEL_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "n",
				"check": "Number"
			}, {
				"type": "field_colour",
				"name": "hex",
				"colour": "#ff0000"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_SET_PIXEL_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	},
	xmlToolbox: function() {
		return `
		<block type="neopixel_set_pixel">
			<value name="n">
				<shadow type="math_number">
					<field name="VALUE">0</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

Blockly.Blocks["neopixel_set_pixel_rgb"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_SET_PIXEL_RGB_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "n",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "red",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "green",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "blue",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_SET_PIXEL_RGB_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	},
	xmlToolbox: function() {
		return `
		<block type="neopixel_set_pixel_rgb">
			<value name="n">
				<shadow type="math_number">
					<field name="VALUE">0</field>
				</shadow>
			</value>
		  	<value name="red">
				<shadow type="math_number">
					<field name="VALUE">255</field>
				</shadow>
			</value>
			<value name="green">
				<shadow type="math_number">
					<field name="VALUE">255</field>
				</shadow>
			</value>
			<value name="blue">
				<shadow type="math_number">
					<field name="VALUE">255</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

Blockly.Blocks["neopixel_fill"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_FILL_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "field_colour",
				"name": "hex",
				"colour": "#ff0000"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_FILL_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["neopixel_fill_rgb"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_FILL_RGB_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "red",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "green",
				"check": "Number"
			}, {
				"type": "input_value",
				"name": "blue",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_FILL_RGB_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	},
	xmlToolbox: function() {
		return `
		<block type="neopixel_fill_rgb">
		  	<value name="red">
				<shadow type="math_number">
					<field name="VALUE">255</field>
				</shadow>
			</value>
			<value name="green">
				<shadow type="math_number">
					<field name="VALUE">255</field>
				</shadow>
			</value>
			<value name="blue">
				<shadow type="math_number">
					<field name="VALUE">255</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

Blockly.Blocks["neopixel_show"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_SHOW_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_SHOW_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["neopixel_clear"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_CLEAR_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_CLEAR_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	}
};

Blockly.Blocks["neopixel_rainbow"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_RAINBOW_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "delay",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_RAINBOW_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	},
	xmlToolbox: function() {
		return `
		<block type="neopixel_rainbow">
		  	<value name="delay">
				<shadow type="math_number">
					<field name="VALUE">25</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

Blockly.Blocks["neopixel_rainbow_cycle"] = {
	init: function() {
		this.jsonInit({
			"message0": Blockly.Msg.NEOPIXEL_RAINBOW_CYCLE_MESSAGE,
			"args0": [{
				"type": "field_dropdown",
				"name": "pin",
				"options": [
					[ "OUT1", "26" ],
					[ "OUT2", "27" ],
					[ "DAC1", "25" ],
					[ "18", "18" ],
					[ "19", "19" ],
					[ "23", "23" ],
					[ "17", "17" ]
				]
			}, {
				"type": "input_value",
				"name": "delay",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 75,
			"tooltip": Blockly.Msg.NEOPIXEL_RAINBOW_CYCLE_TOOLTIP,
			"helpUrl": "https://www.inex.co.th/"
		});
	},
	xmlToolbox: function() {
		return `
		<block type="neopixel_rainbow_cycle">
		  	<value name="delay">
				<shadow type="math_number">
					<field name="VALUE">25</field>
				</shadow>
			</value>
		</block>
		`;
	}
};

