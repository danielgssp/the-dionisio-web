import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import CompanyIco from 'material-ui/svg-icons/action/account-box';
import PlaceIco from 'material-ui/svg-icons/social/public';
import EventIco from 'material-ui/svg-icons/notification/confirmation-number';
import FinancialIco from 'material-ui/svg-icons/editor/attach-money';
import AnalyticsIco from 'material-ui/svg-icons/notification/sync';
import CheckinIco from 'material-ui/svg-icons/action/check-circle';
import {Link} from 'react-router';

export default class MenuDash extends Component{

  render(){
    return(
      <Menu autoWidth={false} width={250}>

          <MenuItem
                primaryText="Company"
                leftIcon={<CompanyIco />}
                containerElement={<Link to='/company' />}/>


          <Divider />
          <MenuItem
                primaryText="Place"
                leftIcon={<PlaceIco />}
                containerElement={<Link to='/place' />}/>


          <Divider />
          <MenuItem
                primaryText="Events"
                leftIcon={<EventIco />}
                containerElement={<Link to='/event' />}/>


         <Divider />
          <MenuItem
                primaryText="Financial"
                leftIcon={<FinancialIco />}
                containerElement={<Link to='/financial' />}/>

        <Divider />
        <MenuItem
              primaryText="Analitics"
              leftIcon={<AnalyticsIco />}
              containerElement={<Link to='/analitics' />}/>

        <Divider />
        <MenuItem
              primaryText="Checkin"
              leftIcon={<CheckinIco />}
              containerElement={<Link to='/checkin' />}/>

      </Menu>
    );
  }
}
