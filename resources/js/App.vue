<template>
    <div id="app">
        <el-container class="app">
            <el-aside :hidden="isCollapse">
                <navigation-component></navigation-component>
            </el-aside>

            <el-container>
                <el-header class="top-navigation">
                    <header-component></header-component>
                </el-header>

                <el-main>
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">dashboard</el-breadcrumb-item>
                        <el-breadcrumb-item>next one</el-breadcrumb-item>
                        <el-breadcrumb-item>third one</el-breadcrumb-item>
                    </el-breadcrumb>

                    <el-divider></el-divider>

                    <el-container class="router-view">
                        <router-view></router-view>
                    </el-container>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import HeaderComponent from "./components/header";
    import NavigationComponent from "./components/navigation";

    import bus from './bus';
    export default {
        components: {NavigationComponent, HeaderComponent},
        data: () => ({
            isCollapse: false,
        }),
        methods: {
        },
        created() {
            let self = this;
            bus.$on('toggle-drawer', function() {
                self.isCollapse = !self.isCollapse;

            })
        }
    }
</script>

<style>
</style>
