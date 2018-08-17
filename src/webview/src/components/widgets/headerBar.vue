<template>
    <div class="header-bar">
        <div class="header-box">
            <div v-if="showBack" class="arrowBox" @click="back">
                <i class="arrowLeft"></i>
            </div>
            <h1>{{title}}</h1>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'header-bar',
    computed: {
    },
    data() {
        return {}
    },
    props: {
        title: {
            type: String,
            default: '腾跃易招生'
        },
        setBack: {
            type: [String, Number],
            default: -1
        },
        showBack: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        // ...mapActions('doc', ['UPDATE_DIRECTION']),
        back() {
            // this.$go(this.setBack, true);
        }
    }
}
</script>

<style lang="less" scoped>
.header-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 10vh;
  line-height: 1.2rem;
  background: #1e1e1e;
  text-align: center;
  z-index: 10;
  .header-box{
      position: absolute;
      top:20px;
  }
  i {
    display: block;
    float: left;
    margin: 12px 0 0 15px;
  }
  h1 {
    position: absolute;
    width: 100%;
    bottom: 20px;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
    font-weight: normal;
  }
  .arrowBox {
    float: left;
    height: 100%;
    .arrowLeft {
      border-right: 2px solid #fff;
      border-top: 2px solid #fff;
      height: 12px;
      width: 12px;
      transform: rotate(225deg);
      border-left: 1px solid transparent;
      border-bottom: 1px solid transparent;
    }
  }
}
</style>
