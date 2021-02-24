<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <!--<draggable v-model="list" ></draggable>: value注入的，如果发生了拖拽，value的数据并不会跟着变化-->
      <!--<draggable :list="list" ></draggable>: list注入的，则会发生变化。-->

      <!--group="{name:'abc',pull:'clone',put:false}":group一般的用法是用来区分拖拽组的，group名称
      相同的拖拽组可以互相拖放.
      put参数比较简单，是用来控制别的地方内容是否可以拖拽到自己这边来。如果
      设置为false，那么就表示别的地方的内容无法拖拽到自己这边来。
      pull参数控制的是从当前拽走，放在另外一个地方的行为。默认情况下(设置为true)是你拽到另外一个地方
      去，当前列表中就会少一个，对方列表多一个。如果设置为'clone',那么当前列表不会减少，同时对方列表多了一个。-->

      <!--sort 参数和group参数中pull和put的设置目的是为了实现左边拖动的时候内容顺序不改变-->
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :onEnd='allow'
      >
        <li
          class="list-group-item"
          v-for="element in list1"
          :key="element.name"
        >
          {{ element.name }}
        </li>
      </draggable>

      <hr/>
      <!--<draggable
        class="dragArea list-group"
        :list="ylist"
        :group="{ name: 'vertivalValue', pull: 'clone', put: false }"
      >
        <li
          class="list-group-item"
          v-for="element in ylist"
          :key="element.id"
        >
          {{ element.name }}
        </li>
      </draggable>-->
    </div>

   <!-- <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        @change="log"
      >
        <li
          class="list-group-item"
          v-for="element in list2"
          :key="element.name"
        >
          {{ element.name }}
        </li>
      </draggable>
    </div>-->

    <table border="1">
      <tr>
        <td>x轴</td>
        <td>y轴</td>
      </tr>
      <tr>
        <td >
          <draggable
            class="dragArea list-group"
            :list="list2"
            group="people"
            @add="sh"
          >
            <el-tag
              closable  @close="handleClose"
              ref="me"
              v-for="element in list2"
              :key="element.name">
              {{element.name}}
            </el-tag>
          </draggable>
        </td>

        <!--<td >
          <draggable
            class="dragArea list-group"
            :list="ylist2"
            group="vertivalValue"
            @add="sh"
          >
            <el-tag
              closable  @close="handleClose2"
              v-for="element in ylist2"
              :key="element.name">
              {{element.name}}
            </el-tag>
          </draggable>
        </td>-->
      </tr>
    </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  display: 'Clone',
  order: 2,
  components: {
    draggable
  },
  data () {
    return {
      parent: {

        child: 1

      },
      obj: [
        {
          id: 1,
          name: '111'
        }
      ],
      test: [1, 2, 3],
      list1: [
        { name: '商品', id: 1 },
        { name: '月份', id: 2 },
        { name: '类别', id: 3 }
      ],
      list2: [],
      ylist: [
        { name: 10, id: 1 },
        { name: 15, id: 1 },
        { name: 30, id: 1 }
      ],
      ylist2: [],
      list3: ''
    }
  },
  mounted () {
    // console.log(this.test)
    // console.log(this.obj)
    // console.log(this.$refs.me.tagName)
  },
  methods: {
    /* end (evt) {
      console.log('evt' + evt.draggedContext.element)
    }, */
    /* del () {
      const el = this.$refs.me
      console.log(this.$refs.me)
      console.log('点击要删除了' + this.$refs.me.innerHTML)
      el.innerHTML = '1'
    }, */
    handleClose (id) {
      // this.obj=''
      // console.log(id)
      // console.log(this.obj[id])
      console.log('关闭时触发')
      console.log(this.list2[0].name)
      console.log('me1' + this.$refs.me.innerHTML)
      console.log('me2' + this.$refs.me.innerText)
      this.list2 = []
    },
    /* handleClose2 (id) {
      console.log('关闭时触发')
      console.log(this.list2[0].name)
      console.log('me1' + this.$refs.me.innerHTML)
      console.log('me2' + this.$refs.me.innerText)
      this.ylist2 = []
    }, */
    allow (evt) {
      // console.log(evt.draggedContext.index)
      // console.log(evt.draggedContext.element.name)
      // console.log(evt.draggedContext.futureIndex)
      // console.log(evt.relatedContext.index)
      // console.log(evt.relatedContext.element)
      // console.log(evt.relatedContext.list)
      // console.log(evt.relatedContext.component)
      // return (evt.draggedContext.element.name!== 'b')
    },
    sh (evt) {
      console.log(evt.item.innerText)
    }
  }
  /* watch: {
    list3: {
      deep: true,
      handler: function (newV, oldV) {
        console.log('在watch中')
        console.log(newV)
      }
    }
  } */
}
</script>
<style scoped></style>
