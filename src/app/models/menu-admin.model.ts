export class MenuAdminModel {
    key?: string;
    children?: [];
    delete?: boolean;
    icon?: string;
    parent_id?: number;
    path?: string;
    role?: string;
    sort_order: number;
    title: string;
    isCollapsed?: boolean;
    collapse?: string;
}
