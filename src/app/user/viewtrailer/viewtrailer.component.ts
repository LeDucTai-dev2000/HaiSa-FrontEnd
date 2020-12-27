import { Component, Input, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-viewtrailer',
  templateUrl: './viewtrailer.component.html',
  styleUrls: ['./viewtrailer.component.css']
})
export class ViewtrailerComponent implements OnInit {
  @Input()
  trailer = String;
  modalRef: BsModalRef;
  movies= [];
  urlSafe: SafeResourceUrl;
  constructor(private modalService: BsModalService, private userService: UserserviceService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/`+this.trailer);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
