import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  img: string;
  class: string;
  children: RouteInfo[];
  role: number[];
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/farmation-list",
    title: "Farmation",
    rtlTitle: "لوحة القيادة",
    // icon: "icon-tag",
    icon: "",
    img: "assets/img/menuIcons/pricingconfiguration.svg",
    class: "",
    children: [
    ],
    role:[4]
  },
  {
    path: "/seeds-availability",
    title: "Seeds Availability",
    rtlTitle: "ÙÙØ­Ø© Ø§ÙÙÙØ§Ø¯Ø©",
    icon: "icon-refresh-02",
    img: "",
    class: "",
    children: [],
    role:[8]
  },  
  {
    path: "/chemical-availability",
    title: "Chemicals Availability",
    rtlTitle: "لوحة القيادة",
    icon: "icon-coins",
    img: "",
    class: "",
    children: [],
    role:[7]
  },
  {
    path: "/machinary-availability",
    title: "Machinay Availability",
    rtlTitle: "لوحة القيادة",
    // icon: "icon-tag",
    icon: "",
    img: "assets/img/menuIcons/yield.svg",
    class: "",
    children: [
    ],
    role:[7]
  },
  {
    path: "/govt-schemes",
    title: "Govr Schemes",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    img: "",
    class: "",
    children: [],
    role:[1,2]
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})

export class SidebarComponent implements OnInit {
  menuItems: any[] = [];
  // userDetails: object;
  // roleName = UserRoles.roleNames;
  constructor(private router: Router) {

  }

  ngOnInit() {
    // this.userDetails = this.auth.getUserDetails();
    // if(this.userDetails && this.userDetails['authorities'])
    ROUTES.forEach(ele => {
      let temp = {}
      temp = ele;
      // this.userDetails['authorities'].forEach(role => {
      //   if(this.roleName[role]){
      //     if(ele.role.indexOf(this.roleName[role]) >= 0){
      //       temp = ele;
      //     }
      //   }
      // });
      this.menuItems.push(temp);
    });
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
