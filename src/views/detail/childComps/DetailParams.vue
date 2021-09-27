<template>
  <div id="detail_params" v-if="Object.keys(paramInfo).length !== 0">
    <table class="params_rule" v-for="(table, index) in paramInfo.rule.tables" :key="index">
      <tbody>
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
      </tbody>
    </table>
    <table class="params_set">
      <tbody>
      <tr v-for="(info, index) in paramInfo.info.set" :key="index">
        <th>{{ info.key }}</th>
        <td>{{ info.value }}</td>
      </tr>
      </tbody>
    </table>
    <div class="info_img" v-if="paramInfo.image !== ''">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
      create(){
        console.log(this.paramInfo)
      }
    }
  }
};
</script>
<style>
#detail_params {
  font-size: 0.65rem;
  padding: 0.42rem 0.34rem;
}

.params_rule,
.params_set {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.5);
  border-collapse: collapse; /* 可以合并邻近的边框，且可以让tr显示出边框 */
  margin: 0 auto;
  margin-bottom: 0.42rem;
  width: 17rem;
}
.params_rule tr,
.params_set tr {
  border-bottom: 0.04rem solid rgba(128, 128, 128, 0.5);
}

.params_rule th {
  text-align: left;
  padding-right: 1rem;
  white-space: nowrap;
}
.params_rule td {
  padding: 0.5rem;
}

.params_set th {
  text-align: left;
  padding: 0.5rem 3.5rem 0.5rem 0rem;
  white-space: nowrap;
}
.params_set td {
  color: var(--color-high-text);
}

.info_img img {
  width: 100%;
}

</style>
