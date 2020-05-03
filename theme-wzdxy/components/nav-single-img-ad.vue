<template>
  <div class="jump" v-if="show">
    <div class="close" @click="hide">感谢支持作者 , 点我隐藏一周</div>
    <div @click="jump">
      <img :src="this.img" alt="huawei" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NavSingleImgAd",
  data() {
    return {
      storageKey: "navTopAdHideUntil",
      show: false,
    };
  },
  props: ["img", "href"],
  created() {
    if (typeof localStorage !== "undefined") {
      var navTopAdHideUntil =
        localStorage && localStorage.getItem(this.storageKey);
      if (!navTopAdHideUntil || Date.now() > navTopAdHideUntil) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  methods: {
    jump() {
      _hmt && _hmt.push(["_trackEvent", "导航广告", "点击", this.href]);
      window.open(this.href);
    },
    hide() {
      localStorage &&
        localStorage.setItem(this.storageKey, Date.now() + 86400 * 7 * 1000);
      this.show = false;
    },
  },
};
</script>

<style scoped>
@media (max-width: 719px) {
  .jump {
    opacity: 1 !important;
  }
}
.jump {
  position: relative;
  transition: all 0.3s;
  opacity: 0.1;
  cursor: pointer;
}
.jump:hover {
  opacity: 1;
}
.jump img {
  width: 100%;
}
.jump .close {
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.3s;
  background: #fff;
  opacity: 0.4;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.jump .close:hover {
  opacity: 1;
}
</style>
