import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';
import nodeMap from '../data/nodeMap';

 
// graph payload (with minimalist structure)

const nodes = nodeMap.nodes;
const links = [];
nodes.forEach(node => {
  links.push(...node.connectionsIds.map((connectionId)=>{
    return {source: connectionId, target: node.id};
  }));

});

const data = {
  nodes: nodes,
  links:links
};


/*const data = {
    nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
    links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' }]
};*/
 
// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const config = {
    nodeHighlightBehavior: true,
    node: {
        color: 'lightgreen',
        size: 120,
        highlightStrokeColor: 'blue',
        labelProperty: 'value'
    },
    link: {
        highlightColor: 'lightblue'
    }
};
 
// graph event callbacks
const onClickNode = function(nodeId) {
    window.alert('Clicked node ${nodeId}');
};
 
const onMouseOverNode = function(nodeId) {
    //window.alert(`Mouse over node ${nodeId}`);
};
 
const onMouseOutNode = function(nodeId) {
    //window.alert(`Mouse out node ${nodeId}`);
};
 
const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};
 
const onMouseOverLink = function(source, target) {
    //window.alert(`Mouse over in link between ${source} and ${target}`);
};
 
const onMouseOutLink = function(source, target) {
    //window.alert(`Mouse out link between ${source} and ${target}`);
};

export default class ConceptGraph extends Component{

  render() {
    return (
      <div className="App">
        <Graph
    id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
    data={data}
    config={config}
    onClickNode={onClickNode}
    onClickLink={onClickLink}
    onMouseOverNode={onMouseOverNode}
    onMouseOutNode={onMouseOutNode}
    onMouseOverLink={onMouseOverLink}
    onMouseOutLink={onMouseOutLink}
/>;
      </div>);
  }  

}
 
