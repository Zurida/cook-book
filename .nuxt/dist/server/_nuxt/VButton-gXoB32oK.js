import { _ as __nuxt_component_0$1 } from "./nuxt-link-Cj5qoeIm.js";
import { computed, createVNode, resolveDynamicComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "VButton",
  __ssrInlineRender: true,
  props: {
    to: String,
    href: String,
    small: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default() {
        return "button";
      }
    }
  },
  setup(__props) {
    const props = __props;
    const component = computed(() => {
      return props.to || props.href ? __nuxt_component_0$1 : "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
        to: __props.to,
        class: ["VButton", { "VButton--small": __props.small, "is-disabled": __props.disabled }],
        disabled: __props.disabled,
        type: __props.type
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/VButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8b4c72e"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=VButton-gXoB32oK.js.map
