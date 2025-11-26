/* https://coolors.co/palette/ef476f-ffd166-06d6a0-118ab2-073b4c */
const color = {
    "start": "#06d6a0",
    "normal": "#f1c253ff",
    "label": "#ef476f"
};

const nodes = [
    {"title": "Start", "params": [], "callback": () => {}, "type": "start", "color": color.start, "active": false},
    {"title": "AddI", "text": "$<param> = $<param> + <param>", "params": [{"type": "number", "value": "0", "name": "tolabel"}, {"type": "number", "value": 0, "name": "tolabel"}, {"type": "number", "value": 0, "name": "tolabel", max: 1024}], "callback": 
    (params, registers, setRegister) => {
        console.log(params)
        setRegister(params[0], registers[params[1]] + params[2]);
    }, "type": "normal", "color": color.normal, "active": false}, 
    {"title": "Jump if Less", "text": "<param> $<param> < $<param>", "params": [{"type": "text", "value": "name", "name": "tolabel"}, {"type": "number", "value": "0", "name": "tolabel"}, {"type": "number", "value": "0", "name": "tolabel"}], "callback": 
    (params, registers, setRegister) => {
        return registers[params[1]] < registers[params[2]];
    }, "type": "jump", "color": color.normal, "active": false},

    {"title": "Label", "text": "<param>", "params": [{"type": "text", "value": "name", "name": "labelname"}], "callback": () => {console.log('Node 3 callback')}, "type": "label", "color": color.label, "active": false},    
];

export { nodes, color };