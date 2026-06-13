import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { UserMenu } from "../../shared/components/user-menu/user-menu";

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, UserMenu],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {}
