import React, { Component } from 'react';
import { Calendar } from 'antd';


class CalendarDemo extends Component {
    render() {
        return (
            <div>
                function onPanelChange(value, mode) {
                    console.log(value.format('YYYY-MM-DD'), mode)
                    }
                <Calendar >

                </Calendar>
                
}
            </div>
        );
    }
}

export default CalendarDemo;