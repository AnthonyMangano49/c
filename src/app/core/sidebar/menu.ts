interface IMenu {
    logoPath: string;
    menuSections: Array<IMenuSection>;
}

interface IMenuSection {
    header: string;
    menuItems: Array<IMenuItem>;
}

interface IMenuItem {
    title: string;
    icon?: string;
    route?: string;
    isToggled?: boolean;
    submenu?: Array<IMenuItem>
}

export { IMenu }



