<template>
  <div class="br-tooltip" :place="place">
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>
import "@govbr/dsgov/dist/components/tooltip/tooltip.css";
import "@govbr/dsgov/dist/components/tooltip/tooltip";

export default {
  name: "BrTooltip",
  props: {
    /** Texto principal a ser exibido */
    text: {
      type: String,
      validator: val => val.trim().length > 1
    },

    /** Define o posicionamento do tooltip (top, bottom, left, right) */
    place: {
      type: String,
      validator: val => ["top", "bottom", "right", "left"].indexOf(val) !== -1
    },

    /** Determina após quantos milisegundos o tooltip deve ser automaticamente ocultado */
    timer: Number,

    /** Atributo que pode ser definido quando se deseja que o tooltip apareça no inicio do carregamento */
    active: Boolean,

    /** Define que esse tooltip é um popover */
    popover: Boolean
  }
};
</script>
