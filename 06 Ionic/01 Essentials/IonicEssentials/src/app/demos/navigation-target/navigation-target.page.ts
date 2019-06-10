import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-navigation-target",
  templateUrl: "./navigation-target.page.html",
  styleUrls: ["./navigation-target.page.scss"]
})
export class NavigationTargetPage implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id: string | null = null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  }
}
