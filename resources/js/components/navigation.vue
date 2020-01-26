<template>

    <div>
        <div class="logo">
            <img :src="logo" />
        </div>

        <el-menu :default-openeds="['1']"
                 class="left-navigation"
        >
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
                <el-menu-item-group>
                    <template slot="title">Group 1</template>
                    <el-menu-item index="1-1">Option 1</el-menu-item>
                    <el-menu-item index="1-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                    <el-menu-item index="1-3">Option 3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">Option4</template>
                    <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>

</template>

<script>
export default {
    name: 'navigation-component',
    data() {
        return {
            logo: ASSETS + 'logo.png',
        }
    }
}
</script>
