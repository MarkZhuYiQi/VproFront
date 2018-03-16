<template>
    <div>
        <el-table
                :data="coursesList"
                v-loading="listLoading"
                style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="课程名称">
                            <span><a href="#">{{ props.row.course_title }}</a></span>
                        </el-form-item>
                        <el-form-item label="课程ID">
                            <span>{{ props.row.course_id }}</span>
                        </el-form-item>
                        <el-form-item label="课程简介">
                            <span>{{  }}</span>
                        </el-form-item>
                        <el-form-item label="课程分类">
                            <span>{{ props.row.course_pid }}</span>
                        </el-form-item>
                        <el-form-item label="课程创建人">
                            <span>{{ props.row.auth_appid }}</span>
                        </el-form-item>
                        <el-form-item label="视频价格">
                            <span>{{ props.row.course_price }}</span>
                        </el-form-item>
                        <el-form-item label="商品描述">
                            <span>{{  }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                    label="课程 ID"
                    prop="course_id">
            </el-table-column>
            <el-table-column
                    label="课程名称"
                    prop="course_title">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style>

</style>
<script>
    import { getCoursesList } from '@/api/courses'
    export default {
      mounted() {
        this.fetchCoursesList()
      },
      data() {
        return {
          coursesList: [],
          listLoading: false
        }
      },
      methods: {
        handleEdit() {},
        handleDelete() {},
        fetchCoursesList() {
          getCoursesList().then(res => {
            this.coursesList = res.coursesList
          })
        }
      }
    }
</script>