import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

var Panel = ReactBootstrap.Panel;



class ToolPanel extends React.Component {
    render() {
        return ( < Panel header = {
                this.props.title
            } > {
                this.props.content
            } < /Panel>

        );
    }
}

module.exports = ToolPanel;
