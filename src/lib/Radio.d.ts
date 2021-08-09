interface RadioPreps {
    select: String;
    label: String;
}
interface RadioContext {
    emit: (event: string, ...args: unknown[]) => void;
}
declare const _default: {
    name: string;
    components: {
        Button: any;
    };
    props: {
        select: StringConstructor;
        label: StringConstructor;
    };
    setup(props: RadioPreps, context: RadioContext): {
        selectVisible: import("vue").Ref<boolean>;
        changeSelect: (e: Event) => void;
        handRadioDiv: import("vue").Ref<null>;
        disabled: import("vue").Ref<boolean>;
    };
};
export default _default;
