export interface Menu {
    title: string;
    key?: string;
    children?: Menu[];
    path?: string;
    required_auth?: boolean;
}

