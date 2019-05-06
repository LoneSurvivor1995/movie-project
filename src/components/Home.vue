<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
</style>
<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">

      <div align="center" style="background-color: darkslategrey">
        <img src="../assets/logo.png" style="height: 50px" />
      </div>
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']" @on-select="routeTo">
        <!--<Submenu name="A">-->
          <!--<template slot="title">-->
            <!--<Icon type="ios-navigate"></Icon>-->
            <!--首页-->
          <!--</template>-->
        <!--</Submenu>-->
        <MenuItem name="A">
          <Icon type="md-home" />
          首页
        </MenuItem>
        <Submenu name="B">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            Item 2
          </template>
          <MenuItem name="A1">Option 1</MenuItem>
          <MenuItem name="A2">Option 2</MenuItem>
          <MenuItem name="A3">Option 3</MenuItem>
          <MenuItem name="B1">Option 1</MenuItem>
          <MenuItem name="B2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="C">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="C1">Option 1</MenuItem>
          <MenuItem name="C2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="C">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            Item 3
          </template>
          <MenuItem name="C1">Option 1</MenuItem>
          <MenuItem name="C2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <!--<Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">-->
        <!--<router-link to="/a">aaa</router-link>-->
        <!--<router-link to="/helloWorld">helloWorld</router-link>-->
        <!--<router-link to="/a4">a4</router-link>-->
        <!--<router-link to="/a3">a3</router-link>-->

      <!--</Header>-->
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <Breadcrumb-item>{{this.$route.path.replace('/','')}}</Breadcrumb-item>
        </Breadcrumb>
        <Card>
          <div style="height: 600px"><router-view></router-view></div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    methods:{
      routeTo(e) {
        this.$router.push(e);
      }
    }
  }
</script>
