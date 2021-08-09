interface SwitchProps {
    onOrOff: Boolean;
}

interface SwitchContext {
    emit: (event: string, ...args: unknown[]) => void;
}

declare const Switch: {
    name: string;
    props: {
        onOrOff: BooleanConstructor;
    };
    setup(props: SwitchProps, context: SwitchContext): {
        switchWord: (e: Event) => void;
        switchStatus: (e: Event) => void;
    };
};
export default Switch;
