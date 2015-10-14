import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
var Input = ReactBootstrap.Input;
import ColumnSettings from './ColumnSettings';




class PropertiesSettings extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {

        var ui = this.props.columnProperties.map(function (property, index) {

            return ( < ColumnSettings key = {
                    index
                }
                propertyName = {
                    property
                }
                sessionProperty = {
                    this.props.toolData[property]
                }
                columns = {
                    this.props.columns
                }
                />
            );

        }.bind(this));
        return ( < div > {
                ui
            } < /div>

        );
    }
}

module.exports = PropertiesSettings;
