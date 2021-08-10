import {SetupContext} from "vue";

interface DialogProps {
    visible: Boolean;
    ok: Function;
    no: Function;
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
    setup(props: DialogProps, context: SetupContext): {
        modifyVisible: () => void;
        doOk: () => void;
        doNo: () => void;
        Close: any;
    };
};
export {DialogProps, Dialog}
