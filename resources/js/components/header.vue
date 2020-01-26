<template>
    <div>
        <el-menu class="top-navigation" mode="horizontal" router="true">

            <el-menu-item index="-1">
                <div class="burger" @click="toggleDrawer">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </el-menu-item>
            <template v-for="(item, index) in menu">
                <el-menu-item
                    :index="index.toString()"
                    v-if="item.children.length == 0"
                    :route="item.route"
                >
                    {{ item.title }}
                </el-menu-item>

                <el-submenu :index="index.toString()" v-if="item.children.length > 0">
                    <template slot="title">{{item.title}}</template>
                    <el-menu-item
                        v-for="(child, childIndex) in item.children" v-bind:key="childIndex"
                        :index="childIndexString(index, childIndex)">{{ child.title }}</el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../bus'
    export default {
        name:'header-component',
        data: () => ({
            isCollapse: false,
            menu: [
                {
                    title: 'Dashboard',
                    route: { name: 'dashboard' },
                    children: [],
                },{
                    title: 'Settings',
                    route: { name: 'settings' },
                    children: [],
                },{
                    title: 'Workspace',
                    children: [
                        {
                            title: 'Item one',
                        },{
                            title: 'Item two',
                        },
                    ]
                }
            ],
        }),
        methods: {
            toggleDrawer() {
                bus.$emit('toggle-drawer');
            },
            childIndexString(parentIndex, childIndex) {
                console.log(parentIndex + '-' + childIndex);
                return parentIndex + '-' + childIndex;
            }
        }
    }
</script>
