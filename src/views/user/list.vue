<template>
    <div class="user-list-container">
        <el-table
                v-loading="listLoading"
                element-loading-text="Loading"
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="user_id"
                    label="序号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="user_name"
                    label="用户名"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="user_role"
                    label="用户角色">
                <template slot-scope="scope">
                    <template v-if="scope.row.edit">
                    <!--<template v-if="edit">-->
                        <el-select @change="optionsChange($event, scope.row)" v-model="scope.row.user_role" clearable placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.roles_id"
                                    :label="item.roles_name"
                                    :value="item.roles_id">
                            </el-option>
                        </el-select>
                    </template>
                    <span v-else >{{scope.row.user_role}}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="user_edit"
                    label="用户编辑">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            v-if="!scope.row.edit"
                            @click="userEdit(scope.row)" type="primary">编辑</el-button>
                    <el-button
                            size="mini"
                            v-if="scope.row.edit"
                            @click="confirmEdit(scope.row)" type="success">完成</el-button>
                    <el-button
                            size="mini"
                            v-if="scope.row.edit"
                            @click="cancelEdit(scope.row)">取消</el-button>
                    <el-button
                            v-if="!scope.row.edit"
                            size="mini"
                            type="danger"
                            @click="userDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <userPagination :page_count="user_total" v-if="user_total"></userPagination>
    </div>
</template>
<style>
    .user-list-container{
        padding: 30px;
    }
    .user-list-pagination{
        padding:20px;
    }
</style>
<script>
  import { getUserList } from '@/api/user'
  import userPagination from './components/user-pagination.vue'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        listLoading: false,
        tableData: [],
        value4: '',
        edit: false,
        user_total: -1
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getUserList({ p: this.currentPage, s: this.pageSize }).then(res => {
          this.listLoading = false
          this.tableData = Object.values(res.data.items).map((items) => {
            // items['edit'] = false
            this.$set(items, 'edit', false)
            items.origin_user_role = items.user_role
            return items
          })
          this.options = res.data.user_roles
          this.user_total = parseInt(res.data.user_sum)
          this.listLoading = false
        })
      },
      userEdit(row) {
        if (row.edit)row.edit = 1
        row.edit = row.edit === 1 ? 0 : 1
      },
      cancelEdit(row) {
        row.user_role = row.origin_user_role
        row.edit = false
        this.$message({
          message: 'The title has been restored to the original value',
          type: 'warning'
        })
      },
      confirmEdit(row) {
        console.log(row)
        row.edit = false
        row.origin_user_role = row.user_role
        this.$message({
          message: 'the authority has been changed',
          type: 'success'
        })
      },
      userDelete(index, row) {
        console.log(index, row)
      },
      optionsChange(value, row) {
        const res = this.options.filter((items) => {
          if (items.roles_id === value) {
            return items
          }
        })
        this.$set(row, 'user_role', res[0]['roles_name'])
        this.$set(row, 'user_role_id', value)
        console.log(row)
      }
    },
    components: {
      userPagination
    },
    computed: {
      ...mapGetters([
        'currentPage',
        'pageSize'
      ])
    },
    watch: {
      currentPage(to, from) {
        if (from !== to) {
          this.fetchData()
        }
      },
      pageSize(to, from) {
        if (from !== to) {
          this.fetchData()
        }
      }
    }
  }
</script>