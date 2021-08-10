import {SetupContext} from "vue";

interface SwitchProps {
    onOrOff: Boolean;
}

declare const Switch: {
    name: string;
    props: {
        onOrOff: BooleanConstructor;
    };
    setup(props: SwitchProps, context: SetupContext): {
        switchWord: (e: Event) => void;
        switchStatus: (e: Event) => void;
    };
};
export {Switch, SwitchProps}
