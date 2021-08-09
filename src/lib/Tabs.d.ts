interface TabsProps {
    select: String;
}

interface TabsContext {
    emit: (event: string, ...args: unknown[]) => void;
    slots: {
        default: () => [];
    };
}

declare const Tabs: {
    name: string;
    components: {
        Button: any;
    };
    props: {
        select: StringConstructor;
    };
    setup(props: TabsProps, context: TabsContext): {
        getCurrent: import("vue").ComputedRef<never>;
        defaults: [];
        titles: any[];
        checkTitle: (e: Event) => void;
    };
};
export default Tabs;
