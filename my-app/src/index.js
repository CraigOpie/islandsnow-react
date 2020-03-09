import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Form, Grid, Image, Label, List, Menu, Icon, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="ui fixed menu mycss topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src='https://cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749' centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid container centered textAlign='center' columns='equal' >
          <Grid.Row centered>
            <Grid.Column  textAlign='center'>
              <Menu borderless className="ui menu mycss middlemenu">
                <Container>
                  <Dropdown item text="MEN" icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Tank tops</Dropdown.Item>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown item text="WOMEN" icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown item text="KIDS" icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Shirts</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown item text="BRANDS" icon="dropdown">
                    <Dropdown.Menu>
                      <Dropdown.Item>Volcom</Dropdown.Item>
                      <Dropdown.Item>Element</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Menu.Item fitted>SEARCH</Menu.Item>
                </Container>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image id='splash' src='https://i0.wp.com/www.surfer.com/wp-content/uploads/2017/12/ZN_7753.jpg' centered/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <container className="ui mycss container footer-background">
        <Grid container centered textAlign='center' columns='equal'>
          <Grid.Row centered>
            <Grid.Column className='ui mycss left column spacing'>
              <List>
                <List.Item>About Us</List.Item>
                <List.Item>Store Locations</List.Item>
                <List.Item>Employment</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Shipping & Returns</List.Item>
                <List.Item>Terms & Conditions</List.Item>
                <List.Item>Privacy Policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column className='ui mycss center column spacing'>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
                <List.Item>Brands</List.Item>
                <List.Item>Sale</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column className='ui mycss right column spacing'>
              <List>
                <List.Item>Join our mailing list for updates</List.Item>
                <List.Item>Sign up to receive our email updates!</List.Item>
                <Form>
                  <Form.Field inline>
                    <Input label={<Label color='black'>Join</Label>} labelPosition='right' type='text' placeholder='Enter email address' />
                  </Form.Field>
                </Form>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </container>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));