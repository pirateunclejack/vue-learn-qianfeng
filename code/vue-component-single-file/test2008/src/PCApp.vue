<template>
<el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Grade</template>
        <el-submenu v-for="grade in school" :key="grade.id" index="1-1">
          <template slot="title"><i>{{ grade.name }}</i></template>
          <el-submenu v-for="teacher in grade.teachers" :key="teacher.id" index="1-1-1">
            <template slot="title"><i>{{ teacher.name }}</i></template>
            <el-menu-item v-for="student in teacher.students" :key="student.id">
              {{ student.name }}
            </el-menu-item>
          </el-submenu>
        </el-submenu>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu">Navigator two</i></template>
        <el-menu-item-group>
          <template slot="title">Group 1</template>
          <el-menu-item index="2-1">Option 1</el-menu-item>
          <el-menu-item index="2-2">Option 2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group 2">
          <el-menu-item index="2-3">Option 3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
          <el-menu-item index="3-1">Option 1</el-menu-item>
          <el-menu-item index="3-2">Option 2</el-menu-item>
          <el-menu-item index="3-3">Option 3</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">Option 4</template>
          <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>

  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Tom</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" width="140">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="120">
        </el-table-column>
        <el-table-column prop="address" label="Address">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    const school = [
      {
        id: 1,
        name: 'grade1',
        teachers: [
          {
            id: 1,
            name: 'teacher1',
            students: [
              {
                name: 'student1',
                age: '123',
                height: 'jifowe'
              }
            ]
          }
        ]
      }
    ]
    return {
      tableData: Array(20).fill(item),
      school
    }
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
