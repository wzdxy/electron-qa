<template>
  <ParentLayout>
    <template #sidebar-top>
      <nav-single-img-ad
        :img="`https://static.wzdxy.com/img/素材4_660x200_50k.jpg`"
        :href="
          `https://activity.huaweicloud.com/discount_area_v5/index.html?fromacct=3b6c8546-fa9e-4b21-8f3e-2203e4330cfe&utm_source=aHcyMjQ3Mjk3NQ==&utm_medium=cps&utm_campaign=201905`
        "
      />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import NavSingleImgAd from "@theme/components/nav-single-img-ad";
export default {
  name: "Layout",
  components: {
    ParentLayout,
    NavSingleImgAd,
  },
};
</script>
