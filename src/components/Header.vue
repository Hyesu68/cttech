<template>
<div>
      <b-img src="http://www.contra.co.kr//design/default/images/logo.gif" fluid alt="Fluid image" @click="moveToMain"></b-img>

  <b-nav tabs justified>
    <b-nav-item active to="/introduce">회사소개</b-nav-item>
    <b-nav-item active to="/engineering">엔지니어링사업</b-nav-item>
    <b-nav-item active to="/lab">연구개발사업</b-nav-item>
    <b-nav-item active to="/commerse">홍보실</b-nav-item>
    <b-nav-item active to="/customer">고객지원</b-nav-item>
  </b-nav>
</div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {};
    },
    methods: {
        moveToMain() {
            this.$router.push({
                path: '/'
            });
        }
    }
}
</script>