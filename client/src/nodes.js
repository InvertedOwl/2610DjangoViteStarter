/* https://coolors.co/palette/ef476f-ffd166-06d6a0-118ab2-073b4c */
const color = {
    "start": "#06d6a0",
    "normal": "#f1c253ff",
    "label": "#ef476f"
};

const nodes = [
    {"title": "Start", "params": [], "callback": () => {}, "type": "start", "color": color.start, "active": false},
    {"title": "Jump <param>", "params": [{"type": "text", "value": "label1", "name": "tolabel"}], "callback": () => {return true}, "type": "jump", "color": color.normal, "active": false},
    {"title": "Label <param>", "params": [{"type": "text", "value": "label1", "name": "labelname"}], "callback": () => {console.log('Node 3 callback')}, "type": "label", "color": color.label, "active": false}
];

export { nodes, color };