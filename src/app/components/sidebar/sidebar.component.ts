import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuAdminService } from '../../services/menu-admin.service';
import { MenuAdminModel } from 'src/app/models/menu-admin.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

const misc: any = {
  sidebar_mini_active: true
};

// export interface RouteInfo {
//     path: string;
//     title: string;
//     type: string;
//     icontype: string;
//     collapse?: string;
//     isCollapsed?: boolean;
//     isCollapsing?: any;
//     children?: ChildrenItems[];
// }


export interface RouteInfo {
  key?: string;
  children?: ChildrenItems[];
  delete: boolean;
  icon?: string;
  parent_id?: string;
  path: string;
  role: any;
  sort_order?: number;
  title: string;
  isCollapsed?: boolean;
  collapse?: string;
}

export interface ChildrenItems {
  key?: string;
  children?: ChildrenItems2[];
  delete: boolean;
  icon?: string;
  parent_id?: string;
  path: string;
  role: any;
  sort_order?: number;
  title: string;
  isCollapsed?: boolean;
  collapse?: string;
}

export interface ChildrenItems2 {
  key?: string;
  children?: RouteInfo[];
  delete: boolean;
  icon?: string;
  parent_id?: string;
  path: string;
  role: any;
  sort_order?: number;
  title: string;
  isCollapsed?: boolean;
  collapse?: string;
}

export const ROUTES: RouteInfo[] = [
  {
    key: '-LqyfvceFJJ92eCDQHt_',
    delete: false,
    icon: 'ni-chart-bar-32 text-primary',
    parent_id: '0',
    path: '/dashboards',
    role: 'admin',
    sort_order: 1,
    title: 'Bảng tổng kết',
    collapse: 'dashboards'
  },
  {
    key: '-LqyfvceFJJ92eCDQHta',
    children: [
      {
        delete: false,
        icon: 'pe-7s-keypad',
        key: '-LqyfvciAStv1mRNiWQs',
        parent_id: '-LqyfvchyjUtWTrQcfwO',
        path: '/pages',
        role: 'admin',
        sort_order: 12,
        title: 'Các trang con',
        isCollapsed: true,
        collapse: 'pages'
      },
      {
        delete: false,
        icon: 'pe-7s-menu',
        key: '-LqyfvciAStv1mRNiWQu',
        parent_id: '-LqyfvchyjUtWTrQcfwO',
        path: '/menu-front',
        role: 'admin',
        sort_order: 14,
        title: 'Menu trang chủ',
        isCollapsed: true,
        collapse: 'menu-front'
      },
      {
        key: '-LqyfvceFJJ92eCDQHt_',
        delete: false,
        icon: 'ni-chart-bar-32 text-primary',
        parent_id: '0',
        path: '/dashboards',
        role: 'admin',
        sort_order: 1,
        title: 'Bảng tổng kết',
        collapse: 'dashboards'
      }
    ],
    delete: false,
    icon: 'ni-chart-bar-32 text-primary',
    parent_id: '0',
    path: '/index-manager',
    role: 'all',
    sort_order: 2,
    title: 'Quản lý trang chủ',
    isCollapsed: true,
    collapse: 'index-manager'
  },
];
// Menu Items
// export const ROUTES: RouteInfo[] = [
//   {
//     path: '/dashboards',
//     title: 'Dashboard',
//     type: 'link',
//     icontype: 'ni-chart-bar-32 text-primary'
//   },
//   {
//     path: '/user',
//     title: 'Users',
//     type: 'sub',
//     icontype: 'ni-ui-04 text-info',
//     collapse: 'components',
//     isCollapsed: true,
//     children: [
//       { path: 'user', title: 'Users', type: 'link' },
//       /*  { path: 'member', title: 'Members', type: 'link' } */
//     ]
//   },
//   {
//     path: '/components',
//     title: 'Components',
//     type: 'sub',
//     icontype: 'ni-ui-04 text-info',
//     collapse: 'components',
//     isCollapsed: true,
//     children: [
//       { path: 'buttons', title: 'Buttons', type: 'link' },
//       { path: 'cards', title: 'Cards', type: 'link' },
//       { path: 'grid', title: 'Grid', type: 'link' },
//       { path: 'notifications', title: 'Notifications', type: 'link' },
//       { path: 'icons', title: 'Icons', type: 'link' },
//       { path: 'typography', title: 'Typography', type: 'link' },
//       {
//         path: 'multilevel',
//         isCollapsed: true,
//         title: 'Multilevel',
//         type: 'sub',
//         collapse: 'multilevel',
//         children: [
//           { title: 'Third level menu' },
//           { title: 'Just another link' },
//           { title: 'One last link' }
//         ]
//       }
//     ]
//   }
// ];

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  providers: [
    MenuAdminService
  ]
})

export class SidebarComponent implements OnInit {
  public menuItems = new Subject<any>();
  public isCollapsed = true;
  lst: Array<RouteInfo>;
  constructor(
    private router: Router,
    private menuAdminService: MenuAdminService
  ) {

  }

  generateMenu(): void {
    console.log('generate menu !!!!');

  }

  clickTest(): any {
    console.log(this.menuItems);
    // const sub = this.menuAdminService.getMenuAdmins().subscribe((val) => {
    //   console.log('>>> SidebarComponent clickTest() : ' + val);
    //   this.lst = val;
    //   sub.unsubscribe();
    // });
  }

  ngOnInit(): any {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);
    // this.router.events.subscribe(event => {
    //   this.menuItems = ROUTES.filter(menuItem => menuItem);
    // });

    console.log('>>> SidebarComponent constructor run ...');
    const sub = this.menuAdminService.getMenuAdmins()
      .pipe(map(val => {

        // Object.values(val).forEach((obj, index) => {
        //   obj.isCollapsed = obj.children === undefined ? false : true;
        //   obj.collapse = '/' + obj.path;
        //   obj.icon = 'ni-chart-bar-32 text-primary';
        // });
        // return val;

        const lst = val as Array<RouteInfo>;
        lst.forEach(item => {
          item.isCollapsed = item.children === undefined ? false : true;
          item.collapse = '/' + item.path;
          item.icon = 'ni-chart-bar-32 text-primary';
        });
        return lst;

      }))
      .subscribe((result) => {
        this.menuItems.next(result);
        sub.unsubscribe();
      });
  }

  onMouseEnterSidenav(): any {
    if (!document.body.classList.contains('g-sidenav-pinned')) {
      document.body.classList.add('g-sidenav-show');
    }
  }
  onMouseLeaveSidenav(): any {
    if (!document.body.classList.contains('g-sidenav-pinned')) {
      document.body.classList.remove('g-sidenav-show');
    }
  }
  minimizeSidebar(): any {
    const sidenavToggler = document.getElementsByClassName(
      'sidenav-toggler'
    )[0];
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('g-sidenav-pinned')) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove('g-sidenav-pinned');
      body.classList.add('g-sidenav-hidden');
      sidenavToggler.classList.remove('active');
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add('g-sidenav-pinned');
      body.classList.remove('g-sidenav-hidden');
      sidenavToggler.classList.add('active');
      misc.sidebar_mini_active = true;
    }
  }
}
