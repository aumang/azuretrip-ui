import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { UserMenu } from "../../shared/components/user-menu/user-menu";

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, UserMenu],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.css',
})
export class UserLayout {}
