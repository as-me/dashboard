import * as React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

import SideBar from '../SideBar';
import PropertiesSettings from './PropertiesSettings';


var Label = ReactBootstrap.Label;
var Panel = ReactBootstrap.Panel;
var Input = ReactBootstrap.Input;



class ToolSettings extends React.Component {

    constructor(props) {
        super(props)



        this.tool = this.props.tool;
        this.state = {
            dataSourcePath: this.tool.sessionData.dataSourcePath.getSessionState()
        }

        this._setReactState = this._setReactState.bind(this);
        this.updateColumns = this.updateColumns.bind(this)
        this._close = this._close.bind(this);
        this._handleDatSourceChange = this._handleDatSourceChange.bind(this);
        this.isDataSourceChanged = false
    }

    componentDidMount() {
        var cc = WeaveAPI.SessionManager.getCallbackCollection(this.tool.sessionData.dataSourcePath);
        cc.addImmediateCallback(this, this.updateColumns);
        cc.addImmediateCallback(this, this._setReactState);

    }

    updateColumns() {
        var cols = this.tool.sessionData.dataSourceWatcher.target.columns;
        var colProperties = this.tool.sessionData.getColumnProperties();
        for (var i = 0; i < colProperties.length; i++) {
            this.tool.sessionData[colProperties[i]].value = cols[i];
        }

    }

    _setReactState() {
        console.log('Tool Settings');

        this.setState({
            dataSourcePath: this.tool.sessionData.dataSourcePath.getSessionState()
        });
    }



    componentDidUpdate(prevProps, prevState) {

    }

    _close() {
        window.NavigationHashMap.getObject("activeTool").value = "";

    }




    _handleDatSourceChange(event) {

        var path = WeaveAPI.SessionManager.getPath(WeaveAPI.globalHashMap, AdapterAPI.peer.dataSources.getObject(event.target.value));
        var property = event.target.id;
        this.isDataSourceChanged = true;

        this.tool.sessionData[property].targetPath = path;

    }


    componentWillUnmount() {
        var cc = WeaveAPI.SessionManager.getCallbackCollection(this.tool.sessionData.dataSourcePath);
        cc.removeCallback(this._setReactState);
        cc.removeCallback(this.updateColumns);
    }

    render() {

        var dataSourceUI = < div / > ;
        var ui = < Label > No Chart selected Yet < /Label>;


        var colProperties = this.tool.sessionData.getColumnProperties();
        var path = this.state.dataSourcePath;
        var ds = WeaveAPI.SessionManager.getObject(WeaveAPI.globalHashMap, path);
        var cols = ds.columns;
        ui = < PropertiesSettings columnProperties = {
            colProperties
        }
        columns = {
            cols
        }
        toolData = {
            this.tool.sessionData
        }
        isDataSourceChanged = {
            this.isDataSourceChanged
        }
        />


        var propertyName = 'Data Source';

        var id = 'dataSourceWatcher';
        var sources = AdapterAPI.peer.dataSources.getNames();
        var options = sources.map(function (sourceName, id) {
            return <option key = {
                sourceName
            }
            value = {
                sourceName
            } > {
                sourceName
            } < /option>
        });

        var currentValue = path[path.length - 1];

        dataSourceUI = < Input type = "select"
        label = {
            propertyName
        }

        id = {
            id
        }

        value = {
            currentValue
        }
        placeholder = "select"

        onChange = {
            this._handleDatSourceChange
        } > {
            options
        } < /Input>;

        return ( < Panel className = "settingsBar"
            header = { < div > {
                    this.props.toolName
                } < span className = "pull-right" > < i className = "fa fa-times fa-fw fa-pointer"
                onClick = {
                    this._close
                } > < /i>  < /span > < /div >
            } >

            {
                dataSourceUI
            }

            {
                ui
            }



            < /Panel >


        );
    }
}

module.exports = ToolSettings;
