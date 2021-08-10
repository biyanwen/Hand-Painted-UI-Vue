import {SetupContext} from "vue";

interface RadioProps {
    select: String;
    label: String;
}

declare const Radio: {
    name: string;
    components: {
        Button: any;
    };
    props: {
        select: StringConstructor;
        label: StringConstructor;
    };
    setup(props: RadioProps, context: SetupContext): {
        selectVisible: import("vue").Ref<boolean>;
        changeSelect: (e: Event) => void;
        handRadioDiv: import("vue").Ref<null>;
        disabled: import("vue").Ref<boolean>;
    };
};
export {Radio, RadioProps}
