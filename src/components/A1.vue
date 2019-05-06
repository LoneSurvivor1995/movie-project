<template>
  <div>
    <div align="center" >
      <span>ID: </span> <Input suffix="ios-search" placeholder="Enter text" style="width: auto" v-model="body.id"/>
      <span>名称: </span> <Input suffix="ios-search" placeholder="Enter text" style="width: auto" v-model="body.name"/>
      <Button type="primary" v-on:click="getCustomers">Get</Button>
    </div>
    <Table border ref="selection" :columns="columns7" :data="data6"></Table>
    <Page :total="total" size="small" show-total show-elevator show-sizer :current="1" @on-change="changePage" @on-page-size-change="changeSize"  style="float: right; margin: 10px;overflow: hidden"/>
    <!--<div style="margin: 10px;overflow: hidden">-->
      <!--<div style="float: right;">-->
        <!--<Page :total="total" :current="1" @on-change="changePage"></Page>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        columns7: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: 'ID',
            key: 'id',
          },
          {
            title: '名称',
            key: 'movieName'
          },
          {
            title: '图片',
            key: 'movieImg',
            render: (h, params) => {
              console.log(params.row)
              return h('div', {
                attrs: {
                  style: 'width: 40px;height: 40px;'
                },
              }, [
                h('img', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  attrs: {
                    src: params.row.movieImg,
                    style: 'width: 40px;height: 40px;border-radius: 2px;'
                  },
                  style: {
                  },
                }),
              ]);
            }
          },
          {
            title: '视频',
            key: 'movieVideo'
          },
          {
            title: '描述',
            key: 'movieDesc'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, 'Delete')
              ]);
            }
          }
        ],
        data6:[],
        apiUrl: 'http://localhost:9000/findAll',
        body: {
          page: 1,
          size: 10,
          id:'',
          name:''
        },
        total: 0
      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '电影信息',
          content: `名称：${this.data6[index].movieName}<br>视频：${this.data6[index].movieVideo}<br>描述：${this.data6[index].movieDesc}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1);
      },

      getCustomers() {
        this.$http.post(this.apiUrl,this.body).then((response) => {
          this.total = response.data.total
          this.data6 = response.data.data
        }, (response) => {
          // 响应错误回调
          alert("request fail")
        });
      },

      changePage(e) {
        // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
        this.body.page = e
        this.data6 = this.getCustomers()
        this.$forceUpdate(); //强制刷新，解决页面不会重新渲染的问题

      },
      changeSize(e){
        this.body.size = e
        this.data6 = this.getCustomers()
        this.$forceUpdate(); //强制刷新，解决页面不会重新渲染的问题
      }

    }
  }
</script>
