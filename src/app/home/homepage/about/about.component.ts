import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../user.service";
import { SocialLink } from "../../../resources/socialLink";
import { User } from "../../../resources/user";

@Component({
  selector: 'home-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public aboutTexts: String[] = [];
  public socialLinks: SocialLink[] = [];
  public user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAbout().subscribe(
      (aboutTexts) => this.aboutTexts = aboutTexts
    );

    this.userService.getSocial().subscribe(
      (socialLinks) => this.socialLinks = socialLinks
    );

    this.userService.getUser().subscribe(
      (user) => this.user = user
    )
  }

  public getSocialLinkIcon(socialLink: SocialLink): any {
    let socialClass: string = "fa-" + socialLink.name;
    return { [socialClass]: true }
  }
}
