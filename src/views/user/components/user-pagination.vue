<template>
    <el-pagination
            class="user-list-pagination"
            layout="total, prev, pager, next, jumper, sizes"
            @current-change="handleCurrentPageChange"
            @size-change="handleSizeChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="[10, 30, 50, 100]"
            :total="page_count">
    </el-pagination>
</template>
<style>

</style>
<script>
  export default {
    props: {
      page_count: {
        type: Number,
        default: () => {
          return 0
        }
      }
      // current_page: {
      //  type: Number,
      //  default: () => {
      //    return 0
      //  }
      // }
    },
    data: () => {
      return {
        currentPage: 1,
        pageSize: 30
      }
    },
    methods: {
      handleCurrentPageChange(val) {
        this.$store.dispatch('SetUserListCurrentPage',
          {
            page: val
          })
      },
      handleSizeChange(val) {
        this.$store.dispatch('SetPageSize', { pageSize: val })
      }
    }
  }
</script>
