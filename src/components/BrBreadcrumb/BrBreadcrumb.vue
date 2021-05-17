<template>
  <div class="br-breadcrumb pt-3" :aria-label="title">
    <ul class="crumb-list">
      <li class="crumb home">
        <div class="br-button circle">
          <span class="sr-only">Página inicial</span
          ><i class="icon fas fa-home"></i>
        </div>
      </li>
      <li class="crumb">
        <i class="icon fas fa-chevron-right"></i
        ><a href="javascript:void(0)">Página Ancestral 01</a>
      </li>
      <li class="crumb">
        <i class="icon fas fa-chevron-right"></i
        ><a href="javascript:void(0)">Página Ancestral 02</a>
      </li>
      <li class="crumb">
        <i class="icon fas fa-chevron-right"></i
        ><a href="javascript:void(0)">Página Ancestral 03</a>
      </li>
      <li class="crumb">
        <i class="icon fas fa-chevron-right" />
        <a href="javascript:void(0)">Página Ancestral Com Título Grande</a>
        <br-tooltip text="Página Ancestral Com Título Grande" place="top" />
      </li>
      <li class="crumb" data-active="active">
        <i class="icon fas fa-chevron-right"></i><span>Página atual</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BrTooltip from "../BrTooltip/BrTooltip";
const BrButton = {
  name: "BrBreadcrumb",
  props: {
    title: {
      type: String,
      validator: function(val) {
        return val.trim().length > 1;
      }
    }
  },
  components: {
    BrTooltip
  }
};
export default BrButton;
</script>
<style scoped>
@import "../../../node_modules/@govbr/dsgov/dist/components/breadcrumb/breadcrumb.css";
</style>
