import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit{

  constructor(public translate: TranslateService,
              private service: CustomerService){}

  language:any = localStorage.getItem('language');
  tasks: any;
  async ngOnInit(){
    await this.service.getTasks();
    if(this.language !== 'en'){
      this.translate.use(this.language);
    } else {
      this.translate.use('en');
    }
    this.tasks = this.service.tasks;
  }
}
