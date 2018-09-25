import React, {Component} from "react";
import {Icon, Menu, Submenu} from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export class Navbar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            current:'mail'
        };
       
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    
    render(){
        return(
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                   <Link to='/main'><Icon type="home" />Início</Link>
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="compass" />Intercâmbios</span>}>
                    <MenuItemGroup title="Destinos">
                        <Menu.Item key="location:1"><Link to='/australia'>Austrália</Link></Menu.Item>
                        <Menu.Item key="location:2"><Link to='/canada'>Canadá</Link></Menu.Item>
                        <Menu.Item key="location:3"><Link to='/spain'>Espanha</Link></Menu.Item>
                        <Menu.Item key="location:4"><Link to='/ireland'>Irlanda</Link></Menu.Item>
                        <Menu.Item key="location:5"><Link to='/malta'>Malta</Link></Menu.Item>
                        <Menu.Item key="location:6"><Link to='/unitedkingdom'>Reino Unido</Link></Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="userprofile">
                    <Icon type="user"/>Meu perfil
                </Menu.Item>
            </Menu>
        )
    }
}
