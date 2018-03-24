import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Create from "./CreateEvent";
import Search from "./SearchEvent";

export default class TabsExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Tab A" value="a" >
                    <div>
                        <Search/>
                    </div>
                </Tab>
                <Tab label="Create Event" value="b">
                    <div>
                        <Create/>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}