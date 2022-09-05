<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo />
    <br />
    <m-card imgSrc="a.png" summary=" 互联网人副业指南" />
    <br />
    <m-card
      imgSrc="b.png"
      summary=" 轻松入门大数据 玩转Flink，打造湖仓一体架构"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 21人报名</div>
          <div class="price">$ 128.00</div>
        </div>
      </template>
    </m-card>
    <br />
    <m-card
      imgSrc="c.png"
      :width="370"
      :imgHeight="90"
    >
    Selenium3+Pytest+Allure 全流程实战自动化测试
      <template v-slot:footer>
        <div class="footer-selenium3">
          <div class="level">4步骤 · 6门课</div>
          <div class="level">109665收藏</div>
        </div>
      </template>
    </m-card>

  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}
.footer-selenium3{
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
