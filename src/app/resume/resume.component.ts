import { Component, OnInit } from '@angular/core';
import { BrowserModule, DomSanitizer, SafeHtml } from '@angular/platform-browser' 

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  html: SafeHtml;
  html1: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {
    this.html = sanitizer.bypassSecurityTrustHtml('<a href="https://www.testdome.com/cert/de2bb851cbcc4727aa93528b38b12759" target="_blank" class="testdome-certificate-stamp gold"><span class="testdome-certificate-name">joyeeta mukherjee</span><span class="testdome-certificate-test-name">JavaScript </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>');
    this.html1 = sanitizer.bypassSecurityTrustHtml('<a href="https://www.testdome.com/cert/c31851a7897048519b95010fc616a0ed" target="_blank" class="testdome-certificate-stamp gold"><span class="testdome-certificate-name">joyeeta mukherjee</span><span class="testdome-certificate-test-name">HTML/CSS </span><span class="testdome-certificate-card-logo">TestDome<br />Certificate</span></a>');}

  ngOnInit() {
    var stylesheet = "https://www.testdome.com/content/source/stylesheets/embed.css", link = document.createElement("link");
    link.href = stylesheet, link.type = "text/css", link.rel = "stylesheet", link.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(link);
  }

}
