import { useState } from 'react'
import { Canvas } from './components/Canvas'
import Node from './components/Node'
import './App.css'
import { nodes } from './nodes.js';
import { color } from './nodes.js';
import { Nav } from './Nav.jsx';

function App() {
  const [playing, setPlaying] = useState(false);

  const [blocks, setBlocks] = useState([
      { 
          children: [
              {"title": "Start", "params": [{"type": "number", "value": 0, "name": "param1"}], "callback": (params) => {}, "type": "start", "color": color.start, "active": false},
              {"title": "Label <param>", "params": [{"type": "text", "value": "label1", "name": "labelname"}], "callback": () => {console.log('Node 3 callback')}, "type": "label", "color": color.label, "active": false},
              {"title": "Node 4", "params": [], "callback": () => {console.log('Node 4 callback')}, "type": "normal", "color": color.normal, "active": false}, 
              {"title": "Jump <param> if $<param> < $<param>", "params": [{"type": "text", "value": "label1", "name": "tolabel"}, {"type": "number", "value": "label1", "name": "tolabel"}, {"type": "number", "value": "label1", "name": "tolabel"}], "callback": () => {return true}, "type": "jump", "color": color.normal, "active": false}], 
          position: { x: 50, y: 50 } 
      }
  ]);


  return (
    <div className="app">
      <Nav></Nav>

      <div className="node-palette">
        
      </div>

      <button
        className={"control-button " + (playing ? "stop-button" : "play-button")}
        onClick={() => setPlaying(!playing)}>{playing ? "Stop" : "Play"}</button>



      <div className='body'>
        <div className='left'>

          <div>
            {
              nodes.map((node, index) => (
                <Node 
                key={index} 
                node={node} 
                onDragStart={(e, rect) => {
                  console.log("Drag started");
                }}
                onDragEnd={(e, rect) => handleDragEnd(index, e, rect)}
                connectedleft={false}
                connectedright={false}
                display={true}
                />
              ))
            }
          </div>
          
        </div>
        <Canvas className='canvas' playing={playing} setPlaying={setPlaying} blocks={blocks} setBlocks={setBlocks}></Canvas>
        <div className='right'></div>
      </div>

      
    </div>
  )
}

export default App
