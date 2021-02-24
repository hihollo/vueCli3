<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <!--<draggable v-model="list" ></draggable>: value注入的，如果发生了拖拽，value的数据并不会跟着变化-->
      <!--<draggable :list="list" ></draggable>: list注入的，则会发生变化。-->
      <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
      >
        <li
          class="list-group-item"
          v-for="element in list1"
          :key="element"
        >
          {{ element }}
        </li>
      </draggable>

      <hr/>
    </div>

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
              :key="element">
              {{element}}
            </el-tag>
          </draggable>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data () {
    return {
      list1: [1, 2, 3],
      list2: []
    }
  },
  methods: {
    handleClose (id) {
      this.list2 = []
    }
  }

}
</script>
<style scoped></style>
