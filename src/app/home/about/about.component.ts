import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SocialLink } from '../../resources/socialLink';
import { User } from '../../resources/user';
import { SocialIconService } from '../../app-common/social-icon.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public aboutTexts: String[] = [];
  public socialLinks: SocialLink[] = [];
  public user: User;

  constructor(
    private userService: UserService,
    public socialIconService: SocialIconService
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
}
