import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IcoMenu from 'material-ui/svg-icons/navigation/menu';
import PubSub from 'pubsub-js';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import QuestionYesNo from '../../../service/message/QuestionYesNo';
import MenuDash from './RoutesDash';
import ProgressBar from './ProgressBar';


class HeaderBar extends Component {


  userLogOut = () => PubSub.publish('SHOW-QUESTION-YES-NO',{teste:''});


  openCloseLeftMenu = () => PubSub.publish('OPEN-LEFT-MENU',{open:true});


  render(){
    return(
      <AppBar
          style={{background:'#ff1200'}}
          title={<span onClick={this.openCloseLeftMenu} style={{cursor: 'pointer'}}>The Dionisio</span>}
          iconElementLeft={<IconButton onTouchTap={this.openCloseLeftMenu} ><IcoMenu /></IconButton>}
          iconElementRight={
                            <IconMenu iconButtonElement={<IconButton> <MoreVertIcon /></IconButton>}
                                      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                      targetOrigin={{horizontal: 'right', vertical: 'top'}}>
                              <MenuItem primaryText="Refresh" />
                              <MenuItem primaryText="Send feedback" />
                              <MenuItem primaryText="Settings" />
                              <MenuItem primaryText="Help" />
                              <MenuItem onTouchTap={this.userLogOut} primaryText="Sign out" />
                            </IconMenu>}/>
    );
  }

}

class LeftMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};

  }

  closeLeftMenu = () => {
    this.setState({open: false});
    PubSub.publish('CLOSE-LEFT-MENU',{open:false});
  }


  componentDidMount(){
    PubSub.subscribe('OPEN-LEFT-MENU',
        function (canal, object) {
          this.setState({open: !this.state.open});
        }.bind(this)
    );
  }



  render() {
    return (
      <div>
        <Drawer docked={true}
                swipeAreaWidth={30}
                disableSwipeToOpen={true}
                width={250}
                openSecondary={false}
                open={this.state.open}
                zDepth={2} >
                <AppBar
                    style={{background:'#ff1200'}}
                    title={<span onClick={this.closeLeftMenu} style={{cursor: 'pointer'}}>The Dionisio</span>}
                    iconElementLeft={<IconButton onTouchTap={this.closeLeftMenu}>
                                        <IcoMenu />
                                     </IconButton>}
                />

          <MenuDash />
      </Drawer>
      </div>
    );
  }
}

class HomeDashBox extends Component{

  constructor(){
    super();
    this.state={class:'margin-left-250'};
  }

  componentDidMount(){
    PubSub.subscribe('USER-OUT',
        function (canal, object) {
          console.log(canal);
          console.log(object);
        }
    );

    PubSub.subscribe('OPEN-LEFT-MENU',
        function (canal, object) {
          this.setState({class:'margin-left-250'})
        }.bind(this)
    );
    PubSub.subscribe('CLOSE-LEFT-MENU',
        function (canal, object) {
          this.setState({class:''})
        }.bind(this)
    );
  }


   render(){
     return(
          <div>
            <HeaderBar/>
            <LeftMenu />
            <QuestionYesNo text={'Deseja sair ?'}  title={'Titulo'} canal={'USER-OUT'}/>

              <div style={{transition: 'all 1s'}} className={this.state.class}>
                 <ProgressBar />
                 {this.props.children}

             </div>

          </div>
    );
  }
}


export default HomeDashBox;
