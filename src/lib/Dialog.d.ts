interface DialogProps {
    visible: Boolean;
    ok: Function;
    no: Function;
}

interface DialogContext {
    emit: (event: string, ...args: unknown[]) => void;
}

declare const Dialog: {
    name: string;
    components: {
        Button: any;
        Close: any;
    };
    props: {
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        ok: {
            type: FunctionConstructor;
        };
        no: {
            type: FunctionConstructor;
        };
    };
    setup(props: DialogProps, context: DialogContext): {
        modifyVisible: () => void;
        doOk: () => void;
        doNo: () => void;
        Close: any;
    };
};
export default Dialog;
