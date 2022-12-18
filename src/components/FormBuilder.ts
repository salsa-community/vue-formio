/* globals console, Promise */
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import FormioFormBuilder from "formiojs/FormBuilder";
import AllComponents from "formiojs/components";
import Components from "formiojs/components/Components";
Components.setComponents(AllComponents);

@Component
export default class FormBuilder extends Vue {
  builder?: any;
  builderReady?: Promise<any>;

  @Prop({ default: {} })
  form?: any;

  @Prop({ default: {} })
  options?: any;

  @Watch("form")
  formChange(value: object) {
    if (this.builder) {
      this.builder.instance.form = value;
    }
  }

  mounted() {
    this.initializeBuilder().catch((err) => {
      /* eslint-disable no-console */
      console.warn(err);
      /* eslint-enable no-console */
    });
  }

  destroyed() {
    if (this.builder) {
      this.builder.instance.destroy(true);
    }
  }

  initializeBuilder(): Promise<any> {
    if (this.builder !== undefined) {
      this.builder.instance.destroy(true);
    }
    // @ts-ignore
    this.builder = new FormioFormBuilder(
      this.$refs.formio,
      this.form,
      this.options
    );
    this.builderReady = this.builder.ready;
    return this.builderReady.then(() => {
      this.builder.instance.events.onAny((...args: any[]) => {
        const eventParts = args[0].split(".");

        // Only handle formio events.
        const namespace: string =
          (this.options && this.options.namespace) || "formio";
        if (eventParts[0] !== namespace || eventParts.length !== 2) {
          return;
        }

        // Remove formio. from event.
        args[0] = eventParts[1];

        this.$emit.apply(this, ["", args]);

        // Emit a change event if the schema changes.
        if (
          ["saveComponent", "updateComponent", "deleteComponent"].includes(
            eventParts[1]
          )
        ) {
          args[0] = "change";
          this.$emit.apply(this, ["", args]);
        }
      });
    });
  }

  render(createElement: any) {
    return createElement("div", { ref: "formio" });
  }
}
