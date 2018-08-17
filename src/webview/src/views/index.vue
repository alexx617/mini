<template>
    <div id="main" class="main">
        <div class="container">
            <router-view></router-view>
        </div>

        <!-- iphoneX 底部有横条，需要更高的高度 -->
        <div v-if="$route.meta.showFooterBar" class="footer-nav" :class="{iphoneX: isIphoneX}">

            <div class="nav-item" @click="$go('index')">
                营销推广
            </div>

            <div class="nav-item" @click="$go('/master/client/index')">
                客户管理
                <i class="client-has-necessary-track-clue-red-point" v-if="showClientRedPoint"></i>
            </div>

            <div class="nav-item" @click="$go('myself')">
                {{roleName}}
            </div>

        </div>
    </div>
</template>

<script>
import ajax from 'utils/ajax'
import { test } from 'models_api'
import util from "utils/util";
export default {
    data() {
        return {
            //是否展示客户小红点
            showClientRedPoint: false,
            isIphoneX: util.isIphoneX(),
        };
    },
    components: {},
    computed: {
        roleName() {
            let userInfo = this.getUserInfo();
            if (userInfo.role === 'creator') {
                return '机构中心'
            } else {
                return '个人中心'
            }
        }
    },
    created() {
        ajax(test).then(rs => {
            console.log(rs);
        }).catch(err => {
            console.log(err);
        })

    },
    methods: {

    },
}
</script>

<style scoped lang="less">
.container {
  padding-bottom: 0;
}
.reflow {
  background: rgba(255, 255, 255, 0);
}
.header-tap {
  height: 0.8rem;
  width: 100%;
  background: #fafafa;
  display: flex;
}
.tap-item {
  height: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
  border-bottom: solid 0.02rem #d1d1d1;
  font-size: 0.34rem;
}
.client-has-necessary-track-clue-red-point {
  background: #ff392f;
  border: 2px solid #ffffff;
  box-shadow: 0 2px 4px 0 rgba(255, 57, 47, 0.25);
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: absolute;
  top: 8px;
  left: 58%;
}
.iphoneX {
  height: 1.5rem;
  padding-bottom: 0.5rem;
}
</style>
